var app = angular.module('alaskaApp');

.controller('ForumCtrl', function($scope, forumRef, commentsRef, $localStorage) {
		
		$scope.forum = forumRef.$asObject();

		$scope.comments = commentsRef.$asArray();

		$scope.$storage = $localStorage;

		$scope.addComment = function (username, comment) {
			$scope.comments.$add({
				username: username,
				comment: comment
			});
		}
	});


