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
        .then(data => renderUserData(data))
    // .catch(err => alert(err))
};

function findMostActiveUsers(data, days) {
    let userData = data.map(({ commit: { author: { email, date, name } } }) => ({ email, date, name }));

    // фильтр по дате
    let startDate = new Date(new Date().setDate(new Date().getDate() - days));
    let filteredData = userData.filter(elem => new Date().setDate(new Date(elem.date).getDate()) > startDate);
    console.log(filteredData)

    // считаем количество коммитов
    let objOfUsers = filteredData.reduce((acc, { email, name }) => {
        const oldCount = acc[email] ? acc[email].count : 0;
        return {
            ...acc,
            [email]: { name, email, count: oldCount + 1 }
        };
    }, {});

    // находим самого активного юзера
    let arrOfUsers = Object.entries(objOfUsers);
    let result = { count: 0 };
    for (let i = 0; i < arrOfUsers.length; i++) {
        if (arrOfUsers[i][1].count > result.count) {
            result = arrOfUsers[1]
        }
    }

    fetchUserData(result[1].name);
}

export function getMostActiveDevs(days, userId, repoId) {
    const fetchArrOfCommits = (userId, repoId) => {
        return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
            .then(response => response.json())
            .then(data => findMostActiveUsers(data, days))
        // .catch(err => alert(err))
    };
    fetchArrOfCommits(userId, repoId);
};

const onSearchArrOfCommits = () => {
    const days = userNameInputEelem.value.split(' ')[0];
    const userName = userNameInputEelem.value.split(' ')[1];
    const repoId = userNameInputEelem.value.split(' ')[2];
    getMostActiveDevs(days, userName, repoId)
};

// вводить в инпут надо в таком порядке: дата, имя юзера, название репозитория (с пробелами)
showUserBtnElem.addEventListener('click', onSearchArrOfCommits);

// getMostActiveDevs('15', 'IlRoman', 'calendar');