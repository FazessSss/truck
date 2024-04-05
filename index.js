    var swiper = new Swiper(".truck", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      loop: true,
       autoplay:{
        delay:2500, 
      } 
    });
    var swiper = new Swiper(".car", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      /*loop: true,
       autoplay:{
        delay:2500, 
      } */
    });
    var swiper = new Swiper(".mini", {
      allowTouchMove:false,
      slidesPerView: 1,
      spaceBetween: 1,
      freeMode: true,
      speed: 0,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".button-nextt",
        prevEl: ".button-prevv",
      },
       loop: true,
      /* autoplay:{
        delay:2500, 
      } */
    });
    

   /////////////////////////////////////////////////////////ТАБЫ////////////////////////////////////////////////////////////////////////
const tabsButtons = document.querySelectorAll('.car-slide');

tabsButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const prevActiveItem = document.querySelector('.tabs-item._active');
    const prevActiveButton = document.querySelector('.car-slide._active');
    
    if (prevActiveButton) {
      prevActiveButton.classList.remove('_active');
    }
    
    if (prevActiveItem) {
      prevActiveItem.classList.remove('_active');
    }
    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    const nextActiveItem = document.querySelector(nextActiveItemId);
    
    btn.classList.add('_active');
    nextActiveItem.classList.add('_active');
  });
})