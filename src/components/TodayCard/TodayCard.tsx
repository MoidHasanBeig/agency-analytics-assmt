import React from "react";

// components
import WeatherIcon from "../WeatherIcon/WeatherIcon";

// utils
import { DailyWeatherData } from "../../utils/interfaces";

interface Props {
  todayWeather: DailyWeatherData | null;
}

class TodayCard extends React.Component<Props> {
  public render() {
    return (
      <div className="today-card-component">
        {this.props.todayWeather && (
          <div className="today-content-container">
            <div className="today-placeholder">Today</div>
            <div className="details-container">
              <div className="weather-icon-container">
                <WeatherIcon weather={this.props.todayWeather.weather} />
              </div>
              <div className="weather-text-container">
                {" "}
                <div className="today-temp">
                  {Math.floor(this.props.todayWeather.temp)}&deg;
                </div>
                <div className="today-weather">
                  {this.props.todayWeather.weather}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TodayCard;
