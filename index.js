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
    

   /////////////////////////////////////////////////////////СЛАЙДЕР////////////////////////////////////////////////////////////////////////
   // получаем все кнопки навигации
const tabsButtons = document.querySelectorAll('.car-slide');

// Проходимся по всем кнопкам
tabsButtons.forEach(btn => {
  // вешаем на каждую кнопку обработчик события клик
  btn.addEventListener('click', () => {
    // Получаем предыдущую активную кнопку
    const prevActiveItem = document.querySelector('.tabs-item._active');
    // Получаем предыдущую активную вкладку
    const prevActiveButton = document.querySelector('.car-slide._active');
    
    // Проверяем есть или нет предыдущая активная кнопка
    if (prevActiveButton) {
      //Удаляем класс _active у предыдущей кнопки если она есть
      prevActiveButton.classList.remove('_active');
    }
    
    // Проверяем есть или нет предыдущая активная вкладка
    if (prevActiveItem) {
      // Удаляем класс _active у предыдущей вкладки если она есть
      prevActiveItem.classList.remove('_active');
    }
    // получаем id новой активной вкладки, который мы перем из атрибута data-tab у кнопки
    const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
    // получаем новую активную вкладку по id
    const nextActiveItem = document.querySelector(nextActiveItemId);
    
    // добавляем класс _active кнопке на которую нажали
    btn.classList.add('_active');
    // добавляем класс _active новой выбранной вкладке
    nextActiveItem.classList.add('_active');
  });
})