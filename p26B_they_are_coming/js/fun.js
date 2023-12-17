const menuBtn = document.querySelector('.header-responsiveMenuButton');
const closeBtn = document.querySelector('.responsiveMenu-close')
const menuResponsive = document.querySelector('.responsiveMenu');

menuBtn.addEventListener('click', function(){

 menuResponsive.classList.add('is-active');

})

closeBtn.addEventListener('click', function(){

    menuResponsive.classList.remove('is-active');
   
   })