let menu = document.getElementById('menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = function(){
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}