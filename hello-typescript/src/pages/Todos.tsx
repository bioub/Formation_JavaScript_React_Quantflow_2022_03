import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  fetchTodosSuccess,
  setNewTodo,
  toggleTodos,
} from '../store/actions';
import { todosItemsSelector, todosNewTodoSelector } from '../store/selectors';
import TodoForm from '../todos/TodoForm';
import TodosList from '../todos/TodosList';
import { Todo } from '../types';

function Todos() {
  const todos = useSelector(todosItemsSelector);
  const newTodo = useSelector(todosNewTodoSelector);
  // const loading = useSelector(todosLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todosFromServer) => {
        dispatch(fetchTodosSuccess(todosFromServer));
      });
  }, [dispatch]);

  function handleAdd(value: string) {
    dispatch(addTodo(value));
  }

  function handleType(value: string) {
    dispatch(setNewTodo(value));
  }

  function handleToggle(checked: boolean) {
    dispatch(toggleTodos(checked));
  }

  function handleDelete(todo: Todo) {
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
