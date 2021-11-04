$('.customers__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><img srcset="./images/Icon/arrow-left.png 2x" alt=""></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><img srcset="./images/Icon/arrow-right.png 2x" alt=""></button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });