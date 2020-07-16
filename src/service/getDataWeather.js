import axios from 'axios';

const API_KEY_OWM = "1c1f2f7ab384e24ea3701b6b894aa157";
const API_KEY_DATA_PORTAL = "RtlD2m5xVuZAwMVRdHEny6IH3jXeG3bGW0fRK8dNaQl%2FBqmSltuEIaLWIZgjNSq%2FLFS65fMbXN5Fvt3yPe01%2Bw%3D%3D";

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