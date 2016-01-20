angular.module('myApp', [])
angular.module('myApp').controller('clicker', ['$scope', function($scope){
	$scope.clickHappen = function(){
		// console.log("you're a clicker")
		$scope.greeting="Get Schwifty!"
	}
	$scope.clickLister = function(){
		console.log("you're a clicker")
		$scope.item1 ="Awww"
		$scope.item2 ="Yeah"
		$scope.item3 ="Baby!"
	}
}])