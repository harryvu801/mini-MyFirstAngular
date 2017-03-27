angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = ['me', 'myself', 'I'];

  $scope.submit = function () {
    $scope.friends.push($scope.addFriend);
  }


 });
