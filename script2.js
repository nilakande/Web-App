(function($) {
    $(function() {
      $('nav ul li > a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
      $('#nav-toggle').click(function() {
    $('nav ul').toggle();
  });
    });
  })(jQuery);
  //for music play
  const player = new Plyr('#video-player');
  player.on('play', event => {
      $('#video-player').removeClass('active');
  });
  player.on('ended', event => {
      $('#video-player').addClass('active');
  });
  //end