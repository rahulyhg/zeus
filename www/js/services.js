//var adminbase = "http://wohlig.co.in/webappbackend/";
var adminbase = "http://localhost/webappbackend/";
//var adminbase = "http://192.168.2.9/webappbackend/";
var adminurl = adminbase + "index.php/json/";
var adminimage = adminbase + "uploads/";
var adminhauth = adminbase + "index.php/hauth/";
var imgpath = adminimage + "image?name=";

var foods = [];

//FOR WORDPRESS INTEGRATION 
var Wordpress_UserName = "en.blog.wordpress.com";
//FOR FLICKR INTEGRATION
//var Api_Key = "477a6eb655b448de7fffcb16ae4455b2";
var Api_Key = "3e67f6179c11014cc027c6a944d7d9fb";
//var User_Key = "133690617@N02";
var User_Key = "132717193@N04";
var WORDPRESS_API_URL = 'https://public-api.wordpress.com/rest/v1.1/';

angular.module('starter.services', [])
    .factory('MyServices', function ($http) {
        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            },
            signup: function (signup, callback) {
                return $http({
                    url: adminurl + 'signup',
                    method: "POST",
                    data: {
                        'username': signup.username,
                        'email': signup.email,
                        'password': signup.password,
                        'dob': signup.dob
                    }
                }).success(callback);
            },
            signin: function (signin, callback) {
                return $http({
                    url: adminurl + 'signin',
                    method: "POST",
                    data: {
                        'username': signin.username,
                        'password': signin.password
                    }
                }).success(callback);
            },
            authenticate: function () {
                return $http({
                    url: adminurl + 'authenticate',
                    method: "POST"
                });
            },
            logout: function () {
                return $http({
                    url: adminurl + 'logout',
                    method: "POST"
                });
            },
            getuser: function () {
                return $.jStorage.get("user");
            },
            getallsliders: function (callback) {
                return $http({
                    url: adminurl + 'getallsliders',
                    method: "POST"
                }).success(callback);
            },
            getallevents: function (callback) {
                return $http({
                    url: adminurl + 'getallevents',
                    method: "POST"
                }).success(callback);
            },
            getappconfig: function (callback) {
                return $http({
                    url: adminurl + 'getappconfig',
                    method: "POST"
                }).success(callback);
            },
            getallgallery: function (callback) {
                return $http({
                    url: adminurl + 'getallgallery',
                    method: "POST"
                }).success(callback);
            },
            getWordpressPosts: function (callback) {
                var getdata = function (data, status) {
                    return $http.get(data.meta.links.posts).success(callback);
                }
                $http.get(WORDPRESS_API_URL + "sites/" + Wordpress_UserName).success(getdata);
            },
        };
    });