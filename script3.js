angular.module('popApp', []);

angular.module('popApp').controller('bodyBuilder', [
		'$scope', function($scope){
			$scope.hideMe = true;
			$scope.popUp= function() {
				$scope.hideMe = !$scope.hideMe;
			}
		}
		])