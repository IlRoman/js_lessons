import { renderUserData } from './users.js'
import { renderRepos } from './repos.js'
import { showSpinner, hideSpinner } from './spinner.js';
const userNameInputEelem = document.querySelector('.name-form__input');
const listElem = document.querySelector('.repo-list')

const fetchUserData = async userName => {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    if (response.ok) {
        return await response.json();
    }
    throw new Error('Failed to load data');
}

export const getUserData = async () => {
    showSpinner();
    listElem.innerHTML = '';
    const userName = userNameInputEelem.value;
    try {
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const reposList = await fetchRepositories(userData.repos_url)
        renderRepos(reposList);
    } catch (e) {
        alert(e.message)
    } finally {
        hideSpinner();
    }
};

export const fetchRepositories = async url => {
    const response = await fetch(url);
    if (response.ok) {
        return response.json()
    }
    throw new Error('Failed to load data')
}