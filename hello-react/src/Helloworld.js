import React, { Component } from 'react';

class Helloworld extends Component {
  state = {
    name: 'Romain'
  };
  handleChange = (event) => {
    /** @type {HTMLInputElement} */
    const target = event.target;

    this.setState({
      name: target.value,
    });
  };
  render() {
    const { name } = this.state;
    return (
      <div className="Helloworld">
        <label>Name:</label>
        <input type="text" value={name} onChange={this.handleChange} />
        <hr />
        <h1>Hello {name}!</h1>
      </div>
    );
  }
}

export default Helloworld;

/*
Exercice 1 :
- ajouter une clé name sur l'objet state
- afficher cette clé dans la balise h1 et la balise input
- écouter l'événement change de l'input et vous servir
de event.target.value pour mettre à jour le state
(attention à this...)
*/
