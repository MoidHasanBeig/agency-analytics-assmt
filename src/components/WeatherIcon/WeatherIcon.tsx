import React from "react";

// fontawesome icon pack
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faSnowflake,
  faCloudShowersHeavy,
  faCloudShowersWater,
  faCloudBolt,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

// utils
import { Weather } from "../../utils/enums";

interface Props {
  weather: Weather;
}

class WeatherIcon extends React.Component<Props> {
  private iconSet = {
    Clouds: faCloud,
    Clear: faSun,
    Drizzle: faCloudShowersWater,
    Rain: faCloudShowersHeavy,
    Snow: faSnowflake,
    Thunderstorm: faCloudBolt,
  };

  public render() {
    return (
      <div className="weather-icon-component">
        {this.props.weather in this.iconSet ? (
          <FontAwesomeIcon icon={this.iconSet[this.props.weather]} />
        ) : (
          <FontAwesomeIcon icon={faWind} />
        )}
      </div>
    );
  }
}

export default WeatherIcon;
