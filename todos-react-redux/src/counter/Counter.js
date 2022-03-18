function Counter({ nbClicks = 0, onIncrement = () => {} }) {
  function handleClick() {
    onIncrement();
  }

  return (
    <button className="Counter" onClick={handleClick}>
      {nbClicks}
    </button>
  );
}

export default Counter;
