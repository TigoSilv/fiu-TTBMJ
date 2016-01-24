var app = angular.module('MainApp', []);

app.controller("MainController", [$scope, function($scope){

	$scope.newPost = {createdBy: '', driver: '', text: '', time: '', likes: ''};

	$scope.post = function(){
		$scope.newPost.time = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {createdBy: '', driver: '' , text: '', time:'' , likes: ''};
	}

	$scope.plusOne = function(index){
		$scope.newPost.likes += 1;
	};
}]);

