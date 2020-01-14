export const renderListItems = tasksList => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

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
        listElem.innerHTML = '';
        renderListItems(tasksList);
        localStorage.setItem('tasksList', JSON.stringify(tasksList));
    };

    const todoListElem = document.querySelector('.list');
    todoListElem.addEventListener('click', onToggleTask);
};