import $ from 'jquery';
import '../footer/footer.css';

$(document).ready(() => {
    const footer = $('<div id="footer"></div>');
    footer.append('<p>Copyright - Holberton School</p>');
    $('body').append(footer);
});
