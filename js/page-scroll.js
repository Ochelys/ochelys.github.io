$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var target = this.hash;
    var $target = $(target).offset();
    if ($target) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: $target.top
      }, 1000, 'easeInOutExpo', function() {
        window.location.hash = target;
      });
    }
    else {
      window.location = '/' + target;
    }
  });
});
