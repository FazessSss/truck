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