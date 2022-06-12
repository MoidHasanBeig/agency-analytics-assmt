import {Day, Weather} from "./enums";

interface DailyWeatherData {
    day: Day;
    temp: number;
    weather: Weather;
}

interface CityWeatherData {
    day0: DailyWeatherData;
    day1: DailyWeatherData;
    day2: DailyWeatherData;
    day3: DailyWeatherData;
    day4: DailyWeatherData;
}

export interface FullWeatherData {
    city1: CityWeatherData | null;
    city2: CityWeatherData | null;
    city3: CityWeatherData | null;
}