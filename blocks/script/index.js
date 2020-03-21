$(document).ready(function() {
  $('.btn-description').click(function() {
    $('.description').removeClass('description__active');
    if ($(this).next('.description').css("display") == "none") {
      $('.description').hide('normal');
      $(this).next('.description').toggle('normal');

     // $('.btn-description').removeClass('btn-description__active span:nth-child(1)');
     // $(this).toggleClass('btn-description__active span:nth-child(1)');

      
      $('.btn-description').prev().removeClass('name-project__active');
      $(this).prev().addClass('name-project__active');




    } else $('.description').hide('normal');
    return true;
  });
});





let btn = document.querySelector("#modal_btn");
let modal = document.querySelector('#modal_view');

btn.onclick = function(){
modal.style.display="block";
};

let close = document.querySelector('.close');
close.style.display = "none";






