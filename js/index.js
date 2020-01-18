// Your code goes here
// Create 10 unique event listeners.

// mouseover
const navItem = document.querySelectorAll('.nav-link')
const navItemHover = navItem.forEach(event => {
    event.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '2.2rem';
    });
});

// mouseout
const navItemStopHover = navItem.forEach(event => {
    event.addEventListener('mouseout', (event) => {
        event.target.style.fontSize = '1.6rem';
    });
});

// mousedown
const img = document.querySelector('img');
img.addEventListener('mousedown', (event) => {
    event.target.style.border = '15px solid lightblue';
});

// dblclick

const pictures = document.querySelectorAll('img');
for(i = 0; i < pictures.length; i ++){
    pictures[i].addEventListener('dblclick', (e) => {
        e.target.style.filter = "invert(100%)";
    });
};

// drag
const busimg = document.querySelector("img");
busimg.addEventListener("drag", e => {
    document.body.style.backgroundColor = "blue";
});

// scroll

const home = document.querySelector('.home');
window.addEventListener('scroll', () => {
    home.style.background = '#E62739'
});

// click
const allH2 = document.querySelectorAll('h2');
const h2Click = allH2.forEach(event => {
    event.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'green';
    })
});

//  right click the footer will change of color
const footer = document.querySelector('.footer');
    footer.addEventListener('contextmenu', function(){
    event.target.style.color = 'dodgerblue';
});

// load

window.addEventListener('load',() =>{
    alert('Page has loaded.');
});

//  Form Popup on Sign Me Up Button

const btns = document.querySelectorAll('.btn');
btns.forEach((btn)=>{
    btn.addEventListener('click', () => {
        prompt("Enter Your Email");
    })
});

