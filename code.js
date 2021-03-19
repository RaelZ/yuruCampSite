// Menu Mobile
document.getElementById("menu-mobile").style.backgroundImage = "url('imgs/menuMobile.png')";
function mobile() {
    var menu = document.getElementById("button-menu-mobile");
    var button = document.getElementById("menu-mobile");

    if (menu.style.display === "none") {
        menu.style.display = "inline-block";

        button.style.backgroundImage = "url('imgs/close.png')";
        
    } else if (menu.style.display = "inline-block") {
        menu.style.display = "none";

        button.style.backgroundImage = "url('imgs/menuMobile.png')";
    }
}
// Carousel
// Images
window.load = slide(1);

function slide(n) {
    var allChars = 5;
    document.getElementsByClassName('img-characters')[0].style.backgroundImage = "url('imgs/"+n+".jpg')";

    buttonsChange(n, allChars);
}
//Buttons
function buttonsChange(n, m) {
    var buttons = document.getElementById('characters-selection');
    buttons.innerHTML = "";

    for (a=1;a<=m;a++||a--) {
        if (a==n){
            buttons.innerHTML += "<li class='char-active' onclick=slide("+a+")></li>";
            charactersActive(a);
        } else {
            buttons.innerHTML += "<li class='char' onclick=slide("+a+")></li>";
            charactersRemove(a)
        }
    }
}
function charactersActive(a) {
    document.getElementById(a).classList.remove('characters');
    document.getElementById(a).classList.add('characters-active');
}
function charactersRemove(a) {
    document.getElementById(a).classList.remove('characters-active');
    document.getElementById(a).classList.add('characters');
}