function TodoItem({ item, onDelete = () => {} }) {
  return (
    <div className="TodoItem" data-todo-id={item.id}>
      <input type="checkbox" className="completed" defaultChecked={item.completed}  />
      <span className="title">{item.title}</span>
      <button className="delete" onClick={() => onDelete(item)}>-</button>
    </div>
  );
}

export default TodoItem;
