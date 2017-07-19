var HAMBURGER_BUTTON_DIV = '[hamburger-button="target"]';
var HAMBURGER_BUTTON = '[hamburger-button="trigger"]';
var HAMBURGER_MENU = '[hamburger-menu="list"]';
var MENU_ITEM = '[hamburger-item="list"';

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
        element.setAttribute('hamburger-item', "list");
        element.textContent = item.text;
        divToAdd.appendChild(element);
    });
}

function listener() {
    buildMenu();
    var div = document.querySelector(HAMBURGER_MENU);
    var buttonDiv = document.querySelector(HAMBURGER_BUTTON_DIV);
    var txtArray = [].slice.call(document.querySelectorAll(MENU_ITEM));
    var hamburgerButton = document.querySelector(HAMBURGER_BUTTON);
    hamburgerButton.addEventListener('click', function(){
        event.preventDefault();
        console.log("Clicked");
        div.classList.toggle('end');
        buttonDiv.classList.toggle("change");
        txtArray.forEach(function (txt){
            txt.classList.toggle('endText');
        });
        
        
    });
}

function main() {
    listener();
}

main();