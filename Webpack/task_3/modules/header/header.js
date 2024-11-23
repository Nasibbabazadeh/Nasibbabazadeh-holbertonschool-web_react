import $ from 'jquery';
import '../header/header.css';

console.log('Init header');

$(document).ready(() => {
    const header = $('<div id="header"></div>');
    const logo = $('<img>').attr('src', '../assets/holberton-logo.jpg').attr('alt', 'Holberton Logo');
    const title = $('<h1>Holberton Dashboard</h1>');
    header.append(logo).append(title);
    $('body').prepend(header);
});
