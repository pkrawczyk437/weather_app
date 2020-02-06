export const getWeatherIcons = (id, icon) => {
  switch (true) {
    case id >= 200 && id < 232:
      return icon.Thunderstorm
    case id >= 300 && id <= 321:
      return icon.Drizzle
    case id >= 500 && id <= 521:
      return icon.Rain
    case id >= 600 && id <= 622:
      return icon.Snow
    case id >= 701 && id <= 781:
      return icon.Atmosphere
    case id === 800:
      return icon.Clear
    case id >= 801 && id <= 804:
      return icon.Clouds
    default:
      return icon.Clouds
  }
}