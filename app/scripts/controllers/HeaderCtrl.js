var app = angular.module('alaskaApp');

app.controller('HeaderCtrl', function($scope, $stateParams) {
   
	console.log($stateParams.yelpTerm);

	$scope.banner = $stateParams.yelpTerm;
})