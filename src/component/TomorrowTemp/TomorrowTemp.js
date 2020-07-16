import React, {useState} from "react";
import styles from "styled-components";
import * as imgs from "../../assets";
import style from "../../css/TomorrowWeather.module.css";

const NowTemp = ({ temp, condition, humidity, rainP, dustInfo, dustGrade, color, desc, img }) => {
    const [dsply, setDsply] = useState(false);

    return (
        <BgAndWrapper color={color}>
            <div>디미고의 내일 아침 6시 경의 날씨입니다., 내일의 강수 확률은 매일 7시 30분에 업데이트됩니다.</div>
            <img src={imgs[img]} alt="날씨 이미지" className={style.wimage}/>
            <div className={style.condition}>{condition}</div>
            <div className={style.cont}>
                <div>&nbsp;강수확률: {rainP}%&nbsp;</div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <div>&nbsp;미세먼지: {dustGrade}&nbsp;</div>
                    <button className={style.dustbtn} onClick={() => setDsply(!dsply)}>미세먼지 상세정보</button>
                </div>
            </div>
            <DustInfo dsply={dsply ? "block" : "none"}>{dustInfo}</DustInfo>
            <div className={style.cont}>
                <div>&nbsp;기온: {temp}°C&nbsp;</div>
                <div>&nbsp;습도: {humidity}%&nbsp;</div>
            </div>
            
            <div className={style.ddesc}>{desc}</div>
            <div className={style.desc}>*코로나 덕분에 쓸모없어진 페이지입니다.</div>
        </BgAndWrapper>
    );
};

const BgAndWrapper = styles.div`
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.color};
`;

const DustInfo = styles.div`
    display: ${(props) => props.dsply};
    text-align: center;
    font-size: 1.5rem;
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

export default NowTemp;
