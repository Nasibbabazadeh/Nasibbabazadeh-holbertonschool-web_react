import $ from 'jquery';
import _ from 'lodash';

// Add elements to the DOM
$(document).ready(() => {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Counter and debounce function
    let count = 0;

    const updateCounter = () => {
        count++;
        $('#count').text(`${count} clicks on the button`);
    };

    // Bind debounce function to button click
    $('#btn').on('click', _.debounce(updateCounter, 500));
});
