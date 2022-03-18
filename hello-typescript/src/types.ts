export interface CounterState {
  nbClicks: number;
}

export interface TodosState {
  loading: boolean;
  newTodo: string;
  items: Todo[];
}

export interface State {
  counter: CounterState;
  todos: TodosState;
}

export interface Todo {
  id: number | string;
  title: string;
  completed: boolean;
}
