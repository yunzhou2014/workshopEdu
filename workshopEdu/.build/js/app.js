'use strict';


requirejs.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
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
              var video = '<iframe width="100%" height="500" src="' +src + '" frameborder="0" allowfullscreen></iframe>';
              $('#videoModal').modal();
              $('#videoModal').on('shown.bs.modal', function(){
                  $('#videoModal .modal-body').html(video);
              });
              $('#videoModal').on('hidden.bs.modal', function(){
                  $('#videoModal .modal-body').html('');
              });
          });

          $('#myModal button').on('click', function(){
                $('#myModal').hide();
          });

          $('#videoModal button').on('click', function(){
                $('#videoModal').hide();
          });

          $('.dropdown-menu').on('click',function(event){
              //alert("open!!");
              //event.preventDefault();
              //console.log(event);
              event.stopPropagation();
          });

          /*$('#calendar').fullCalendar({
            
          });*/
          
        }
    };

    app.initialize();

});
