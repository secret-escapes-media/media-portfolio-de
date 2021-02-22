// general js for the project that wouldn't be a reuseable component

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > 50){
     $('.site-header').addClass('scrolled');
   }else{
     $('.site-header').removeClass('scrolled');
   }
   if (st > lastScrollTop){
     $('.site-header').addClass('hide');
   } else {
     $('.site-header').removeClass('hide');
   }
   lastScrollTop = st;
});


function scrollTrack(){
  var st = $(window).scrollTop();

  $('.scrolltrack').each(function(){
    var content       = $(this).find('.scrolltrack__content');
    var contentWidth  = content.width();
    var contentOffset = content.offset();
    var wrapperHeight = $(this).height();
    var start         = $(this).offset().top;
    var end           = $(this).offset().top + wrapperHeight - content.outerHeight();

    // Inline width for changing position absolute to fixed
    $(content).width( content.width() );

    if( st > end ){
      // If scrolled past window
      if( $(this).hasClass('row--reverse') ){
        $(content).css('right', 'auto' );
        $(content).css('left', '0' );
      }else{
        $(content).css('left', 'auto' );
      }
      $(this).removeClass('is-fixed').addClass('is-parked');
    }else if( st > start ){
      // If within window
      $(content).css('left', contentOffset.left );
      $(this).addClass('is-fixed').removeClass('is-parked');
    }else{
      // If before window
      if( $(this).hasClass('row--reverse') ){
        $(content).css('right', 'auto' );
        $(content).css('left', '0' );
      }else{
        $(content).css('left', 'auto' );
      }
      $(this).removeClass('is-fixed').removeClass('is-parked');
    }
  });

}
scrollTrack();
$(window).scroll(function(event){
  scrollTrack();
});



// ==== BANNER TEXT SWAP

if( $('body').hasClass('page--home') ){
  var iterations = 0;
  var interval = setInterval(textSwap, 2000);
  var words = ["Industry-leading", "Bespoke", "Digital", "Creative"];
}

function textSwap() {
  iterations++;
  if (iterations >= 3)
    clearInterval(interval);

  var text = $('#banner-text-swap');
  text.fadeOut();
  setTimeout(function(){
    text.html( words[iterations] );
  },400);
  text.fadeIn();

}

