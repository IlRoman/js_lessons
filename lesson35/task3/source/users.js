const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocation = document.querySelector('.user__location');

const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
}

export const renderUserData = (data) => {
    const { avatar_url, name, location } = data;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocation.textContent = location
        ? `from ${location}`
        : '';
}

renderUserData(defaultUser)