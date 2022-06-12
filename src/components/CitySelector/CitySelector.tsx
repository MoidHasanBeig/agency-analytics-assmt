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
        {Object.values(City).map((city, i) => {
          return (
            <div
              key={i}
              onClick={() => this.props.setCity(city)}
              className={`city-option ${
                this.props.city === city && "active-city"
              }`}
            >
              {city}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CitySelector;
