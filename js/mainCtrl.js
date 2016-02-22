angular.module('friendsList').controller('mainCtrl', function($scope){
	$scope.name = 'Larry';
	$scope.friends = [
		'Dave',
		'Clay',
		'Toby',
		'George',
		'Gabriel'
	]

	$scope.addFriend = function(){
		$scope.friends.push($scope.newFriend.name);
		$scope.newFriend.name = '';
	}

})