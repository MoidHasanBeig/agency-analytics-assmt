import React from "react";
import "./main.css";
import { City } from "./utils/enums";
import { FullWeatherData } from "./utils/interfaces";
import { fetchWeather } from "./utils/function";

// components
import CitySelector from "./components/CitySelector/CitySelector";

interface State {
  selectedCity: City;
  weatherData: FullWeatherData;
  isFetching: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    selectedCity: City.Ottawa,
    weatherData: { Ottawa: null, Moscow: null, Tokyo: null },
    isFetching: true,
  };

  private setWeather = (city: City): void => {
    this.setState({
      isFetching: true,
    });
    fetchWeather(city).then((res) => {
      this.setState({
        weatherData: { ...this.state.weatherData, [city]: res },
        isFetching: false,
      });
    });
  };

  private setCity = (city: City): void => {
    this.setState({ selectedCity: city });
    if (!this.state.weatherData[city]) this.setWeather(city);
  };

  public componentDidMount() {
    this.setWeather(this.state.selectedCity);
  }

  public render() {
    console.log(this.state.weatherData);

    return (
      <div className="App">
        <CitySelector city={this.state.selectedCity} setCity={this.setCity} />
        <div>{this.state.isFetching ? "loading" : "Done"}</div>
      </div>
    );
  }
}

export default App;
