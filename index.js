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



///////ОКНO/////////////////////////
document.addEventListener('DOMContentLoaded', () => {  
 
  // Кнопка по которой происходит клик
  let callBackButton = document.getElementById('callback-button');
 
  // Модальное окно, которое необходимо открыть
  let modal1 = document.getElementById('modal-1');
 
  // Кнопка "закрыть" внутри модального окна
  let closeButton = modal1.getElementsByClassName('modal__close-button')[0];
 
  // Тег body для запрета прокрутки
  let tagBody = document.getElementsByTagName('body');
 
  callBackButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.add('modal_active');
    tagBody.classList.add('hidden');
  }
 
  closeButton.onclick = function (e) {
    e.preventDefault();
    modal1.classList.remove('modal_active');
    tagBody.classList.remove('hidden');
  }
 
  modal1.onmousedown = function (e) {
    let target = e.target;
    let modalContent = modal1.getElementsByClassName('modal__content')[0];
    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal_active');
      tagBody.classList.remove('hidden');
    }
  };
 
});