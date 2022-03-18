import { Todo } from '../types';

interface Props {
  item: Todo;
  onDelete(t: Todo): void;
}

function TodoItem({ item, onDelete = () => {} }: Props) {
  return (
    <div className="TodoItem" data-todo-id={item.id}>
      <input type="checkbox" className="completed" checked={item.completed} readOnly />
      <span className="title">{item.title}</span>
      <button className="delete" onClick={() => onDelete(item)}>
        -
      </button>
    </div>
  );
}

export default TodoItem;
