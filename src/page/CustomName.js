import React, { useState } from "react";
import s from "../css/CustomName.module.css";
import { Link } from "react-router-dom";
import styles from "styled-components";

const CustomName = ({ history }) => {
    const [inputVal, setInputVal] = useState(localStorage["title"] || "졸려");

    const handleInput = (e) => {
        const {
            target: { value },
        } = e;
        setInputVal(value);
    };

    const saveTitle = () => {
        localStorage.setItem("title", inputVal);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            saveTitle();
            history.push("/");
        }
    };

    const setFontSize = () => {
        if (inputVal.length <= 3) {
            return 12;
        } else if (inputVal.length === 4) {
            return 10;
        } else {
            return 8;
        }
    };

    return (
        <div className={s.con}>
            <div className={s.text}>자기만의 사이트 이름을 정해보세요!</div>
            <Input
                type="text"
                id="title"
                maxLength="5"
                fontSize={setFontSize()}
                onChange={handleInput}
                value={inputVal}
                onKeyPress={handleKeyPress}
            />
            <div className={s.btncon}>
                <Link to="/">
                    <button className={s.btn}>취소</button>
                </Link>
                <Link to="/">
                    <button onClick={saveTitle} className={s.btn}>
                        이름 바꾸기
                    </button>
                </Link>
            </div>
        </div>
    );
};

const Input = styles.input`
    display: block;
    margin-right: auto;
    margin-left: auto;
    max-width: 85%;
    width: 650px;
    height: 30vh;
    font-size: ${(props) => props.fontSize}rem;
    text-align: center;
    @media (max-width: 500px) {
        font-size: ${(props) => props.fontSize/2.5}rem;
    }
`;

export default CustomName;
