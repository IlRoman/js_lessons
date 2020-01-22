const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputEelem = document.querySelector('.name-form__input');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
userAvatarElem.src = defaultAvatar;


function renderUserData(user) {
    // console.log(user);
}

export function getMostActiveDevs(user) {
    return new Promise((resolve, reject) => {
        function callback() {
            resolve(user);
        }
        renderUserData(user, callback);
    });
};

function findMostActiveUsers(data) {
    let userData = data.map(({ commit: { author: { email, date, name } } }) => ({ email, date, name }));

    // Сортировка по имени
    userData = userData.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    })

    // удаляем дубликаты
    let uniqueUsers = [];
    for (let i = 0; i < userData.length; i++) {
        if ((i + 1) == userData.length) return;
        if (userData[i].name !== userData[i + 1].name) {
            uniqueUsers.push(userData[i]);
        }
    }
    console.log(uniqueUsers);

    // считаем количество коммитов

    getMostActiveDevs(result)
        .then(data => console.log(data))
    // .catch(error = console.log(error));
}

const fetchArrOfCommits = (userId, repoId) => {
    return fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(response => response.json())
        .then(data => findMostActiveUsers(data));
};

const onSearchArrOfCommits = () => {
    // IlRoman calendar
    const userName = userNameInputEelem.value.split(' ')[0];
    const repoId = userNameInputEelem.value.split(' ')[1];
    fetchArrOfCommits(userName, repoId)
        .then(usersData => findMostActiveUsers(usersData));
};

showUserBtnElem.addEventListener('click', onSearchArrOfCommits);