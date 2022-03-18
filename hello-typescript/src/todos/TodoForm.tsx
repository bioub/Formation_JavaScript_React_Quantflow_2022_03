import { FormEvent } from 'react';

interface Props {
  value: string;
  onType(v: string): void;
  onAdd(v: string): void;
  onToggle(b: boolean): void;
}

function TodoForm({ value = '', onType = () => {}, onAdd = () => {}, onToggle = () => {} }: Props) {
  function handleSubmit(event: FormEvent) {
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
