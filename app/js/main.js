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
    $('.photosession__inner-youtube').css('display', 'block');
    $('.photosession__inner-player').prop('src', 'https://www.youtube.com/embed/CBnF2yVqSmI');
  });

});


