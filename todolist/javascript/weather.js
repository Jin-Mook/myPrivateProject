// 위도 경도를 통해 날씨 가져오기
// 0f9bb5392868ddc21292058812f39824
const putWeatherInfo = document.querySelector("#weather");


navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const key = "0f9bb5392868ddc21292058812f39824";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    console.log(lat, lon)
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            const weather = data.weather[0].main;
            const cityName = data.name;
            const temp = data.main.temp;

            const anchor = document.createElement("a");
            anchor.setAttribute("href", url);
            anchor.innerHTML = `${cityName} weather is ${weather} and temp is ${temp}`;
            console.log(anchor)
            putWeatherInfo.appendChild(anchor);
        })
})

