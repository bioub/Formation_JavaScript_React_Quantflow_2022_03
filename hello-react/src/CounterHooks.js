// import React, { Component } from 'react';

import { useState } from "react";

// class Counter extends Component {
//   state = {
//     nbClicks: 0,
//   };
//   handleClick = (event) => {
//     // console.log(event.currentTarget.className); // Counter
//     this.setState({
//       nbClicks: this.state.nbClicks + 1,
//     });
//   };
//   render() {
//     const { nbClicks } = this.state;
//     return (
//       <button className="Counter" onClick={this.handleClick}>
//         {nbClicks}
//       </button>
//     );
//   }
// }

// export default Counter;

/*
Sous forme de classe
{
  nbClicks: 0,
  name: 'Toto',
}

Avec useState
[
  0,
  'Toto',
]
*/

function CounterHooks() {
  const [nbClicks, setNbClicks] = useState(0); // 0
  // const [name, setName] = useState('Toto'); // 'Toto'

  function handleClick() {
    // setNbClicks(nbClicks + 1);
    setNbClicks((nb) => nb + 1);
  }

  return (
    <button className="CounterHooks" onClick={handleClick}>
      {nbClicks}
    </button>
  );
}

export default CounterHooks;
