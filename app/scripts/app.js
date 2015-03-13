var app = angular.module('alaskaApp', ['firebase', 'ui.router'])

.config(function ($stateProvider, $urlRouterProvider){
			$urlRouterProvider.otherwise('/');

			$stateProvider
				.state('landing', {
					url: '/',
					templateUrl: 'views/landing.html',
				})
			$stateProvider
				.state('yelpSearch', {
					url: '/search/:yelpTerm',
					templateUrl: 'views/restaurants.html',
					controller: 'SearchCtrl',
					resolve: {
 						yelpData: function(yelpService, $stateParams) {
 							console.log('resolve')
 							return yelpService.getyelpData($stateParams.yelpTerm);
 						}
 					}
				})
		});		