
let fotocar = document.querySelectorAll('div#foto')
let namess = document.querySelectorAll('div#name')
let car = document.querySelectorAll('div#car')
let locations = document.querySelectorAll('div#location')
let number = document.querySelectorAll('div#number')

let img = ['./assets/img/1.jpg', './assets/img/2.jpg', './assets/img/3.jpg', './assets/img/4.jpg', './assets/img/5.jpg', './assets/img/6.jpg', './assets/img/7.jpg', './assets/img/8.jpg', './assets/img/9.jpg', './assets/img/10.jpg' ]
let names = ['Сырчиков Андрей', 'Смолов  Руслан', 'Смычков Олег', 'Беридзе Георгий', 'Ярославцев Александр', 'Субботин Алексей', 'Гилямутдинов Радик', 'Шкляев Леонид', 'Каликин Олег', 'Гурина Анна']
let cars = ['Kia-Rio н624ех59', 'Huyndai Getz о084тх59', 'Huyndai Solaris о933нх59', 'Лада Гранта р028св59', 'Datsun On-do р713ем59', 'Lada Granta н636ем159', 'Renault Sandero к899нк159', 'Datsun Мi-do к202кр159', 'Hyundai Elantra х388кв159', 'Lada Granta р057мм159']
let locationss = ['1', '1', '2', '1', '3', '4', '2', '3', '1', '2']
let numbers = ['89822482323', '89323377000','89091000075', '89194963411', '89197068433', '89082710489', '89194733011', '89292316779', '89323311421', '89519488832']
// лента - 1. бахаревка - 2. экспо - 3. Крупской - 4. 

let plos = ['Бульвар Гагарина 65', 'Бахаревская 53', 'Шоссе Космонавтов 59', '​Крупской 79а']

for (i = 0; i < fotocar.length; i++) {
    fotocar[i].style.backgroundImage = `url('${img[i]}')`
    namess[i].textContent = names[i]
    car[i].textContent = cars[i]
    if (locationss[i] == 1) {
        locations[i].textContent = plos[0]
    } else if (locationss[i] == 2) {
        locations[i].textContent = plos[1]
    } else if (locationss[i] == 3) {
        locations[i].textContent = plos[2]
    } else if (locationss[i] == 4) {
        locations[i].textContent = plos[3]
    }
    number[i].textContent = numbers[i]
}

let tops = document.querySelector('div.top')


const position = document.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        tops.style.bottom = '18px'
    }
    if (window.scrollY < 100) {
        tops.style.bottom = '-200px'
    }
})


// вход

let sing = false
let input = document.querySelectorAll('div.d1 input')
let singin = document.querySelector('button.singin')
let error = document.querySelector('p.error')

singin.onclick = function () {
    login()
}
function login() {
    if (input[0].value == 'Maksimk' && input[1].value == '1465') {
        sing = true
        document.location = 'http://127.0.0.1:5500/cart.html'
    }
    else {
        sing = false
        error.style.opacity = 1
    }
}

