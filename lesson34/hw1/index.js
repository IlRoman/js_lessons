let formElem = document.querySelector('.login-form');
let submitButton = document.querySelector('.submit-button');
let err = document.querySelector('.error-text');

const validation = () => {
    const isValidForm = formElem.reportValidity();
    if (isValidForm) {
        submitButton.removeAttribute('disabled');
        err.textContent = '';
    } else {
        submitButton.setAttribute('disabled', true);
        err.textContent = '';
    }
};

formElem.addEventListener('input', validation)

// const baseUrl = 'https://crudcrud.com/api/e83935408df146619768e91e138c7788/form';

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
        .then(response => response.json())
        .then(formData => {
            alert(JSON.stringify(formData));
        })
        .then(() => {
            for (let i = 0; i < formInput.length; i++) formInput[i].value = '';
        })
        .catch(() => err.textContent = 'Failed to create User');
};

formElem.addEventListener('submit', onFormSubmit);