const spinnerElem = document.querySelector('.spinner')

export function showSpinner() {
    spinnerElem.classList.remove('spinner_hidden');
}

export function hideSpinner() {
    spinnerElem.classList.add('spinner_hidden');
}