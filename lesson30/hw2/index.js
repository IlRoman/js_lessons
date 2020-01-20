const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    callback = (error, data) => {
        if (error) {
            console.log(error);
        } else {
            console.log(data);
        }
    };
    const onImageLoaded = () => callback(null, { width: 200, height: 100 });
    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => callback('Image load failed'));

};

let imgSrc = 'https://natworld.info/wp-content/uploads/2018/01/%D0%A1%D0%BE%D1%87%D0%B8%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BD%D0%B0-%D1%82%D0%B5%D0%BC%D1%83-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-900x500.jpeg'

export const addImageV2 = imgSrc => {
    return new Promise((resolve, reject) => {
        const callback = (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        };
        addImage(imgSrc, callback);
    });
};

addImageV2(imgSrc)
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Напишите функцию, которая добавит картинку на страницу и вернет размеры этой картинки

// Основные требования:
// Код файла addImage.js находиться в редакторе ниже.
// Из файла index.js экспортируйте функцию под именем addImageV2
// addImageV2 должна промисифицировать ф-цию addImage. Это означает, что нужно создать обертку над addImage,
// которая будет возвращать промис и использовать в своей реализации ф-цию addImage, которая работает с коллбэками.
// Сигнатура: addImageV2('https://server.com/image.png'), где единственный аргумент - адрес изображения
// addImageV2 должна добавить в элемент с классом page картинку с указанным адресом

// Ф-ция addImageV2 должна вернуть Promise, который зарезолвит размеры картинки (объект { width: 200, height: 100 },
// где 200 х 100 - размеры загруженной картинки) в случае успеха. Или отклонит промис со строкой 'Image load failed', если произойдет ошибка при загрузке картинки
// Пример работы
//             addImageV2('https://server.com/image.png')
//                 .then(data => console.log(data)); // { width: 200, height: 100 }
//                 .catch(error => console.log(error)); // 'Image load failed'