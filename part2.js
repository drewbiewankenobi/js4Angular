angular.module('myApp', []);

angular.module('myApp').controller('bodymaster', [
		'$scope', function($scope){
			$scope.header = "!"
			$scope.hideMe = [
				false,
				false,
			]
			$scope.clickConfirm = function(event, ind){
				var choice = confirm("Are you sure you want to leave?  We haven't even gotten your credit card number yet.")
				if (choice === false) {
						event.preventDefault()
						$scope.hideMe[ind] = !$scope.hideMe[ind]
						$scope.noLink = "You don't get no link, sucka!"
				}
			}
}])