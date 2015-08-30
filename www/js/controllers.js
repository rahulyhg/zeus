angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/accessView/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };
})

.controller('AccessCtrl', function ($scope) {

    })
    .controller('LoginCtrl', function ($scope) {
        //        ***** tabchange ****

        $scope.tab = 'signin';
        $scope.classa = 'active';
        $scope.classb = '';

        $scope.tabchange = function (tab, a) {

            $scope.tab = tab;
            if (a == 1) {
                $scope.classa = "active";
                $scope.classb = '';

            } else {
                $scope.classa = '';
                $scope.classb = "active";

            }
        };

        //    ****** End ******

    })
    .controller('ResetPasswordCtrl', function ($scope) {

    })
    .controller('ForgotPasswordCtrl', function ($scope) {

    })
    .controller('SignupCtrl', function ($scope) {

    })
    .controller('HomeCtrl', function ($scope) {
        $scope.slides = ["http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png", "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png", "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png"];

    })
    .controller('ContentPageCtrl', function ($scope) {

    })
    .controller('EventsCtrl', function ($scope) {

        $scope.events = [{
            image: "img/event/1.jpg",
            title: "Sona Mohaptra",
            date: "7 Jan, 2016",
            subtitle: "Live at Tiwnhoase cafe",
            time: "8 PM , Onwards"
    }, {
            image: "img/event/2.jpg",
            title: "Sonu nigam",
            date: "8 Jan, 2016",
            subtitle: "Live at Townhouse cafe",
            time: "9 PM , Onwards"
    }, {
            image: "img/event/3.jpg",
            title: "Music Concert",
            date: "9 Jan, 2016",
            subtitle: "Live at Fort cafe",
            time: "9 PM , Onwards"
    }, {
            image: "img/event/4.jpg",
            title: "Arjit singh",
            date: "10 Jan, 2016",
            subtitle: "Live at Macdee cafe",
            time: "12 PM , Onwards"
    }, {
            image: "img/event/5.jpg",
            title: "sohan honakeri",
            date: "11 Jan, 2016",
            subtitle: "Live at Townhall cafe",
            time: "10 PM , Onwards"
    }, {
            image: "img/event/6.jpg",
            title: "chintan shah",
            date: "12 Jan, 2016",
            subtitle: "Live at Town cafe",
            time: "11 PM , Onwards"
    }];
    })
    .controller('EventDetailCtrl', function ($scope) {

    })
    .controller('ServiceCtrl', function ($scope) {

    })
    .controller('BlogsCtrl', function ($scope) {
        $scope.blogs = [{
            image: "img/profile/1.jpg",
            name: "Marty McFly",
            email: "@Marty_coop",
            content: "This is a 'Facebook' styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text."

    }, {
            image: "img/profile/2.jpg",
            name: "Liesa Bell",
            email: "@LiesaHot",
            content: "Keira Christina Knightley was born in the South West Greater London suburb of Richmond on March 26th 1985. "
    }, {
            image: "img/profile/3.jpg",
            name: "Keira Knightley",
            email: "@Keira_baby",
            content: " Eva Gaëlle Green was born on July 5, 1980, in Paris, France. She has a sororal twin sister. "
    }, {
            image: "img/profile/4.jpg",
            name: "Eva Green",
            email: "@Eva-sexy",
            content: " styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text."
    }, {
            image: "img/profile/5.jpg",
            name: "Natalie Portman",
            email: "@Natalie_Portman",
            content: "Natalie Portman was born Natalie Hershlag on June 9, 1981, in Jerusalem, Israel, to a Jewish family."
    }];
    })
    .controller('BlogDetailCtrl', function ($scope) {

    })
    .controller('PhotoGalleryCategoryCtrl', function ($scope) {
        $scope.photos = [{
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }];
    })
    .controller('PhotoGalleryCtrl', function ($scope) {
        $scope.photos = [{
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }];
    })
    .controller('VideoGalleryCategoryCtrl', function ($scope) {

        $scope.videos = [{
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }];


    })
    .controller('VideoGalleryCtrl', function ($scope) {
        $scope.videos = [{
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }];
    })
    .controller('AccountCtrl', function ($scope) {

    })
    .controller('SettingCtrl', function ($scope) {

    })
    .controller('NotificationCtrl', function ($scope) {
        $scope.notifications = [{
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }];
    })
    .controller('ContactCtrl', function ($scope) {
        //        ***** tabchange ****

        $scope.tab = 'contactus';
        $scope.classa = 'active';
        $scope.classb = '';

        $scope.tabchange = function (tab, a) {

            $scope.tab = tab;
            if (a == 1) {
                $scope.classa = "active";
                $scope.classb = '';

            } else {
                $scope.classa = '';
                $scope.classb = "active";

            }
        };

        //    ****** End ******

    })
    .controller('SearchCtrl', function ($scope) {
        $scope.searches = [{
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }, {
            image: "http://www.grey-hare.co.uk/wp-content/uploads/2012/09/Event-management.png",
            title: "Music Concert",
            date: "7 Jan, 2016",
            subtitle: "Film, Media & Entertainment by paragyte technologies"
    }];
    });