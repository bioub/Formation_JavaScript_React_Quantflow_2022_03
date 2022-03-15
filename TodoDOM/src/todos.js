/**
 * @param {object} options
 * @param {number} options.id
 * @param {string} options.title
 * @param {boolean} options.completed
 */
export function createTodoRow(options) {
  /*
  <div class="todo" data-todo-id="1">
    <input type="checkbox" class="completed">
    <span class="title">ABC</span>
    <button class="delete">-</button>
  </div>
  */

  const divEl = document.createElement('div');
  divEl.className = 'todo';
  divEl.dataset.todoId = options.id;

  const spanEl = document.createElement('span');
  spanEl.className = 'title';
  spanEl.innerText = options.title;

  divEl.append(spanEl);

  return divEl;
}

/*
Exercice 1 :
Compléter la fonction createTodoRow pour
créer la checkbox et le bouton

Exercice 2 :
Au clic du bouton moins, supprimer la ligne

Exercice 3 :
Au clic de la checkbox toggle (celle du formulaire)
Cocher ou décocher toutes les autres
*/
