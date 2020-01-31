const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';
const userLocation = document.querySelector('.user__location');
userAvatarElem.src = defaultAvatar;

export const renderUserData = (data) => {
    const { avatar_url, name, location } = data;
    userAvatarElem.src = avatar_url;
    userNameElem.textContent = name;
    userLocation.textContent = `from ${location}`;
}