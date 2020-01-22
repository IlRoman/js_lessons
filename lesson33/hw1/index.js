const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userEmailElem = document.querySelector('.user__email');
const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputEelem = document.querySelector('.name-form__input');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;

function renderUserData(userData) {
    const { avatar_url, login, email } = userData;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = login;
    userEmailElem.textContent = email;
}

const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => renderUserData(data));
};

function findMostActiveUsers(data, days) {
    let userData = data.map(({ commit: { author: { email, date, name } } }) => ({ email, date, name }));

    // фильтр по дате
    let startDate = new Date(new Date().setDate(new Date().getDate() - days));
    let filteredData = userData.filter(elem => new Date().setDate(new Date(elem.date).getDate()) > startDate);

    // Сортировка по имени
    let sortedData = filteredData.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    })

    // вычисляем уникальных юзеров и добавляем им свойство count с колличеством их коммитов
    let arrOfUsers = [];
    let count = 0;
    for (let i = 0; i < sortedData.length; i++) {
        if ((i + 1) !== sortedData.length) {
            if (i == sortedData.length - 2) {
                arrOfUsers.push({ ['count']: count + 1, ...sortedData[i] })
            }
            if (sortedData[i].name == sortedData[i + 1].name) {
                count++
            } else {
                arrOfUsers.push({ ['count']: count, ...sortedData[i] })
                count = 0;
            }
        }
    }

    // находим самого активного юзера
    let result = { count: 0 };
    for (let i = 0; i < arrOfUsers.length; i++) {
        if (arrOfUsers[i].count > result.count) {
            result = arrOfUsers[i];
        }
    }
    fetchUserData(result.name);
}

export function getMostActiveDevs(days, userId, repoId) {
    const fetchArrOfCommits = (userId, repoId) => {
        return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
            .then(response => response.json())
            .then(data => findMostActiveUsers(data, days));
    };
    fetchArrOfCommits(userId, repoId);
};

const onSearchArrOfCommits = () => {
    const days = userNameInputEelem.value.split(' ')[0];
    const userName = userNameInputEelem.value.split(' ')[1];
    const repoId = userNameInputEelem.value.split(' ')[2];
    getMostActiveDevs(days, userName, repoId)
};

// вводить в инпут в порядке: дата, имя юзера, название репозитория (с пробелами)
showUserBtnElem.addEventListener('click', onSearchArrOfCommits);

getMostActiveDevs('5', 'IlRoman', 'calendar');