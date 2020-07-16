import React, { useState, useEffect } from "react";
import NowTemp from "../component/NowTemp";
import * as service from "../service/getDataWeather";
import wdata from "../data/wdata";
import Loading from "../component/Loading";
import Error from '../component/Error';

const NowWeather = () => {
    const [temp, setTemp] = useState(0);
    const [condition, setCondition] = useState("");
    const [feelLike, setFeelLike] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isGeoTrue, setIsGeoTrue] = useState(false);

    const getLatAndLon = () => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setIsGeoTrue(true);
                getWeather(latitude, longitude);
            },
            (err) => {
                getWeather(37.3414544, 126.831745);
            }
        );
    };

    const getWeather = async (lat, lon) => {
        const {
            data: {
                main: { temp, feels_like, humidity },
                weather,
            },
        } = await service.getNowWeather(lat, lon);

        setTemp(temp);
        setCondition(weather[0].main);
        setFeelLike(feels_like);
        setHumidity(humidity);
        setIsLoading(false);
    };

    useEffect(() => {
        getLatAndLon();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <NowTemp
                    temp={temp}
                    condition={wdata[condition].toKorean}
                    feelLike={feelLike}
                    humidity={humidity}
                    color={wdata[condition].color}
                    desc={wdata[condition].desc}
                    img={wdata[condition].imgId}
                />
            )}
            {isGeoTrue ? (
                <div></div>
            ) : (
                <Error />
            )}
        </>
    );
};

export default NowWeather;
