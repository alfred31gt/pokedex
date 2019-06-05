//Write your code here
var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("ListadoPokemon", function($scope,$rootScope,$http) {
	$scope.Pokebola = [];
	for(var M=1; M<=500;M++ )
	$http ({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/" +M
	}).then(function success(x){
		$scope.Pokebola.push(x);
	})
})


// 01000001 01101100 01100110 01110010 01100101 01100100 01101111 00100000 01000111 01101111 01101101 01100101 01111010 