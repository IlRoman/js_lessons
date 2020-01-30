import { tasksList } from './onStorageChange.js';
import { deleteNewTask, getTasksList } from './tasksGetWay.js';
import { renderListItems } from './renderListItems.js';

const todoListElem = document.querySelector('.list');

export const deleteEvent = element => {
    let task_input = document.querySelector('.task-input');
    let listOfTasks = document.querySelector('.list');
    const deleteButton = element.target.classList.contains('delete-btn');
    console.log(element.target.closest('.list__item').dataset.id)

    if (!deleteButton) {
        return;
    }

    const taskId = tasksList.find(x => x._id == element.target.closest('.list__item').dataset.id);

    deleteNewTask(taskId._id)
        .then(() => getTasksList())
        .then(tasks => {
            localStorage.setItem('tasksList', JSON.stringify(tasks))
            listOfTasks.innerHTML = '';
            task_input.value = '';
            renderListItems(tasks);
        })
};

todoListElem.addEventListener('click', deleteEvent);