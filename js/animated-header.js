var AnimatedHeader = (function () {

  var docElem = document.documentElement;
  var header = '.navbar-fixed-top';
  var shrink = 'navbar-shrink';
  var didScroll = false;
  var changeHeaderOn = 50;

  function init() {
    window.addEventListener('scroll', function (event) {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    }, false);
  }

  function scrollPage() {
    if (scrollY() >= changeHeaderOn) {
      $(header).addClass(shrink);
    }
    else {
      $(header).removeClass(shrink);
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();
