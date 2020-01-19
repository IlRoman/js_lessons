export const addImage = imgSrc => {
    const p = new Promise((resolve, reject) => {
        const imgElem = document.createElement("img");
        imgElem.setAttribute('alt', 'My Photo');
        imgElem.src = imgSrc;
        const containerElem = document.querySelector('.page');
        containerElem.append(imgElem);

        const onImageLoaded = () => {
            const { width, height } = imgElem;
            resolve({ width, height });
        };

        imgElem.addEventListener('load', onImageLoaded);

        imgElem.addEventListener('error', () => reject('Image load failed'));
    });

    return p;
};

// Напишите функцию, которая добавит картинку на страницу и вернет размеры этой картинки

// Основные требования:
// Файл должен экспортировать функцию под именем addImage
// Сигнатура: addImage('https://server.com/image.png'), где единственный аргумент - адрес изображения
// addImage должна добавить в элемент с классом page картинку с указанным адресом
// Ф-ция addImage должна вернуть Promise, который зарезолвит размеры картинки
// (объект { width: 200, height: 100 }, где 200 х 100 - размеры загруженной картинки)
// в случае успеха. Или зареджектит строку 'Image load failed', если произойдет ошибка при загрузке картинки