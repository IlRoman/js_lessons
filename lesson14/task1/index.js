'use strict';

let message = 'Just learn it!';

function sendMessage(name) {
    let sender = 'Gromcode';
    console.log(`${name}, ${message} Your ${sender}`);
}

function setMessage(text) {
    message = text;
}