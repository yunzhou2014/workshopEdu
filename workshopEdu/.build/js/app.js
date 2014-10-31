'use strict';


requirejs.config({
    paths: {
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
    }
});


require(['jquery'], function ($) {

    var app = {
        initialize: function () {
            // Your code here
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

            $('.dropdown-menu').on('click',function(event){
                //alert("open!!");
                //event.preventDefault();
                console.log(event);
                event.stopPropagation();
            });
            
        }
    };

    app.initialize();

});
