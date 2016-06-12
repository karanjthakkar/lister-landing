$('.flexslider').flexslider({
  animation: 'slide',
  direction: 'horizontal',
  reverse: false,
  animationLoop: true,
  smoothHeight: false,
  startAt: 0,
  slideshow: true,
  controlNav: false,
  directionNav: false,
  slideshowSpeed: 4000,
  animationSpeed: 300
});

$('#js-ios-download').on('click', function(event) {
  event.preventDefault();
  ga('send', 'event', {
    eventCategory: 'Download',
    eventAction: 'iOS'
  });
  setTimeout(function() {
    window.location = 'https://itunes.apple.com/us/app/tweetify/id1122578013?ls=1&mt=8';
  }, 500);
});
