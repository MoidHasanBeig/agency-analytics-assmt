import React from "react";

// components
import TodayCard from "../TodayCard/TodayCard";
import WeekdayCard from "../WeekdayCard/WeekdayCard";

interface Props {}

interface State {
  hasError: boolean;
}

class DisplayGrid extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public render() {
    return (
      <div className="display-grid-component">
        <TodayCard />
        <div className="weekday-cards-container">
          <WeekdayCard />
          <WeekdayCard />
          <WeekdayCard />
          <WeekdayCard />
        </div>
      </div>
    );
  }
}

export default DisplayGrid;
