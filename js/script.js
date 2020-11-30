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

    document.querySelector(`.${desiredClass}`).classList.add('active')
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

// Таймеры ----------------------------------------------
// большой счетчик
let timerObject = {}

let start = setInterval(() => {
    getTime('2021-03-31')
}, 1000);

function getTime(deadline) {

    let timeRemaining = Date.parse(deadline) - Date.parse(new Date())
    let seconds = Math.floor(timeRemaining / 1000 % 60)
    let minutes = Math.floor(timeRemaining / 1000 / 60 % 60)
    let hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24)
    let days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24)


    timerObject.timeRemaining = timeRemaining
    timerObject.seconds = seconds
    timerObject.minutes = minutes
    timerObject.hours = hours
    timerObject.days = days

    outputOnDisplay(timerObject)
}


function outputOnDisplay(timerObject) {

    for (const key in timerObject) {
        if (timerObject[key] < 10) {
            timerObject[key] = '0' + timerObject[key]
        }
    }

    let timerBlock = document.querySelector('.timer__large')
    timerBlock.querySelector('.days').textContent = timerObject.days
    timerBlock.querySelector('.hours').textContent = timerObject.hours
    timerBlock.querySelector('.minutes').textContent = timerObject.minutes
    timerBlock.querySelector('.seconds').textContent = timerObject.seconds


    if (timerObject.timeRemaining <= 0 || isNaN(Math.floor(timerObject.timeRemaining))) {
        clearInterval(start)

        timerBlock.querySelector('.days').textContent = '00'
        timerBlock.querySelector('.hours').textContent = '00'
        timerBlock.querySelector('.minutes').textContent = '00'
        timerBlock.querySelector('.seconds').textContent = '00'
        document.querySelector('.timer__title__large').textContent += ' остановлен'
        return
    }
}

// Малый счетчик
let counterTimeDown = 3600
let timeBlock = document.querySelector('.timer__small__number')

let intervalStart = setInterval(timeRunning, 1000)

function timeRunning() {

    if (counterTimeDown == 0) {
        clearInterval(intervalStart)
    }

    let minutes = Math.floor(counterTimeDown / 60)
    let seconds = Math.floor(counterTimeDown % 60)

    if (seconds < 10) {
        timeBlock.innerHTML = `${minutes} : 0${seconds}`
    } else {
        timeBlock.innerHTML = `${minutes} : ${seconds}`
    }

    counterTimeDown--
}
// Галерея ---------------------------------------------

let galleryContent = document.querySelector('.gallery__content')
let galleryPopup = document.querySelector('.gallery__popup')
let popupImg = document.querySelector('.popup__img')
let galleryImages = document.querySelectorAll('.gallery__link img')
let neededImg = 0

galleryContent.addEventListener('click', function (e) {
    e.preventDefault()

    if (e.target.closest('.gallery__link')) {
        galleryPopup.classList.add('active')
        body.classList.add('lock')
        popupImg.src = e.target.src


        // номер изобр
        for (let i = 0; i < galleryImages.length; i++)
            if (galleryImages[i] == e.target) {
                neededImg = i
            }

    }
})

document.querySelector('.gallery__close').addEventListener('click', function () {
    galleryPopup.classList.remove('active')
    body.classList.remove('lock')
})


//переключение
let galleryNext = document.querySelector('.gallery__next')
let galleryPrew = document.querySelector('.gallery__prew')

galleryNext.addEventListener('click', function () {

    if (neededImg == galleryImages.length - 1) {
        neededImg = 0
        popupImg.src = galleryImages[neededImg + 1].src
    } else {
        popupImg.src = galleryImages[neededImg + 1].src
        neededImg++
    }
})

galleryPrew.addEventListener('click', function () {

    if (neededImg == 0) {
        neededImg = galleryImages.length - 1
        popupImg.src = galleryImages[neededImg - 1].src
    } else {
        popupImg.src = galleryImages[neededImg - 1].src
        neededImg--
    }
})
// -----------------------------------------------------