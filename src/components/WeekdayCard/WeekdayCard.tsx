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
          <div>
            <div>{this.props.todayWeather.day}</div>
            <div>{this.props.todayWeather.temp}</div>
            <div>{this.props.todayWeather.weather}</div>
          </div>
        )}
      </div>
    );
  }
}

export default WeekdayCard;
