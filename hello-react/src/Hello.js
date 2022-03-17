// import React from 'react';

/*
<div class="Hello">
  Hello <span id="prenom">Romain</span>
</div>
*/

// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';

//   const textHello = document.createTextNode('Hello ');
//   divEl.append(textHello);

//   const spanEl = document.createElement('span');
//   spanEl.id = 'prenom';
//   spanEl.innerText = 'Romain';
//   divEl.append(spanEl);

//   return divEl;
// }

// function Hello() {
//   return React.createElement(
//     'div',
//     { className: 'Hello' },
//     'Hello ',
//     React.createElement('span', { id: 'prenom' }, 'Romain'),
//   );
// }

// function Hello(props) {
//   const name = props.name ?? 'Romain';
//   // const { name = 'Romain' } = props;
//   return (
//     <div className="Hello">
//       Hello <span id="prenom">{name}</span>
//     </div>
//   );
// }

function Hello({ name = 'Romain', age = 36, isTrainer = false }) {
  return (
    <div className="Hello">
      Hello <span id="prenom">{name}</span>
    </div>
  );
}

export default Hello;
