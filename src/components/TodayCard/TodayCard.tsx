import React from "react";

interface Props {}

interface State {
  hasError: boolean;
}

class TodayCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public render() {
    return <div className="today-card-component"></div>;
  }
}

export default TodayCard;
