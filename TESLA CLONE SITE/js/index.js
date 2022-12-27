const noscrolling = document.getElementById('fullpage');
const menuBtn = document.querySelector('.menu-btn');
const Nav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close-btn');
const blur = document.querySelector('.blur-overlay');




menuBtn.addEventListener('click', ()=>{
    Nav.classList.toggle('active')
    blur.classList.toggle('active')
    noscrolling.classList.toggle('no-scroll')
    
})
closeBtn.addEventListener('click', ()=>{
    Nav.classList.toggle('active')
    blur.classList.toggle('active')
    noscrolling.classList.toggle('no-scroll')
    
})















new fullpage('#fullpage', {
    autoScrolling: true, scrollBar: true,
})





