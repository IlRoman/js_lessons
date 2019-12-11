let divElem = document.querySelector('.rect_div');
let pElem = document.querySelector('.rect_p');
let spanElem = document.querySelector('.rect_span');

let clearBtn = document.querySelector('.clear-btn');
let removeHandlersBtn = document.querySelector('.remove-handlers-btn');
let attachHandlersBtn = document.querySelector('.attach-handlers-btn');

let logTarget = (text, color) => {
    let eventsList = document.querySelector('.events-list');
    eventsList.innerHTML += `<span style="color:${color}; margin-left:8px">${text}</span>`;
};

let logGreenDiv = logTarget.bind(null, 'DIV', 'green');
let logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
// logGreenDiv();
let logGreenP = logTarget.bind(null, 'P', 'green');
let logGreyP = logTarget.bind(null, 'P', 'grey');
// logGreenP();
let logGreenSpan = logTarget.bind(null, 'SPAN', 'green');
let logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

clearBtn.addEventListener('click', function () {
    let eventsList = document.querySelector('.events-list');
    eventsList.innerHTML = '';
});

removeHandlersBtn.addEventListener('click', function () {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);

    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);

    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
});

attachHandlersBtn.addEventListener('click', function () {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);

    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);

    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
});