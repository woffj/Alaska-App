var app = angular.module('alaskaApp');

app.controller('LandingCtrl', function($scope, forumsRef, $localStorage) {

			$scope.forums = forumsRef.$asArray();

			$scope.$storage = $localStorage;


			$scope.addForum = function(name) {
				$scope.forums.$add({ name: name });
			};

			$scope.addUser = function(username) {
				console.log('username', username);
			}
			$scope.removeForum = function (name) {
				$scope.forums.$remove(name);
			}
	});


