import Clock from "./Clock";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <Hello name="Toto" /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Clock />
    </div>
  );
}

export default App;
