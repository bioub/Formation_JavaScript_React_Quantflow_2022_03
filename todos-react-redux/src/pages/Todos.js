import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, fetchTodos, fetchTodosSuccess, setNewTodo, toggleTodos } from '../store/actions';
import { todosItemsSelector, todosLoadingSelector, todosNewTodoSelector } from '../store/selectors';
import TodoForm from '../todos/TodoForm';
import TodosList from '../todos/TodosList';

function Todos() {
  const todos = useSelector(todosItemsSelector);
  const newTodo = useSelector(todosNewTodoSelector);
  const loading = useSelector(todosLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todosFromServer) => {
        dispatch(fetchTodosSuccess(todosFromServer));
      });
  }, []);

  function handleAdd(value) {
    dispatch(addTodo(value))
  }

  function handleType(value) {
    dispatch(setNewTodo(value));
  }

  function handleToggle(checked) {
    dispatch(toggleTodos(checked));
  }

  function handleDelete(todo) {
    dispatch(deleteTodo(todo));
  }

  return (
    <div className="Todos">
      <TodoForm value={newTodo} onType={handleType} onAdd={handleAdd} onToggle={handleToggle} />
      <TodosList items={todos} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
