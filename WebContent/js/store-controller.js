var app = angular.module('store-directives', []);

app.directive("loginUser", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/login.html"
    };
  });

app.directive("registerUser", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/registerUser.html"
    };
  });

app.directive("messageDiv", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/messages.html"
    };
  });

app.directive("navBar", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/navBar.html"
    };
  });

app.directive("comicDiv", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/comicPage.html"
    };
  });

app.directive("sideBar", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/sideBar.html"
    };
  });

app.directive("carrusel", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/carrusel.html"
    };
  });

app.directive("comicDivInfo", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/comicDiv.html"
    };
  });

app.directive("searchDiv", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/searchDiv.html"
    };
  });

app.directive("myProfile", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/myProfile.html"
    };
  });

app.directive("openComic", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/openComic.html"
    };
  });

app.directive("footerDiv", function() {
    return {
      restrict: 'E',
      templateUrl: "./view/footerDiv.html"
    };
  });

