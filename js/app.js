/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const a = document.querySelector('.list')
const nav = document.querySelector('.cont__menu')

a.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})