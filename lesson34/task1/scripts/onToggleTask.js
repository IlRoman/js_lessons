import { tasksList } from './onStorageChange.js';
import { renderListItems } from './renderListItems.js';
import { updateNewTask, getTasksList } from './tasksGetWay.js';

const todoListElem = document.querySelector('.list');

export const onToggleTask = element => {
    let task_input = document.querySelector('.task-input');
    let listOfTasks = document.querySelector('.list');
    const Checkbox = element.target.classList.contains('list__item-checkbox');

    if (!Checkbox) {
        return;
    }

    const taskId = tasksList.find(x => x._id == element.target.closest('.list__item').dataset.id);
    const taskData = tasksList.find(task => task._id == taskId._id)
    debugger

    const upDatedTask = {
        text: taskData.text,
        date: taskData.date,
        done: taskData.done
            ? false
            : true
    }

    updateNewTask(taskId._id, upDatedTask)
        .then(() => getTasksList())
        .then(tasks => {
            localStorage.setItem('tasksList', JSON.stringify(tasks))
            listOfTasks.innerHTML = '';
            task_input.value = '';
            renderListItems(tasks);
        })
};

todoListElem.addEventListener('click', onToggleTask);