import React from "react";

class ErrorUI extends React.Component {
  public render() {
    return (
      <div className="error-ui">
        There was an error.
        <br />
        Please check your connectivity and try again.
      </div>
    );
  }
}

export default ErrorUI;
