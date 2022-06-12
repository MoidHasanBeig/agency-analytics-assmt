import React from "react";

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
    return <div className="display-grid-component"></div>;
  }
}

export default DisplayGrid;
