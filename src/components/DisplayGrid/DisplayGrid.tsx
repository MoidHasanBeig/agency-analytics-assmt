import React from "react";

// components
import TodayCard from "../TodayCard/TodayCard";
import WeekdayCard from "../WeekdayCard/WeekdayCard";
import Loader from "../Loader/Loader";
import ErrorUI from "../ErrorUI/ErrorUI";

// utils
import { CityWeatherData } from "../../utils/interfaces";

interface Props {
  weatherData: CityWeatherData | null;
  isFetching: boolean;
  fetchFailed: boolean;
}

class DisplayGrid extends React.Component<Props> {
  public render() {
    return (
      <div className="display-grid-component">
        {this.props.isFetching ? (
          <Loader />
        ) : this.props.fetchFailed ? (
          <ErrorUI />
        ) : (
          <React.Fragment>
            <TodayCard
              todayWeather={
                this.props.weatherData ? this.props.weatherData[0] : null
              }
            />
            <div className="weekday-cards-container">
              <WeekdayCard
                todayWeather={
                  this.props.weatherData ? this.props.weatherData[1] : null
                }
              />
              <WeekdayCard
                todayWeather={
                  this.props.weatherData ? this.props.weatherData[2] : null
                }
              />
              <WeekdayCard
                todayWeather={
                  this.props.weatherData ? this.props.weatherData[3] : null
                }
              />
              <WeekdayCard
                todayWeather={
                  this.props.weatherData ? this.props.weatherData[4] : null
                }
              />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default DisplayGrid;
