import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    };
    setInterval(() => {
      this.setState({
        now: new Date(), // que les nouvelles clés
      });
    }, 1000);
  }
  render() {
    // const { format = 'HH:mm:ss' } = this.props;
    const { now } = this.state;
    return (
      <div className="Clock">
        {now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
