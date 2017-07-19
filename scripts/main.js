var HAMBURGER_BUTTON = '[hamburger-button="target"]';
var HAMBURGER_MENU = '[hamburger-menu="list"]';

var menuItems = [
    {
        href: "http://apple.com",
        text: 'about'
    },
    {
        href: "http://google.com",
        text: 'contact'
    },
    {
        href: "http://www.digitalcrafts.com",
        text: 'blog'
    },
    {
        href: "http://www.wikipedia.com",
        text: 'portfolio'
    }
];

function buildMenu() {
    var divToAdd = document.querySelector(".drop-down-menu");
    menuItems.forEach(function (item) {
        //a tag
        var element = document.createElement('a');
        element.setAttribute('href', item.href);
        element.textContent = item.text;
    });
}