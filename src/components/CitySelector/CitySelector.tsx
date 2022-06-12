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
          onClick={() => this.props.setCity(City.Ottawa)}
          className="city-option"
        >
          {City.Ottawa}
        </div>
        <div
          onClick={() => this.props.setCity(City.Moscow)}
          className="city-option"
        >
          {City.Moscow}
        </div>
        <div
          onClick={() => this.props.setCity(City.Tokyo)}
          className="city-option"
        >
          {City.Tokyo}
        </div>

        {this.props.city}
      </div>
    );
  }
}

export default CitySelector;
