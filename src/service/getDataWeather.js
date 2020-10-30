import axios from 'axios';

const API_KEY_OWM = "비밀";
const API_KEY_DATA_PORTAL = "비밀";

const getNowWeather = (latitude, longitude) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_OWM}&units=metric`);
}

const getTomorrowMorningWeather = (latitude, longitude) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY_OWM}&units=metric`);
}

const getTomorrowRainProbability = () => {
    return axios.get(`https://anyusung.team/api`);
}

const getTomorrowDust = (date) => {
    return axios.get(`https://cors-anywhere.herokuapp.com/http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=${API_KEY_DATA_PORTAL}&numOfRows=&pageNo=1&searchDate=${date}&InformCode=PM10&&_returnType=json`);
}

export {
    getNowWeather,
    getTomorrowMorningWeather,
    getTomorrowRainProbability,
    getTomorrowDust
};
