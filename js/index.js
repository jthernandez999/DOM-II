// Your code goes here
const body = document.querySelector('body')

body.addEventListener('click', function(event){
    document.body.style.backgroundColor = 'black'
    document.body.style.color ='white'
})

body.addEventListener('mouseup', function(event){
    document.body.style.fontSize = '125%'
})

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        document.body.style.backgroundColor = 'yellow'
        document.body.style.color = 'black'
    }
})


let navAnchors = document.querySelectorAll('.nav')[0]
console.log(navAnchors)

navAnchors.addEventListener('mouseover', function(event) {
    event.target.style.color = "brown";
    setTimeout(function() {
        event.target.style.color = 'black';
        event.target.style.fontSize = '20px';
    }, 500)
})

let h1 = document.querySelector('h1')

h1.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'orange'
    event.target.style.fontSize = '50px'
})

let h2 = document.querySelector('h2')
h2.addEventListener('mouseleave', function(event){
    event.target.style.fontSize = '50px'
    event.target.style.color = 'orange'
})

let h2LetsGo = document.querySelectorAll('h2')[1]
h2LetsGo.addEventListener('mouseleave', function(event){
    event.target.style.fontSize = '50px'
    event.target.style.color = 'orange'
})

let pContent = document.querySelector('p')
console.log(pContent)

pContent.addEventListener('keydown', function(event) {
    event.target.style.fontSize = '50px'
    
})

window.addEventListener('load', function(event) {
    this.alert('Loaded!')
})


window.addEventListener('resize', function(event) {
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    console.log('resized window')
})

window.addEventListener('scroll', event => {
    document.body.style.backgroundColor = 'beige'; 
})


body.addEventListener('dblclick', function(event) {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
})

let busImage = document.querySelector('.intro img')
console.log(busImage)

busImage.addEventListener('mouseover', function(event) {
    this.style = 'box-shadow: 2px 2px 2px grey'
    this.width = '1100'
})

busImage.addEventListener('mouseout', function(event) {
    this.style = ''
    this.width = '850'
})

let adventureImg = document.querySelector('.content-section img')
console.log(adventureImg)

adventureImg.addEventListener('mouseover', function(event) {
    this.style = 'box-shadow: 2px 2px 2px grey'
    this.width = '1100'
})

adventureImg.addEventListener('mouseout', function(event) {
    this.style = ''
    this.width = '600'
})

let funImg = document.querySelector('.inverse-content img')
console.log(funImg)

funImg.addEventListener('mouseover', function(event) {
    this.style = 'box-shadow: 2px 2px 2px grey'
    this.width = '1100'
})

funImg.addEventListener('mouseout', function(event) {
    this.style = ''
    this.width = '600'
})

