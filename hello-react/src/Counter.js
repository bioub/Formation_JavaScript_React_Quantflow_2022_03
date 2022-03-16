import React, { Component } from 'react';

class Counter extends Component {
  state = {
    nbClicks: 0,
  };
  handleClick = (event) => {
    // console.log(event.currentTarget.className); // Counter
    this.setState({
      nbClicks: this.state.nbClicks + 1,
    });
  };
  render() {
    const { nbClicks } = this.state;
    return (
      <button className="Counter" onClick={this.handleClick}>
        {nbClicks}
      </button>
    );
  }
}

export default Counter;
