
var app = angular.module('alaskaApp');

  app.service('yelpService', function($http) {
    
    this.getyelpData = function(yelpTerm) {
      return $http.get('http://localhost:3000/search/' + yelpTerm).
    success(function(data, status, headers, config) {
      return data;
      // this callback will be called asynchronously
      // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
    // $http({
    //     method: "GET",
    //     url: 'http://localhost:4000/restaurants'
    // })
  }

});

 