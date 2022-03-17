import { useState } from "react";
import ClockWithControls from "./ClockWithControls";
import Counter from "./Counter";
import CounterControlled from "./CounterControlled";
import CounterHooks from "./CounterHooks";
import Hello from "./Hello";
import Helloworld from "./Helloworld";
import HelloworldHooks from "./HelloworldHooks";
import MultiStateButton from "./MultiStateButton";
import Select from "./Select";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Titi');

  const propsHello =  { name: 'Toto' };
  return (
    <div className="App">
      <Hello />
      <Hello {...propsHello} />
      <Hello name={name} age={19} isTrainer /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <ClockWithControls />
      <Counter />
      <Counter />
      <Counter />
      <hr />
      <CounterHooks />
      <CounterHooks />
      <CounterHooks />
      <Helloworld />
      <HelloworldHooks />
      <MultiStateButton items={['Toto', 'Titi', 'Tata']} selected={name} onSelected={setName} />
      <MultiStateButton items={['Toto', 'Titi', 'Tata']} selected={name} onSelected={setName} />
      <MultiStateButton items={['Toto', 'Titi', 'Tata']} selected={name} onSelected={setName} />
      <Select items={['Toto', 'Titi', 'Tata']} selected={name} onSelected={setName} />

      <p>Vous avez sélectionné : {name}</p>

      <CounterControlled nbClicks={count} onIncrement={() => setCount(count + 1)} />
      <CounterControlled nbClicks={count} onIncrement={() => setCount(count + 1)} />
      <CounterControlled nbClicks={count} onIncrement={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
