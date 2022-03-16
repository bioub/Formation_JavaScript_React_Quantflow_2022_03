import React, { Component } from 'react';

class Helloworld extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <div className="Helloworld">
        <label>Name:</label>
        <input type="text" value="LE_NOM_A_AFFICHER" />
        <hr />
        <h1>Hello LE_NOM_A_AFFICHER!</h1>
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
