$(function(){

  $('.catalog__slider').slick({
    prevArrow: '<button type="button" class=" slick-btn slick-prev"><img src="images/scroll-prev.png" alt=""></button>',
    nextArrow: '<button type="button" class=" slick-btn slick-next"><img src="images/scroll-next.png" alt=""></button>',
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
          breakpoint: 1367,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            
          }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
  ]
  });
  $('.new__slider').slick({
    prevArrow: '<button type="button" class=" new__slick-btn new__slick-prev"><img src="images/scroll-prev.png" alt=""></button>',
    nextArrow: '<button type="button" class=" new__slick-btn new__slick-next"><img src="images/scroll-next.png" alt=""></button>',
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
      },
  ]
    
  });
});