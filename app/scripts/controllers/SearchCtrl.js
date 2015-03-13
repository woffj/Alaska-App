var app = angular.module('alaskaApp');

app.controller('SearchCtrl', function($scope, yelpData) {
   
    console.log('yelpData: ' + JSON.stringify(yelpData))

     $scope.yelpResults = yelpData.data.businesses;

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


