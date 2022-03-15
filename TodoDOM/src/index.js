import { createTodoRow } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.input');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.list');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.prepend(todoEl);
});
