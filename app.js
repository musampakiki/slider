// DOM slider
const body = document.querySelector('body')

let q = 'linear-gradient(229.99deg, #91bd00 -26%, #aad430 145%)'
let w = 'linear-gradient(215.32deg, #022426 -1%, #1d6e72 124%)'
let s = 'linear-gradient(221.87deg, #1187b6 1%, #0e7aa0 128%)'
let r = 'linear-gradient(220.16deg, #fe7e55 -8%, #dc481f 138%)'
const colors = [q, w, s, r]
const titles = ['Football', 'Boxing', 'Canoe', 'Tennis',]
const text = ['Sports, life & emotions', 'Sports, life & emotions', 'Sports, life & emotions', 'Sports, life & emotions']


let a =  "https://images.unsplash.com/photo-1599586120566-886c39306895?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
let b =  "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
let c =  "https://images.unsplash.com/photo-1606335543042-57c525922933?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=754&q=80"
let d =  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=856&q=80"
const URL = [a, b, c, d]
const SLIDE = 4

const container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

//sidebar
const sidebar = document.createElement('div')
sidebar.classList.add('sidebar')
for(let i = 0; i < SLIDE; i++) {
    slideBarDiv = document.createElement('div')
    const index = i
    console.log(index)
    color = colors[index]
    slideBarDiv.style.background = `${color}`
    sidebar.appendChild(slideBarDiv)
    const titleSlide = document.createElement('h1')
    title = titles[index]
    titleSlide.append(`${title}`)
    slideBarDiv.appendChild(titleSlide)
    const pSlide = document.createElement('p')
    p = text[index]
    pSlide.append(`${p}`)
    slideBarDiv.appendChild(pSlide)
}
container.appendChild(sidebar)
console.log(sidebar)

//slide
const mainSlide = document.createElement('div')
mainSlide.classList.add('main-slide')
for(let i = 0; i < SLIDE; i++) {
    slideDiv = document.createElement('div')
    const index = i
    console.log(index)
    url = URL[index]
    slideDiv.style.backgroundImage = `url(${url})`
    mainSlide.appendChild(slideDiv)
}
container.appendChild(mainSlide)
console.log(mainSlide)

// button up & down
controls = document.createElement('div')
controls.classList.add('controls')
container.appendChild(controls)

upBtn = document.createElement('button')
icon = document.createElement('i')
upBtn.classList.add('up-button')
controls.appendChild(upBtn)
icon.append('up')
upBtn.appendChild(icon)

downBtn = document.createElement('button')
icon = document.createElement('i')
downBtn.classList.add('down-button')
controls.appendChild(downBtn)
icon.append('down')
downBtn.appendChild(icon)

//logic
const slidesCount = mainSlide.querySelectorAll('div').length

console.log('number', slidesCount)

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1)*100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

document.addEventListener('keydown', event => {
    if ( event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
    } else if (direction === 'down')
    {
        activeSlideIndex--
        if (activeSlideIndex < 0)
        {
            activeSlideIndex = slidesCount-1
        }
    }
    const height = container.clientHeight
    console.log(height)
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}