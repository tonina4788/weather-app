var App = angular.module('myApp', []);
  App.controller('Ctrl', function($scope, $http) {

    $scope.city = '';
	$scope.dayOne = new Date();
    $scope.dayOne.setDate($scope.dayOne.getDate() + 1);
	$scope.dayTow = new Date();
    $scope.dayTow.setDate($scope.dayTow.getDate() + 2);
	$scope.dayThree = new Date();
    $scope.dayThree.setDate($scope.dayThree.getDate() + 3);
	$scope.dayFour = new Date();
    $scope.dayFour.setDate($scope.dayFour.getDate() + 4);
	$scope.dayFive = new Date();
    $scope.dayFive.setDate($scope.dayFive.getDate() + 5);
	
	/*For search button*/
	$scope.getCity = function () {
		$http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $scope.city + '&units=metric&cnt=6&APPID=47fde070a5a7c3581c90e0818dcc1caa')
        .then(function(response) {
          $scope.weather = response.data;
        });
    }
	
	/*For location button*/
    $scope.getLocation = function () {
        $http.get('http://freegeoip.net/json/')
       .then(function(response) { 
		currentLocation(response.data.city);
        });
    }

    function currentLocation(city)
    {
       $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=metric&cnt=6&APPID=47fde070a5a7c3581c90e0818dcc1caa')
       .then(function(response) {
          $scope.weather = response.data;
		  var bgColor = setTimeout(changeColor, 1000); //Change background color to purple
          console.log(response);
        });
    }
	
	//Change background color after finish effect
	function changeColor() {
		$("body").removeClass("bg-color-pink");
		$("body").addClass("bg-color-purple");
	}
});

  

 
