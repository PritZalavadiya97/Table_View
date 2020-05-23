var app = angular.module('codecraft', []);

app.controller('PersonsController', function ($scope) {

	$scope.search = "";
	$scope.order = "email";
	$scope.selectedPerson = null;

	$scope.selectPerson = function (person) {
		$scope.selectedPerson = person;
	};

	$scope.sensitiveSearch = function(person) {
		if ($scope.search) {
			return person.name.indexOf($scope.search) == 0 ||
				     person.email.indexOf($scope.search) == 0;
		}
		return true;
	};

	$scope.persons = [
		{
			"State": "Maharashtra",
			"Confirmed": "39,297",
			"Active": "27,589",
			"Recovered": "10,318",
			"Deceased": "1,390"			
		},
		{
			"State": "Tamil Nadu",
			"Confirmed": "13,191",
			"Active": "7,221",
			"Recovered": "5,882",
			"Deceased": "88"			
		},
		{
			"State": "Gujarat",
			"Confirmed": "12,539",
			"Active": "6,571",
			"Recovered": "5,219",
			"Deceased": "749"			
		}
	]
});