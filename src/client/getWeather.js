
const apiKey = "7e5885c5cb53a7df21d2de845f70342e";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=`;

export const getWeather = (city, countryCode) => fetch(`${apiURL}${city},${countryCode}&units=metric&appid=${apiKey}`).then(res => res.json())
