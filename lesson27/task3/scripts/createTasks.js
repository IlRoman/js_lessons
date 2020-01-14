import { tasksList } from './onStorageChange.js';
import { renderListItems } from './renderListItems.js';

let allLi = document.querySelector('.list');
let createTaskBtn = document.querySelector('.create-task-btn');

createTaskBtn.addEventListener('click', createTask);

export function createTask() {
    let task_input = document.querySelector('.task-input');

    tasksList.push({ text: task_input.value, done: false, id: Math.trunc(Math.random() * 1000) })
    localStorage.setItem('tasksList', JSON.stringify(tasksList));

    allLi.innerHTML = '';
    task_input.value = '';
    renderListItems(tasksList);
}