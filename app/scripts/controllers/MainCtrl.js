var app = angular.module('alaskaApp');

app.controller('MainCtrl', function($scope, yelpService, $interval) {
  $scope.slides = [{
    src: "images/mainSlides/pic1.jpg",
	   	 href: "#"
	   },{
	   	 src: "images/mainSlides/pic2.jpg",
	   	 href: "#"
	   },{
	   	src: "images/mainSlides/pic3.jpg",
	   	 href: "#"
	   },{
      src: "images/mainSlides/pic4.jpg",
       href: "#"
     },{
      src: "images/mainSlides/pic5.jpg",
       href: "#"
     }];
     $scope.activeSlide = $scope.slides[0];

     $interval (function() {
      // var index = Math.floor(Math.random() * $scope.slides.length);
      var index = ($scope.slides.indexOf($scope.activeSlide) + 1) % $scope.slides.length;
      console.log(index);
      $scope.activeSlide = $scope.slides[index];
     }, 2000)

     //


     // restaurants

	   // $scope.restaurants = {};

	   // $scope.getResults = function() {
		  //  	yelpService.getRestaurants().then(function(res) {
		  //  		$scope.results = res.data.businesses;
		  //  		console.log(res.data);
		  //  	})
	   // }
	   // $scope.getResults();

});


