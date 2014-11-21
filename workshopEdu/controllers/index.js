'use strict';

var IndexModel = require('../models/index');
var BlogModel = require('../models/blog');
var StaffModel = require('../models/staff');
var ContactsModel = require('../models/contacts');
var NewsModel = require('../models/news');
var AboutModel= require('../models/about');
var CalendarModel= require('../models/calendar');
var CoursesModel= require('../models/courses');
var AdminModel= require('../models/admin');
var GalleryModel= require('../models/gallery');
var JavascriptModel = require('../models/javascript');
var TypoModel = require('../models/typography');
var ErrorModel = require('../models/error');
var BlogSingleModel = require('../models/blogSingle');

module.exports = function (router) {
    var indexModel = new IndexModel();
    var blogModel = new BlogModel();
    var staffModel = new StaffModel();
    var contactsModel = new ContactsModel();
    var newsModel = new NewsModel();
    var aboutModel = new AboutModel();
    var calendarModel = new CalendarModel();
    var coursesModel = new CoursesModel();
    var adminModel = new AdminModel();
    var galleryModel = new GalleryModel();
    var javascriptModel = new JavascriptModel();
    var typoModel = new TypoModel();
    var errorModel = new ErrorModel();
    var blogSingleModel = new BlogSingleModel();

    router.get('/', function (req, res) {
        res.render('index', indexModel);
    });

    router.get('/news-events', function (req, res) {
        res.render('pages/news', newsModel);
    });

    router.get('/contact', function (req, res) {
        res.render('pages/contact', contactsModel);
    });

    router.get('/all-courses', function (req, res) {
        res.render('pages/courses', coursesModel);
    });

    router.get('/course-detail', function (req, res) {
        res.render('pages/admin', adminModel);
    });

    router.get('/staff', function (req, res) {
        res.render('pages/staff', staffModel);
    });

    router.get('/about-us', function (req, res) {
        res.render('pages/about', aboutModel);
    });

    router.get('/blog', function (req, res) {
        res.render('pages/blog', blogModel);
    });

    router.get('/blog-post', function (req, res) {
        res.render('pages/blogPost', blogSingleModel);
    });

    router.get('/typography', function (req, res) {
        res.render('pages/typography', typoModel);
    });

    router.get('/javascripts', function (req, res) {
        res.render('pages/javascripts', javascriptModel);
    });
    
    router.get('/gallery', function (req, res) {
        res.render('pages/gallery', galleryModel);
    });

    router.get('/events-calendar', function (req, res) {
        res.render('pages/calendar', calendarModel);
    });

    router.get('/*', function (req, res) {
        res.status(404).render('errors/404', errorModel);
    });
};