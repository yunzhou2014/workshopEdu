'use strict';


requirejs.config({
    paths: {}
});


require([/* Dependencies */], function () {

    var app = {
        initialize: function () {
            // Your code here
            $(".admin").click(function(){
            window.location='course-detail'
            });
            $(".contact").click(function(){
            window.location.href='contact'
            });
            $(".staff").click(function(){
            window.location='staff'
            });
            
        }
    };

    app.initialize();

});
