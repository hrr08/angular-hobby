
app.controller('pizzaController', [
	'$scope',
	function($scope){
		$scope.model = { title : "Pizza Builder",
		availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
		toppings: [],
		showConfirmation: false,
		showFailure: false
		};
		
		$scope.addTopping = function (topping){
			$scope.model.toppings.push(topping);
			$scope.model.search = null;
			$scope.model.showConfirmation = true;			
		}
		
		$scope.closeConfirmation = function(){
			$scope.model.showConfirmation = false;
		}
		
		$scope.$watch('model.search', function(newVal, oldVal){
			if (newVal != null && newVal != oldVal){
				$scope.model.showConfirmation = false;
			}
		});
	}]);