const listElem = document.querySelector('.repo-list')

export function renderRepos(repoList) {
    const repoListElems = repoList
        .map(({ name }) => {
            const listElem = document.createElement('li');
            listElem.classList.add('repo-list__item');
            listElem.textContent = name;
            return listElem;
        })

    listElem.innerHTML = '';
    listElem.append(...repoListElems);
}