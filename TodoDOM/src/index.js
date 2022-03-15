import { createTodoRow } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.input');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.list');

/** @type {HTMLInputElement} */
const toggleEl = formEl.querySelector('.toggle');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.prepend(todoEl);
});

listEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('delete')) {
    // l'ancêtre le plus proche du bouton qui a la classe todo
    target.closest('.todo').remove();
  }
});

toggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = listEl.querySelectorAll('.completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
})
