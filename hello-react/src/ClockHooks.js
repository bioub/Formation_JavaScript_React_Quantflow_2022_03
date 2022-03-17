import React, { Component, useEffect, useState } from 'react';
import { format as formatDate } from 'date-fns';

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     const { delay } = this.props;
//     this._interval = setInterval(() => {
//       this.setState({
//         now: new Date(), // que les nouvelles clés
//       });
//     }, delay);
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.delay !== this.props.delay) {
//       clearInterval(this._interval);
//       const { delay } = this.props;
//       this._interval = setInterval(() => {
//         this.setState({
//           now: new Date(), // que les nouvelles clés
//         });
//       }, delay);
//     }
//   }
//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }
//   render() {
//     const { format = 'HH:mm:ss' } = this.props;
//     const { now } = this.state;
//     return <div className="Clock">{formatDate(now, format)}</div>;
//   }
// }

// export default Clock;

function ClockHooks({ format = 'HH:mm:ss', delay = 1000 }) {
  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate')
  // });
  // useEffect(() => {
  //   console.log('componentDidMount')
  // }, []);
  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate (si format change)')
  // }, [format]);
  // useEffect(() => {
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   }
  // }, []);
  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate (si format change)');
  //   return () => {
  //     console.log('componentWillUnmount + componentWillUpdate (si format change)');
  //   }
  // }, [format]);

  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const _interval = setInterval(() => {
      setNow(new Date());
    }, delay);
    return () => {
      clearInterval(_interval);
    };
  }, [delay]);

  return <div className="Clock">{formatDate(now, format)}</div>;
}

export default ClockHooks;
