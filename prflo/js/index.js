

// for (var i = 0; i < showOne.length; i++) {
// showOne[i].addEventListener('click', function(){

    // for (var k = 0; k < descOne.length; k++) {
      // descOne[k].classList.remove('active');
    // }
    // descOne[k].classList.add('active');
// }, false);


  // showOne.onclick = function(){
  // descOne.classList.toggle('active');
  // alert();
  
// }
// }




/* 


// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 500,
      framesCount = 60;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

 */







// jquery

$("a.go-to").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 780);
    });






$(document).ready(function() {
  $('.show').click(function() {
    $('.description').removeClass('active');
    if ($(this).next('.description').css("display") == "none") {
      $('.description').hide('normal');
      $(this).next('.description').toggle('normal');

      $('.show').removeClass('show__hidden span:nth-child(1)');
      $(this).toggleClass('show__hidden span:nth-child(1)');
      $('.show').removeClass('show__hidden span:nth-child(2)');
      $(this).toggleClass('show__hidden span:nth-child(2)');

      
      // $('.show').removeClass('name-project__active');
      // $(this).toggleClass('name-project__active');

    } else {
      $('.description').hide('normal');
       $('.show').removeClass('show__hidden span:nth-child(1)');
       $('.show').removeClass('show__hidden span:nth-child(2)');
       return false;
    }
   
  });
});














// $('.wrapper').each(function() {


// setInterval(function () {
//         nextSlide();
//     }, 7000);
  

//   var $slider = $(this);
//   var numberOfSlides = $slider.find('.panel').length;

//   $slider.find('.panel:eq(0)').addClass('_active');
//   $slider.find('.nav-dot:eq(0)').addClass('active');

//   var $activeSlide = $slider.find('.panel._active');
//   var $nextBtn = $slider.find('.next-btn');
//   var $prevBtn = $slider.find('.prev-btn');

//   $('.nav-dot').on('click', function() {
//     var slideToGo = $(this).data('slide');
//     goToSlide(slideToGo);
//   });

//   $slider.on('slide.changed', function() {
//     console.log('slide changed !');
//     $('.nav-dot').removeClass('active');
//     var $activeDot = $('.nav-dot[data-slide="' + $('.panel._active').data('slide') + '"]');
//     $activeDot.addClass('active');
//   });

//   $nextBtn.on('click', function(event) {
//     nextSlide();
//   });

//   $prevBtn.on('click', function(event) {
//     prevSlide();
//   });

//   function nextSlide() {
//     $activeSlide = $slider.find('.panel._active');
//     var $nextSlide = $activeSlide.next('.panel');
//     $activeSlide.removeClass('_active');
//     $nextSlide.addClass('_active');

//     //$activeSlide = $nextSlide;

//     var slideIndex = $slider.find('.panel._active').index('.panel');
//     console.log(slideIndex);

//     if (slideIndex >= numberOfSlides || slideIndex <= -1) {
//       firstSlide();
//       $slider.trigger('slide.changed');

//     } else {
//       $slider.trigger('slide.changed');
//     }

//   }

//   function prevSlide() {
//     $activeSlide = $slider.find('.panel._active');

//     var $prevSlide = $activeSlide.prev('.panel');

//     $activeSlide.removeClass('_active');
//     $prevSlide.addClass('_active');

//     var slideIndex = $slider.find('.panel._active').index();
//     console.log(slideIndex);

//     if (typeof $prevSlide === 'undefined' || $prevSlide === null || $prevSlide.length == -1 || slideIndex <= -1) {
//       lastSlide();
//       $slider.trigger('slide.changed');
//     } else {
//       $slider.trigger('slide.changed');
//     }

//   }

//   function firstSlide() {
//     $('.panel._active').removeClass('_active');
//     $slider.find('.panel:eq(0)').addClass('_active');
//     $activeSlide = $slider.find('.panel:eq(0)');

//   }

//   function lastSlide() {

//     $('.panel._active').removeClass('_active');
//     $slider.find('.panel').eq(numberOfSlides - 1).addClass('_active');

//   }

//   function goToSlide(slideToGo) {
//     $('.panel._active').removeClass('_active');
//     $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
//     $activeSlide = $slider.find('.panel').eq(slideToGo - 1).addClass('_active');
//     $slider.trigger('slide.changed');
//   }

// });