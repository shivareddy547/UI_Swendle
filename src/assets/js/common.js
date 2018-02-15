$(document).on('click','[data-parentclose]', function(){
  var getTarget = $(this).data('parentclose');
  $(getTarget).remove();
});



$("body").click(function(e){
    if(e.target.className !== "mobile-nav"){
      $(".mobile-nav").removeClass('header-open');
    }
});

$(document).on('click', '.mobile-menu', function(){
	$('nav').addClass('header-open');
});