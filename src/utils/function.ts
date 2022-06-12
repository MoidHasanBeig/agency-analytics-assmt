import { City, Coordinates, Day } from "./enums";
import { CityWeatherData, DailyWeatherData } from "./interfaces";

// fetch and format data
export const fetchWeather = async (
  city: City
): Promise<CityWeatherData | null> => {
  try {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?${Coordinates[city]}&exclude=minutely,hourly,alerts,current&appid=`
    );
    const weatherJson = await data.json();
    const cityWeatherData: CityWeatherData = [];
    for (let i = 0; i <= 4; i++) {
      const dailyWeatherData: DailyWeatherData = {
        day: Object.values(Day)[i],
        temp: weatherJson.daily[i].temp.day - 273.15,
        weather: weatherJson.daily[i].weather[0].main,
      };
      cityWeatherData[i] = dailyWeatherData;
    }
    return cityWeatherData;
  } catch (error) {
    console.error(error);
    return null;
  }
};
