function CounterControlled({nbClicks = 0, onIncrement = () => {}}) {
  function handleClick() {
    onIncrement();
  }

  return (
    <button className="CounterControlled" onClick={handleClick}>
      {nbClicks}
    </button>
  );
}

export default CounterControlled;
