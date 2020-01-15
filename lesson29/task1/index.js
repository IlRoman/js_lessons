export function addImage(imgSrc, callback) {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    function onImageLoaded() {
        callback(null, { width: 200, height: 100 });
    }

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'));

    function callback(error) {
        if (error) {
            console.log(error);
            return;
        }
    }
};