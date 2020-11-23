let burger = document.querySelector('.header__burder')
let header = document.querySelector('.header')
let body = document.querySelector('body')

burger.addEventListener('click', func)

function func() {
    burger.classList.toggle('active')
    header.classList.toggle('active')
    body.classList.toggle('lock')
}


let link = document.querySelectorAll('.header__menu__link')
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
        header.classList.remove('active')
        burger.classList.remove('active')
        body.classList.remove('lock')
    })
}