import React, { useState, useEffect } from "react";
import * as service from "../service/getDataWeather";
import TomorrowTemp from "../component/TomorrowTemp";
import wdata from "../data/wdata";
import wedDesc from "../data/WedDesc.json";
import Loading from "../component/Loading";

const TomarrowWeather = () => {
    const [tomorrowTemp, setTomorrowTemp] = useState(0);
    const [tomorrowCondition, setTomorrowCondition] = useState("");
    const [tomorrowHumidity, setTomorrowHumidity] = useState(0);
    const [rainProbability, setRainProbability] = useState(1);
    const [dustInfo, setDustInfo] = useState("");
    const [dustGrade, setDusGrade] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [desc, setDesc] = useState("");

    const getTargetDate = () => {
        let targetDate;
        let targetDate_dust;
        let today_dust;

        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        targetDate = format(tomorrow, "Y-M-D 06:00:00");
        targetDate_dust = format(tomorrow, "Y-M-D");
        today_dust = format(today, "Y-M-D");

        return {
            targetDate: targetDate,
            targetDate_dust: targetDate_dust,
            today_dust: today_dust,
        };
    };

    const format = (date, format) => {
        let m, d;
        if (date.getMonth() >= 9) {
            m = date.getMonth() + 1;
        } else {
            m = "0" + (date.getMonth() + 1);
        }

        if (date.getDate() >= 10) {
            d = date.getDate();
        } else {
            d = "0" + date.getDate();
        }

        return format
            .replace(/Y/g, date.getFullYear())
            .replace(/M/g, m)
            .replace(/D/g, d);
    };

    const getTomorrowDust = async (rainP) => {
        const { targetDate_dust, today_dust } = getTargetDate();
        let before;
        const {
            data: { list },
        } = await service.getTomorrowDust(today_dust);
        try {
            let i = 0;
            while (true) {
                if (list[i].informData === targetDate_dust) {
                    setDustInfo(list[i].informOverall);
                    before = list[i].informGrade;
                    break;
                }
                i++;
                if (i === 50) break;
            }
            const after = before.slice(135, 137);
            setDusGrade(after);
            setIsLoadingSync();
        } catch (e) {
            setDustInfo("미세먼지 api가 맛이 감.");
            setDusGrade("아몰랑");
        }
        chooseDesc(rainP, dustGrade);
    };

    const setIsLoadingSync = () => {
        setIsLoading(false);
    }

    const getTomarrowWeather = async () => {
        const { targetDate } = getTargetDate();
        let weather;

        const {
            data: { list },
        } = await service.getTomorrowMorningWeather(37.3414544, 126.831745); //디미고 위도, 경도
        
        const {
            data: { rainP },
        } = await service.getTomorrowRainProbability();
        let i = 0;
        while (true) {
            if (list[i].dt_txt === targetDate) {
                weather = list[i];
                break;
            }
            if (i === 50) break;
            i++;
        }

        setTomorrowTemp(weather.main.temp);
        setTomorrowCondition(weather.weather[0].main);
        setTomorrowHumidity(weather.main.humidity);
        setRainProbability(rainP);
        getTomorrowDust(rainP);
    };

    const chooseDesc = (rainP, dustGrade) => {
        console.log(rainP);
        if (rainP >= 50) {
            setDesc(wedDesc.Rain);
        } else if (dustGrade === "나쁨" || dustGrade === "매우나쁨") {
            setDesc(wedDesc.Dust);
        } else {
            setDesc(wedDesc.Out);
        }
    };

    useEffect(() => {
        getTomarrowWeather();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <TomorrowTemp
                    temp={tomorrowTemp}
                    condition={wdata[tomorrowCondition].toKorean}
                    humidity={tomorrowHumidity}
                    rainP={rainProbability}
                    dustInfo={dustInfo}
                    dustGrade={dustGrade}
                    color={wdata[tomorrowCondition].color}
                    desc={desc}
                    img={wdata[tomorrowCondition].imgId}
                />
            )}
        </>
    );
};

export default TomarrowWeather;
