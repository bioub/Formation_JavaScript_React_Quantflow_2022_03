import Clock from "./Clock";
import Counter from "./Counter";
import Hello from "./Hello";
import Helloworld from "./Helloworld";
import MultiStateButton from "./MultiStateButton";

function App() {
  return (
    <div className="App">
      <Hello name="Toto" /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Clock />
      <Counter />
      <Counter />
      <Counter />
      <Helloworld />
      <MultiStateButton items={['Toto', 'Titi', 'Tata']} />
    </div>
  );
}

export default App;
