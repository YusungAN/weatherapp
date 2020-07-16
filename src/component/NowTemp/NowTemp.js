import React from "react";
import styles from "styled-components";
import * as imgs from "../../assets";
import style from "../../css/NowWeather.module.css";

const NowTemp = ({ temp, condition, feelLike, humidity, color, desc, img }) => {
    return (
        <>
        <BgAndWrapper color={color}>
            <div className={style.fcont}>
                <img src={imgs[img]} className={style.wimage} alt="날씨 이미지" />
                <div className={style.condition}>{condition}</div>
            </div>
            <div className={style.cont}>
                <div className={style.temp}>&nbsp;기온: {temp}°C&nbsp;</div>
                <div className={style.feellike}>&nbsp;체감온도: {feelLike}°C&nbsp;</div>
                <div className={style.humidity}>&nbsp;습도: {humidity}%&nbsp;</div>
            </div>
            <div className={style.desc}>{desc}</div>
        </BgAndWrapper>
        </>
    );
}

//const color = 'red';
const BgAndWrapper = styles.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.color};
`;

export default NowTemp;
