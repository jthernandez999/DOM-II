// Your code goes here
const body = document.querySelector('body')

body.addEventListener('click', function(event){
    document.body.style.backgroundColor = 'black'
    document.body.style.color ='white'
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
    event.target.style.color = "white";
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
    event.target.style.color = 'red'
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
