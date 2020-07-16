import React, {useEffect} from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import s from "../css/Home.module.css";
import { Link } from "react-router-dom";
import styles from 'styled-components';

const Home = () => {
    const title = localStorage["title"] || "졸려";

    useEffect(() => {
        document.title = title;
    }, []);

    const setFontSize = () => {
        if (title.length <= 3) {
            return 7;
        } else if (title.length === 4){
            return 5.5;
        } else {
            return 4.5;
        }
    }

    const setPaddingSize = () => {
        if (title.length <= 3) {
            return -25;
        } else if (title.length === 4){
            return 5;
        } else {
            return 35;
        }
    }

    return (
        <div className={s.bg}>
            <div className={s.cloud}>
                <div className={`${s.cir1} ${s.minicir}`}></div>
                <div className={s.cir2}>
                    <Link to='/customname' class={s.tdnone}>
                    <Text className="text" fontSize={setFontSize()} paddingSize={setPaddingSize()}>{title}</Text>
                    </Link>
                </div>
                <div className={`${s.cir3} ${s.minicir}`}></div>
            </div>
            <div className={s.menucontainer}>
            <Link to="/nowweather" className={s.mcont}>
                    <img src={img1} alt="흑흑" />
                    <div className={s.menu}>현재 날씨 보기</div>
            </Link>
            <Link to="/tomorrowweather" className={s.mcont} style={{ textDecoration: 'none' }}>
                <img src={img2} alt="흑흑" width="50" />    
                <div className={s.menu}>내일 아침 점호는?</div>
            </Link>
            </div>
            <div>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <div className={s.about}>관련 정보</div>
                </Link>
            </div>
        </div>
    );
};

const Text = styles.p`
    text-decoration: none;
    position: relative;
    font-size: ${(props) => props.fontSize}em;
    top: ${(props) => props.paddingSize}px;
    font-family: 'Jua', sans-serif;
    @media (max-width: 500px) {
        font-size: ${(props) => props.fontSize/1.5}em;
        top: ${(props) => props.paddingSize+5}px;
    }
`;

export default Home;
