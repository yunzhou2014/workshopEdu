'use strict';


requirejs.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
    }
});


require(['jquery'], function ($) {

    var app = {
        initialize: function () {

          $(".admin").click(function(){
          window.location='course-detail';
          });
          $(".contact").click(function(){
          window.location.href='contact';
          });
          $(".staff").click(function(){
          window.location='staff';
          });

          $(".navbar-nav>li>a").on('click', function(){
            if($(this).next(".dropdown-panel").is(":visible")){  
              $(this).next(".dropdown-panel").slideToggle("normal","swing");
            }
            else {
              $(".dropdown-panel").fadeOut("fast");
              $(this).next(".dropdown-panel").slideToggle("slow","swing");
            }
          });

          $('.thumbnail img').on('click',function(event){
              event.preventDefault();
              var src = $(this).attr('src');
              var img = '<img src="' + src + '" class="img-responsive"/>';
              $('#myModal').modal();
              $('#myModal').on('shown.bs.modal', function(){
                  $('#myModal .modal-body').html(img);
              });
              $('#myModal').on('hidden.bs.modal', function(){
                  $('#myModal .modal-body').html('');
              });
          });

          $('.fancybox-media').on('click',function(event){
              event.preventDefault();
              var src = $(this).attr("href");
              var video = '<iframe width="100%" height="500" src="' +src + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              $('#videoModal').modal();
              $('#videoModal').on('shown.bs.modal', function(){
                  $('#videoModal .modal-body').html(video);
              });
              $('#videoModal').on('hidden.bs.modal', function(){
                  $('#videoModal .modal-body').html('');
              });
          });

          $('.fancybox-media-admin').on('click',function(event){
              event.preventDefault();
              var src = $(this).attr("href");
              var video = '<iframe width="100%" height="500" src="' +src + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
              $('#videoModal-admin').modal();
              $('#videoModal-admin').on('shown.bs.modal', function(){
                  $('#videoModal-admin .modal-body').html(video);
              });
              $('#videoModal-admin').on('hidden.bs.modal', function(){
                  $('#videoModal-admin .modal-body').html('');
              });
          });

          /*$('#myModal button').on('click', function(){
                $('#myModal').hide();
          });

          $('#videoModal button').on('click', function(){
                $('#videoModal').hide();
          })

          $('#videoModal-admin button').on('click', function(){
                $('#videoModal-admin').hide();
          })*/

          /*$('#calendar').fullCalendar({
            
          });*/
          var offset = 1;
          var duration = 700;
          $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
              $('#back-to-top').fadeIn(duration);
            } else {
              $('#back-to-top').fadeOut(duration);
            }
          });
          $("#back-to-top").click(function(event){
            event.preventDefault();
            $("html body").animate({scrollTop: '0'}, duration);
          });

          $("[data-toggle='tooltip']").tooltip(); 

          $(".togglehandle").click(function(){
            $(this).next('.toggledata').slideToggle();
          });
          
        }

    };

    app.initialize();

});
