import React, { Component } from 'react';

class MultiStateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.items[0],
    };
  }
  handleClick = () => {
    const { selected } = this.state;
    const { items } = this.props;
    const index = items.indexOf(selected);
    this.setState({
      selected: items[(index + 1) % items.length],
    });
  };
  render() {
    const { selected } = this.state;
    return (
      <button className="MultiStateButton" onClick={this.handleClick}>
        {selected}
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
