function TodoForm({ value = '', onType = () => {}, onAdd = () => {}, onToggle = () => {}}) {

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(value);
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input type="checkbox" className="toggle" onChange={(e) => onToggle(e.target.checked)} />
      <input type="text" className="input" value={value} onChange={(e) => onType(e.target.value)} />
      <button className="create">+</button>
    </form>
  );
}

export default TodoForm;
