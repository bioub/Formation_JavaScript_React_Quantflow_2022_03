import { useEffect, useRef, useState } from 'react';
import TodoForm from '../todos/TodoForm';
import TodosList from '../todos/TodosList';

function Todos() {
  const [todos, setTodos] = useState([
    { id: Math.random(), title: 'ABC', completed: false },
    { id: Math.random(), title: 'DEF', completed: true },
    { id: Math.random(), title: 'GHI', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');
  const requestSentRef = useRef(false);

  useEffect(() => {
    if (requestSentRef.current) {
      return;
    }

    requestSentRef.current = true;
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((todosFromServer) => {
        setTodos([...todos, ...todosFromServer]);
      });
  }, [todos]);

  function handleAdd(value) {
    setTodos([{ id: Math.random(), title: value, completed: false }, ...todos]);
  }

  function handleToggle(checked) {
    setTodos(todos.map((t) => ({...t, completed: checked})));
  }

  function handleDelete(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <div className="Todos">
      <TodoForm value={newTodo} onType={setNewTodo} onAdd={handleAdd} onToggle={handleToggle} />
      <TodosList items={todos} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
