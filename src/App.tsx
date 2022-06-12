import React from "react";
import "./main.css";
import { City } from "./utils/enums";
import { FullWeatherData } from "./utils/interfaces";

// components
import CitySelector from "./components/CitySelector/CitySelector";

interface State {
  city: City;
  weatherData: FullWeatherData;
}

class App extends React.Component<{}, State> {
  state = {
    city: City.city1,
    weatherData: { city1: null, city2: null, city3: null },
  };

  private setCity = (city: City): void => {
    this.setState({ city: city });
  };

  public componentDidMount() {
    console.log("Mount");
  }

  public render() {
    return (
      <div className="App">
        <CitySelector city={this.state.city} setCity={this.setCity} />
      </div>
    );
  }
}

export default App;
