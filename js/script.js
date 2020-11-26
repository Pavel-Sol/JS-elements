// МЕНЮ ----------------------------------------
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

// ТАБЫ ----------------------------------------

const tabsContent = document.querySelector('.tabs__content')
let tabsBodyItemS = document.querySelectorAll('.tabs__body__item')
let tabsItems = document.querySelectorAll('.tabs__item')

tabsContent.addEventListener('click', function (event) {
    if (!event.target.classList.contains('tabs__item')) {
        return
    }

    let desiredClass = event.target.getAttribute('data-tab')

    for (let i = 0; i < tabsItems.length; i++) {
        tabsItems[i].classList.remove('active')
    }
    event.target.classList.add('active')


    for (let i = 0; i < tabsBodyItemS.length; i++) {
        tabsBodyItemS[i].classList.remove('active')
    }
    setTimeout(() => {
        document.querySelector(`.${desiredClass}`).classList.add('active')
    }, 300);

    // document.querySelector(`.${desiredClass}`).classList.add('active')
})

// Аккордеон ---------------------------------
let accordeonItemHead = document.querySelectorAll('.accordeon__item__head')
let accordeonItemsBody = document.querySelectorAll('.accordeon__item__body')

for (let i = 0; i < accordeonItemHead.length; i++) {
    accordeonItemHead[i].addEventListener('click', function () {

        let nextAccordeonItemBody = accordeonItemHead[i].nextElementSibling

        if (nextAccordeonItemBody.classList.contains('active')) {
            nextAccordeonItemBody.classList.remove('active')
            accordeonItemHead[i].classList.remove('active')
        } else {
            accordeonItemsBody.forEach(element => {
                element.classList.remove('active')
            });
            nextAccordeonItemBody.classList.add('active')

            accordeonItemHead.forEach(element => {
                element.classList.remove('active')
            });
            accordeonItemHead[i].classList.add('active')
        }
    })
}
// Слайдер------------------------------------
const sliderPrew = document.querySelector('.slider__control__prew')
const sliderNext = document.querySelector('.slider__control__next')
let sliderItems = document.querySelectorAll('.slider__item')
let countSliders = 0

sliderNext.addEventListener('click', function () {
    sliderItems[countSliders].classList.add('hidden')
    if (countSliders == sliderItems.length - 1) {
        countSliders = 0
    } else {
        countSliders++
    }
    sliderItems[countSliders].classList.remove('hidden')
})

sliderPrew.addEventListener('click', function () {
    sliderItems[countSliders].classList.add('hidden')
    if (countSliders == 0) {
        countSliders = sliderItems.length - 1
    } else {
        countSliders--
    }
    sliderItems[countSliders].classList.remove('hidden')
})

// Модальное окно -------------------------------------------

let popupOpen = document.querySelector('.popup__btn__open')
let popupClose = document.querySelector('.popup__btn__close')
let popupOverlay = document.querySelector('.popup__overlay')


popupClose.addEventListener('click', close)
popupOpen.addEventListener('click', open)

function open() {
    popupOverlay.classList.add('active')
    body.classList.add('lock')
}

function close() {
    popupOverlay.classList.remove('active')
    body.classList.remove('lock')
}


popupOverlay.addEventListener('click', function (e) {

    if (!e.target.closest('.popup__overlay__body')) {
        popupOverlay.classList.remove('active')
        body.classList.remove('lock')
    }
})

// -------------------------