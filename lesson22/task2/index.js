const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
]

let createTaskBtn = document.querySelector('.create-task-btn');

createTaskBtn.addEventListener('click', function () {
    let task_input = document.querySelector('.task-input');
    tasks.push({ text: task_input.value, done: false, });
    let allLi = document.querySelector('.list');
    allLi.innerHTML = '';
    renderListItems(tasks);
});

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);
            return listItemElem;
        });

    listElem.append(...listItemsElems);
    let check = document.querySelectorAll('.list__item-checkbox');

    for (let i = 0; i < check.length; i++) {
        check[i].addEventListener('click', function () {
            for (let i = 0; i < tasks.length; i++) {
                if (check[i].checked == true) {
                    tasks[i].done = true;
                }
                let allLi = document.querySelector('.list');
                allLi.innerHTML = '';
                renderListItems(tasks);
            }
        })
    }
}

renderListItems(tasks);
