import React from "react";
import { City } from "../../utils/enums";

interface Props {
  city: City;
  setCity: (city: City) => void;
}

class CitySelector extends React.Component<Props> {
  public render() {
    return (
      <div className="city-selector-component">
        <div
          onClick={() => this.props.setCity(City.city1)}
          className="city-option"
        >
          {City.city1}
        </div>
        <div
          onClick={() => this.props.setCity(City.city2)}
          className="city-option"
        >
          {City.city2}
        </div>
        <div
          onClick={() => this.props.setCity(City.city3)}
          className="city-option"
        >
          {City.city3}
        </div>

        {this.props.city}
      </div>
    );
  }
}

export default CitySelector;
