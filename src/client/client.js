
const apiKey = "7e5885c5cb53a7df21d2de845f70342e";
const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=`;

export const getWeather = (city, country) => fetch(`${apiURL}${city},${country}&units=metric&appid=${apiKey}`).then(res => res.json())
