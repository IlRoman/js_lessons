import { getUserData } from './getways.js'

const showUserBtnElem = document.querySelector('.name-form__btn');
showUserBtnElem.addEventListener('click', getUserData);

