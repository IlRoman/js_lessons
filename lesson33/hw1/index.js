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
    // return fetch(`https://api.github.com/users/IlRoman`)
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => renderUserData(data));
};

function findMostActiveUsers(data, days) {
    let userData = data.map(({ commit: { author: { email, date, name } } }) => ({ email, date, name }));

    // Сортировка по имени
    let sortedData = userData.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    })

    // считаем количество коммитов
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
    //15 IlRoman calendar
    const days = userNameInputEelem.value.split(' ')[0];
    const userName = userNameInputEelem.value.split(' ')[1];
    const repoId = userNameInputEelem.value.split(' ')[2];
    getMostActiveDevs(days, userName, repoId)
};

showUserBtnElem.addEventListener('click', onSearchArrOfCommits);