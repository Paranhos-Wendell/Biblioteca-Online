$(function() {
  $("#btn1").click(function() {
  $(".card-read-more").slideToggle(500)
  });

  $("#btn2").click(function() {
    $(".card-read-more-bookTwo").toggle(500)
  })

  $("#btn3").click(function() {
    $(".card-read-more-bookTree").toggle(500);
  });

  $("#btn4").click(function(){
    $(".card-read-more-bookFour").toggle(500);
  })

  $("#btn5").click(function(){
    $(".card-read-more-bookFive").toggle(500);
  })

  $("#btn6").click(function(){
    $(".card-read-more-bookSix").toggle(500);
  })

})

$(function(){
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item').eq(prev).removeClass('active');
             $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function(){
  
        },800);
      
  
      
    }
});
var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".ImgThumbnail")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      modalImage.src = event.target.src;
   });
});
document.querySelector(".close").addEventListener("click", () => {
   modalEle.style.display = "none";
});