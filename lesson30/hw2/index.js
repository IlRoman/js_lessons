import { addImage } from './addImage.js';

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