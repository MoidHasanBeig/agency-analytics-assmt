import { Day, Weather, SecondaryWeather } from "./enums";

export interface DailyWeatherData {
  day: Day;
  temp: number;
  weather: Weather | SecondaryWeather;
}

export interface CityWeatherData extends Array<DailyWeatherData> {}

export interface FullWeatherData {
  Ottawa: CityWeatherData | null;
  Moscow: CityWeatherData | null;
  Tokyo: CityWeatherData | null;
}
