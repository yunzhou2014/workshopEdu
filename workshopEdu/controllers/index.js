'use strict';

var IndexModel = require('../models/index');

module.exports = function (router) {
    var model = new IndexModel();

    router.get('/', function (req, res) {
        res.render('index', model);
    });

    router.get('/news-events', function (req, res) {
        res.render('layouts/newsEvents', model);
    });

    router.get('/contact', function (req, res) {
        res.render('layouts/contact', model);
    });

    router.get('/all-courses', function (req, res) {
        res.render('layouts/allCourses', model);
    });

    router.get('/course-detail', function (req, res) {
        res.render('layouts/administration', model);
    });

    router.get('/staff', function (req, res) {
        res.render('layouts/staff', model);
    });

    router.get('/about-us', function (req, res) {
        res.render('layouts/aboutUs', model);
    });

    router.get('/blog', function (req, res) {
        res.render('layouts/blog', model);
    });

    router.get('/blog_post', function (req, res) {
        res.render('layouts/blogPost', model);
    });

    router.get('/typography', function (req, res) {
        res.render('layouts/typography', model);
    });

    router.get('/javascripts', function (req, res) {
        res.render('layouts/javascripts', model);
    });
    
    router.get('/gallery', function (req, res) {
        res.render('layouts/gallery', model);
    });

    router.get('/events-calendar', function (req, res) {
        res.render('layouts/eventsCalendar', model);
    });
};