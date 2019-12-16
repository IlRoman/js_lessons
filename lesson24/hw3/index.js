const tasks = [
    { text: 'Buy milk', done: false, date: new Date(), id: Math.trunc(Math.random() * 1000), },
    { text: 'Pick up Tom from airport', done: false, date: new Date(), id: Math.trunc(Math.random() * 100), },
    { text: 'Visit party', done: false, date: new Date(), id: Math.trunc(Math.random() * 1000), },
    { text: 'Visit doctor', done: true, date: new Date(), id: Math.trunc(Math.random() * 1000), },
    { text: 'Buy meat', done: true, date: new Date(), id: Math.trunc(Math.random() * 1000), },
];

let allLi = document.querySelector('.list');

let createTaskBtn = document.querySelector('.create-task-btn');
createTaskBtn.addEventListener('click', function () {
    let task_input = document.querySelector('.task-input');
    tasks.unshift({ text: task_input.value, done: false, id: Math.trunc(Math.random() * 1000) });
    allLi.innerHTML = '';
    task_input.value = '';
    renderListItems(tasks);
});

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
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
        const taskData = tasks.find(x => x.id == element.target.dataset.id);
        Object.assign(taskData, { done: element.target.checked });
        Object.assign(taskData, { date: new Date() });
        allLi.innerHTML = '';
        renderListItems(tasks);
    };

    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
};

renderListItems(tasks);
