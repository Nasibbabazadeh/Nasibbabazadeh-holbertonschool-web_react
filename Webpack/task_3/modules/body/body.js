import $ from 'jquery';
import _ from 'lodash';
import '../body/body.css';

$(document).ready(() => {
    const body = $('<div id="body"></div>');
    const button = $('<button id="btn">Click here to get started</button>');
    const countDisplay = $('<p id="count"></p>');
    let count = 0;

    const updateCounter = () => {
        count++;
        countDisplay.text(`${count} clicks on the button`);
    };

    button.on('click', _.debounce(updateCounter, 500));
    body.append(button).append(countDisplay);
    $('body').append(body);
});
