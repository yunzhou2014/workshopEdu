'use strict';

var IndexModel = require('../models/index');

module.exports = function (router) {
    var model = new IndexModel();

    router.get('/', function (req, res) {
        res.render('index', model);
    });

    router.get('/news-events', function (req, res) {
        res.render('pages/newsEvents', model);
    });

    router.get('/contact', function (req, res) {
        res.render('pages/contact', model);
    });

    router.get('/all-courses', function (req, res) {
        res.render('pages/allCourses', model);
    });

    router.get('/course-detail', function (req, res) {
        res.render('pages/administration', model);
    });

    router.get('/staff', function (req, res) {
        res.render('pages/staff', model);
    });

    router.get('/about-us', function (req, res) {
        res.render('pages/aboutUs', model);
    });

    router.get('/blog', function (req, res) {
        res.render('pages/blog', model);
    });

    router.get('/blog_post', function (req, res) {
        res.render('pages/blogPost', model);
    });

    router.get('/typography', function (req, res) {
        res.render('pages/typography', model);
    });

    router.get('/javascripts', function (req, res) {
        res.render('pages/javascripts', model);
    });
    
    router.get('/gallery', function (req, res) {
        res.render('pages/gallery', model);
    });

    router.get('/events-calendar', function (req, res) {
        res.render('pages/eventsCalendar', model);
    });
};