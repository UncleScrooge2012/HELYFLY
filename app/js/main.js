$(function () {

  let modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });



  $(".reviews__stars").rateYo({
    rating: 5,
    starWidth: '17px',
    spacing: "7px",
    readOnly: true
  });

  $('.open-spoiler').click(function (event) {
    $(this).toggleClass('active').prev().slideToggle(300);
  });

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.757967, 37.619001],
      zoom: 15,


    }, {
      searchControlProvider: 'yandex#search'

    }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Я тут',
        balloonContent: 'Встречаемся тут!'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '../images/png/marker.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });



    myMap.geoObjects
      .add(myPlacemark)

  });

  $('form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userDate: "required",
      userName: "required",
      userSurname: "required",
      userPhone: "required",
      
      
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      uuserName: "Имя обязательно",
      userSurname: "Фамилия обязательно",
      userDate: "Просьба выбрать дату",
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Обизательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }

  });

  $('[name=userDate]').mask('00/00/0000');
  $('[name=userPhone]').mask('+0(000) 00-00-000');
  $('[name=userData]').mask('0000-0000-0000-0000');
  $('[name=userCVV]').mask('000');
  $('[name=userNumber]').mask('00/00');

  $('.photosession__inner-btn').click(function() {
    this.style.display = 'none';
    $('.photosession__inner-player').css('display', 'block');
    $('.photosession__inner-player').prop('src', 'https://www.youtube.com/embed/CBnF2yVqSmI');
  });


  function postsCarousel() {
    let checkWidth = $(window).width();
    let sliderOne = $(".photo__inner-list");
    if (checkWidth > 1200) {
        if(typeof sliderOne.data('owl.carousel') != 'undefined'){
            sliderOne.data('owl.carousel').destroy(); 
        }
        sliderOne.removeClass('owl-carousel');
    } else if (checkWidth < 1132) {
        sliderOne.addClass('owl-carousel');
        sliderOne.owlCarousel({
            loop:true,
            margin:10,
            nav: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1199:{
                    items:4
                }
            }
        });
    }
}


postsCarousel();
$(window).resize(postsCarousel);

function postsCarousel2() {
  let checkWidth = $(window).width();
  let sliderThree = $(".spoiler__list");
  if (checkWidth > 1200) {
      if(typeof sliderThree.data('owl.carousel') != 'undefined'){
          sliderThree.data('owl.carousel').destroy(); 
      }
      sliderThree.removeClass('owl-carousel');
  } else if (checkWidth < 1132) {
      sliderThree.addClass('owl-carousel');
      sliderThree.owlCarousel({
          loop:true,
          margin:10,
          nav: false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1199:{
                  items:4
              }
          }
      });
  }
}


postsCarousel2();
$(window).resize(postsCarousel2);

function postsSlider() {
  let checkWidth = $(window).width();
  let sliderTwo = $(".map__inner-list");
  if (checkWidth > 760) {
      if(typeof sliderTwo.data('owl.carousel') != 'undefined'){
          sliderTwo.data('owl.carousel').destroy(); 
      }
      sliderTwo.removeClass('owl-carousel');
  } else if (checkWidth < 760) {
      sliderTwo.addClass('owl-carousel');
      sliderTwo.owlCarousel({
          loop:true,              
          items: 1,          
          nav: false,         
        
      });
  }
}


postsSlider();
$(window).resize(postsSlider);
  
});


