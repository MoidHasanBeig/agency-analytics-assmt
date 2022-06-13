import React from "react";

// utils
import { DailyWeatherData } from "../../utils/interfaces";

interface Props {
  todayWeather: DailyWeatherData | null;
}

interface State {
  hasError: boolean;
}

class WeekdayCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public render() {
    return (
      <div className="weekday-card-component">
        {this.props.todayWeather && (
          <div className="weekday-content-container">
            <div className="weekday-name">{this.props.todayWeather.day}</div>
            <div className="weekday-temp">
              {Math.floor(this.props.todayWeather.temp)}&deg;
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default WeekdayCard;
