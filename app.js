const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar__menu')
const burger = document.querySelector('.burger')

burger.addEventListener('click', function(){
    menulinks.classList.toggle('active')
})

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})
console.log(123)