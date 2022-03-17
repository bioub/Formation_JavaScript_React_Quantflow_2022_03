function MultiStateButton({ items = [], selected = '', onSelected = () => {}  }) {

  function handleClick() {
    const index = items.indexOf(selected);
    onSelected(items[(index + 1) % items.length]);
  }

  return (
    <button className="MultiStateButton" onClick={handleClick}>
      {selected}
    </button>
  );
}

export default MultiStateButton;
