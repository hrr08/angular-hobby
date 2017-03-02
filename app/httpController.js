
app.controller('mainController', [
	'$scope', '$timeout', '$q', '$http', 'gitHub',
	function($scope, $timeout, $q, $http, gitHub){
		$scope.model = { 
			number: 0,
			result: 'Ready',
		};
		
		$scope.checkOddNumber = checkOddNumber;
		
		$scope.getRepos = getRepos;
		
		$scope.loadDetail = loadDetail;
		
		function getRepos(name) {
			gitHub.getAll({ org: name }).$promise.then(function(result) {
				$scope.model.repos = result;
			}, function(result){
				alert("There has been an error!");
			});
		}		
		
		function loadDetail(org, name) {
			$scope.model.detail = null;
			gitHub.getDetail({ org: org, id: name }).$promise.then(function(result) {
				$scope.model.detail = result;
			}, function(result) {
				alert("There has been an error!");
			});
		}		
		
		function checkOddNumber(input) {
			$scope.model.result = 'Working...';
			checkOddNumberHandler(input).then(function (result) {
				$scope.model.result = 'Success: ' + result;
			}, function (result) {
				$scope.model.result = 'Error: ' + result;
			})
		}		
		
		function checkOddNumberHandler(input) {
			var defer = $q.defer();

			$timeout(function () {
				if (isNumberOdd(input)) {
					defer.resolve('Yes, an odd number');
				} else {
					defer.reject('Not an odd number');
				}
			}, 1000);

			return defer.promise;
		}	

		function isNumberOdd(input) {
			return !isNaN(input) && input % 2 == 1;
		}
	}]);