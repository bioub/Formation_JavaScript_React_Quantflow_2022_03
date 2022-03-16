// Erreur : this === l'objet Timeout de Node.js
// class Clock {
//   setState() {
//     console.log('setState');
//   }
//   handleTimeout() {
//     console.log(this);
//     this.setState({});
//   }
//   render() {
//     setTimeout(this.handleTimeout, 1000);
//   }
// }

// const clock = new Clock();
// clock.render();

// Solution 1 (historique)
// utiliser une closure pour sauvegarder this
// class Clock {
//   setState() {
//     console.log('setState');
//   }
//   handleTimeout() {
//     console.log(this);
//     this.setState({});
//   }
//   render() {
//     const self = this;
//     setTimeout(function() {
//       self.handleTimeout()
//     }, 1000);
//   }
// }

// const clock = new Clock();
// clock.render();

// Solution 2 (ES5)
// utiliser la méthode bind
// class Clock {
//   setState() {
//     console.log('setState');
//   }
//   handleTimeout() {
//     console.log(this);
//     this.setState({});
//   }
//   render() {
//     setTimeout(this.handleTimeout.bind(this), 1000);
//   }
// }

// const clock = new Clock();
// clock.render();

// Solution 3 (ES6)
// utiliser les fonctions fléchées car
// dans une fonction fléché les pseudo variables ne sont pas créées
// class Clock {
//   setState() {
//     console.log('setState');
//   }
//   handleTimeout() {
//     console.log(this);
//     this.setState({});
//   }
//   render() {
//     setTimeout(() => this.handleTimeout(), 1000);
//   }
// }

// const clock = new Clock();
// clock.render();



// // Solution 4 (bind dans le constructeur)
// // Optimisation pour éviter de refaire le bind et donc
// // recréer une fonction à chaque render
// class Clock {
//   constructor() {
//     this.handleTimeout = this.handleTimeout.bind(this);
//   }
//   setState() {
//     console.log('setState');
//   }
//   handleTimeout() {
//     console.log(this);
//     this.setState({});
//   }
//   render() {
//     setTimeout(this.handleTimeout, 1000);
//   }
// }

// const clock = new Clock();
// clock.render();


// Solution 5 (ES2022)
// Déclarer la propriété directement sous forme de fonction fléchée
class Clock {
  setState() {
    console.log('setState');
  }
  handleTimeout = () => {
    console.log(this);
    this.setState({});
  }
  render() {
    setTimeout(this.handleTimeout, 1000);
  }
}

const clock = new Clock();
clock.render();

