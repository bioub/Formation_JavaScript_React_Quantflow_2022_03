import React, { Component } from 'react';
import { format as formatDate } from 'date-fns';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
    };
  }
  componentDidMount() {
    const { delay } = this.props;
    this._interval = setInterval(() => {
      this.setState({
        now: new Date(), // que les nouvelles clés
      });
    }, delay);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.delay !== this.props.delay) {
      clearInterval(this._interval);
      const { delay } = this.props;
      this._interval = setInterval(() => {
        this.setState({
          now: new Date(), // que les nouvelles clés
        });
      }, delay);
    }
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  render() {
    const { format = 'HH:mm:ss' } = this.props;
    const { now } = this.state;
    return <div className="Clock">{formatDate(now, format)}</div>;
  }
}

export default Clock;
