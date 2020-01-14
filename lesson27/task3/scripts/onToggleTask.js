import { tasksList } from './onStorageChange.js';
import { renderListItems } from './renderListItems.js';

const todoListElem = document.querySelector('.list');

export const onToggleTask = element => {
    const Checkbox = element.target.classList.contains('list__item-checkbox');
    if (!Checkbox) {
        return;
    }
    const taskData = tasksList.find(x => x.id == element.target.dataset.id);
    Object.assign(taskData, { done: element.target.checked });
    todoListElem.innerHTML = '';
    renderListItems(tasksList);
    localStorage.setItem('tasksList', JSON.stringify(tasksList));
};

todoListElem.addEventListener('click', onToggleTask);