import TodoItem from "./TodoItem";

function TodosList({ items = [], onDelete = () => {} }) {
  return (
    <div className="TodosList">
      {items.map((todo) => <TodoItem key={todo.id} item={todo} onDelete={onDelete} />)}
    </div>
  );
}

export default TodosList;
