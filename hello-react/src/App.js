import Clock from "./Clock";
import ClockWithControls from "./ClockWithControls";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import Hello from "./Hello";
import Helloworld from "./Helloworld";
import HelloworldHooks from "./HelloworldHooks";
import MultiStateButton from "./MultiStateButton";
import MultiStateButtonHooks from "./MultiStateButtonHooks";

function App() {
  const propsHello =  { name: 'Toto' };
  return (
    <div className="App">
      <Hello />
      <Hello {...propsHello} />
      <Hello name="Toto" age={19} isTrainer /> {/* React.createElement(Hello, { name: 'Toto' }) */}
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
      <MultiStateButton items={['Toto', 'Titi', 'Tata']} />
      <MultiStateButtonHooks items={['Toto', 'Titi', 'Tata']} />
    </div>
  );
}

export default App;
