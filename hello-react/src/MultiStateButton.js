import React, { Component } from 'react';

class MultiStateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <button className="MultiStateButton">
        LA_VALEUR_A_AFFICHER
      </button>
    );
  }
}

export default MultiStateButton;

/*
Exercice 2 :
- ajouter une clé selected sur le state (qui sera la valeur séléctionnée)
- dans le constructeur de MultiStateButton affecter le premier élement
du tableau au state selected (MAUVAISE pratique)
- au clic du bouton mettre à jour selected
(si vous êtes sur le dernier élément revenir au premier)
*/
