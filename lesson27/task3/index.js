let tasksList = JSON.parse(localStorage.getItem('tasksList'), []);

let allLi = document.querySelector('.list');
let createTaskBtn = document.querySelector('.create-task-btn');

createTaskBtn.addEventListener('click', function () {
    let task_input = document.querySelector('.task-input');

    tasksList.push({ text: task_input.value, done: false, id: Math.trunc(Math.random() * 1000) })
    localStorage.setItem('tasksList', JSON.stringify(tasksList));

    allLi.innerHTML = '';
    task_input.value = '';
    renderListItems(tasksList);
});

const renderListItems = tasksList => {

    const listElem = document.querySelector('.list');

    const listItemsElems = tasksList
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => a.done - b.done)
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.setAttribute('data-id', id);
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);
            return listItemElem;
        });

    listElem.append(...listItemsElems);

    const onToggleTask = element => {
        const Checkbox = element.target.classList.contains('list__item-checkbox');
        if (!Checkbox) {
            return;
        }
        const taskData = tasksList.find(x => x.id == element.target.dataset.id);
        Object.assign(taskData, { done: element.target.checked });
        allLi.innerHTML = '';
        renderListItems(tasksList);
        localStorage.setItem('tasksList', JSON.stringify(tasksList));
    };

    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
};

renderListItems(tasksList);