import React from "react";

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
            <div className="today-temp">
              {Math.floor(this.props.todayWeather.temp)}&deg;
            </div>
            <div className="today-weather">
              {this.props.todayWeather.weather}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TodayCard;
