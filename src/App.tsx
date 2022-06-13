import React from "react";
import "./main.css";

// utils
import { City } from "./utils/enums";
import { CityWeatherData } from "./utils/interfaces";
import { fetchWeather } from "./utils/function";

// components
import CitySelector from "./components/CitySelector/CitySelector";
import DisplayGrid from "./components/DisplayGrid/DisplayGrid";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

interface State {
  selectedCity: City;
  weatherData: CityWeatherData | null;
  isFetching: boolean;
  fetchFailed: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    selectedCity: City.Ottawa,
    weatherData: null,
    isFetching: true,
    fetchFailed: false,
  };

  private setWeather = (city: City): void => {
    this.setState({
      isFetching: true,
      fetchFailed: false,
    });
    fetchWeather(city).then((res) => {
      // null response indicates an error while fetching from the API
      if (!res) {
        this.setState({
          fetchFailed: true,
          isFetching: false,
        });
      } else {
        this.setState({
          weatherData: res,
          isFetching: false,
        });
      }
    });
  };

  private setCity = (city: City): void => {
    this.setState({ selectedCity: city });
    this.setWeather(city);
  };

  public componentDidMount() {
    this.setWeather(this.state.selectedCity);
  }

  public render() {
    console.log(this.state.weatherData);

    return (
      <div className="App">
        <ErrorBoundary>
          <CitySelector city={this.state.selectedCity} setCity={this.setCity} />
          <DisplayGrid
            isFetching={this.state.isFetching}
            fetchFailed={this.state.fetchFailed}
            weatherData={this.state.weatherData}
          />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
