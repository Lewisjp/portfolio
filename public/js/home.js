$(document).ready(function() {



  var imageObject = {
    clickSwap:function(obj){
      obj.click(function(){
        var activeImage = $(this).children('img.active');
        activeImage.removeClass('active');
        activeImage.addClass('inactive');       
        if (activeImage.next().length >0){
          activeImage.next().addClass('active');
          activeImage.next().removeClass('inactive');

        }else{
          $(this).children('img:first-child').addClass('active');
          $(this).children('img:first-child').removeClass('inactive');
        }
        $('.inactive').hide();
        $('.active').show(); 
        return false;
      });
    }
  };

  $(function(){
    imageObject.clickSwap($('#imageContainer'));
    $('.inactive').hide();
  });


  $('.active').hover(function(){
    $(this).css('cursor','pointer');
  });

  $('.inactive').hover(function(){
    $(this).css('cursor','pointer');
  });

});