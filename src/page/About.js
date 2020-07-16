import React from "react";
import s from '../css/About.module.css';

const About = () => {
    return (
        <>
        <h1 className={s.h1}>알림 사항</h1>
        <hr className={s.hr}/>
        <h2 className={s.h2}>사용한 api</h2>
        <ul className={s.ul}>
            <li className={s.li}>현재 날씨: OpenWeatherMap</li>
            <li className={s.li}>내일 날씨: OpenWeatherMap</li>
            <li className={s.li}>내일 강수량: 공공데이터 포털 - 중기예보 조회서비스</li>
            <li className={s.li}>내일 미세먼지: 공공데이터 포털 - 한국환경공단_대기오염정보</li>
        </ul>
        <h2 className={s.h2}>잡것들</h2>
        <ul className={s.ul}>
            <li className={s.li}>현재 날씨는 현재 사용자의 위도, 경도를 받아 해당 지역의 날씨를 실시간으로 보여줍니다.</li>
            <li className={s.li}>내일 날씨는 처음 의도가 디미고 야외 점호 예측이었던 관계로, 지역은 디미고로 고정되어 있습니다.</li>
            <li className={s.li}>내일 날씨는 날씨를 불러오는데 시간이 좀 걸릴 수 있습니다.</li>
            <li className={s.li}>로딩 페이지가 끝나고도 화면이 안나오면 새로고침을 해주시고 그래도 해결되지 않으면 죄송합니다.</li>
            <li className={s.li}>날씨가 실제 날씨와 조금 차이가 있을 수 있는 점 양해바랍니다. 근데 제 잘못이 아니라 api 잘못입니다.</li>
            <li className={s.li}>가장 처음 페이지에서 구름 안에 글씨를 클릭 또는 터치하면 사이트의 이름을 사용자 지정으로 바꿀 수 있습니다.</li>
        </ul>
        </>
    );
}

export default About;