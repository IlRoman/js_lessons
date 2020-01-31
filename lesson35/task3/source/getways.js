import { renderUserData } from './users.js'
import { renderRepos } from './repos.js'
import { showSpinner, hideSpinner } from './spinner.js';
const userNameInputEelem = document.querySelector('.name-form__input');
const listElem = document.querySelector('.repo-list')

export function getUserData() {
    showSpinner();
    listElem.innerHTML = '';
    const userName = userNameInputEelem.value;
    const fetchUserData = userName => {
        return fetch(`https://api.github.com/users/${userName}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Failed to load data');
            })
            .then(data => {
                renderUserData(data);
                return data.repos_url;
            })
            .then(url => fetchRepositories(url))
            .catch(err => alert(err.message))
            .finally(() => {
                hideSpinner();
            })
    }
    fetchUserData(userName);
};

export const fetchRepositories = (url) => {
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Failed to load data')
        })
        .then(reposList => renderRepos(reposList))
}