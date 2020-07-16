import React from "react";
import Loader from "react-loader-spinner";
import styles from "styled-components";

const Loading = () => {
    return (
        <Wrap>
        <Loader
            type="Oval"
            color="#00BFFF"
            height={300}
            width={300}
            timeout={3000}
        />
        </Wrap>
    );
};

const Wrap = styles.div`
    background-color: #d9d9d9;
    text-align: center;
    line-height: 140vh;
`;

export default Loading;
