const baseUrl = 'https://crudcrud.com/api/6ab1d70bd5394fcab2e073b7d146d9a4/tasks';

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
}

export const createNewTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
}

export const updateNewTask = (taskId, updatedTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
}

export const deleteNewTask = (taskId) => {
    console.log(taskId)
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
}