const menulinks = document.querySelector('.navbar__menu')
const burger = document.querySelector('.burger')

burger.addEventListener('click', function(){
    menulinks.classList.toggle('active')
})
