import React from "react";

// components
import TodayCard from "../TodayCard/TodayCard";

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
      </div>
    );
  }
}

export default DisplayGrid;
