import { Day, Weather, SecondaryWeather } from "./enums";

export interface DailyWeatherData {
  day: Day;
  temp: number;
  weather: Weather | SecondaryWeather;
}

export interface CityWeatherData extends Array<DailyWeatherData> {}
