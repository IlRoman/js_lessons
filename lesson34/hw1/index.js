let formElem = document.querySelector('.login-form');
let submitButton = document.querySelector('.submit-button')

const validation = () => {
    const isValidForm = formElem.reportValidity();
    isValidForm
        ? submitButton.removeAttribute('disabled')
        : submitButton.setAttribute('disabled', true);
};

formElem.addEventListener('input', validation)

const baseUrl = 'https://crudcrud.com/api/e83935408df146619768e91e138c7788/form';

const answerFromServer = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(answer => console.log(answer))
}

const sendToServer = formData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(formData)
    })
}

const onFormSubmit = event => {
    event.preventDefault();

    const formData = [...new FormData(formElem)]
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    let formInput = document.querySelectorAll('.form-input');

    sendToServer(formData)
        .then(answerFromServer())
        .then(() => {
            for (let i = 0; i < formInput.length; i++) formInput[i].value = '';
        })
        .catch(error => console.log(new Error('Failed to create User')))
};

formElem.addEventListener('submit', onFormSubmit);