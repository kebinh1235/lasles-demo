$('.customers__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img srcset="./images/Icon/arrow-left.png 2x" alt=""></button>`,
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });