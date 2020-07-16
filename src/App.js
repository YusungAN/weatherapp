import React from "react";
import { Route } from "react-router-dom";
import { Home, NowWeather, TomorrowWeather, About, CustomName } from "page";

const App = () => {
    return (
        <>
            <Route exact path={"/"} component={Home} />
            <Route path={"/nowweather"} component={NowWeather} />
            <Route path={"/tomorrowweather"} component={TomorrowWeather} />
            <Route path={"/about"} component={About}/>
            <Route path={"/customname"} component={CustomName}/>
        </>
    );
};

export default App;
