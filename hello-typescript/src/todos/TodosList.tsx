import { Todo } from '../types';
import TodoItem from './TodoItem';

interface Props {
  items: Todo[];
  onDelete(t: Todo): void;
}

function TodosList({ items = [], onDelete = () => {} }: Props) {
  return (
    <div className="TodosList">
      {items.map((todo) => (
        <TodoItem key={todo.id} item={todo} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TodosList;
