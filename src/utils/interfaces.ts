import { Day, Weather } from "./enums";

export interface DailyWeatherData {
  day: Day;
  temp: number;
  weather: Weather;
}

export interface CityWeatherData extends Array<DailyWeatherData> {}
