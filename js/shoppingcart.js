var mycart = angular.module("mycart",[]);
mycart.controller("cartControl",function($scope) {
	var items=	[ 
						{title:'paint pot1' , quantity:8, price:3.95},
						{title:'paint pot2' , quantity:7, price:3.95},
						{title:'paint pot3' , quantity:6, price:3.95}
			   	];
	$scope.items=items;
	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}	
});

// function cartControl($scope){
// 	$scope.items = [ 
// 						{title:'paint pot1' , quantity:8, price:3.95},
// 						{title:'paint pot2' , quantity:7, price:3.95},
// 						{title:'paint pot3' , quantity:6, price:3.95}
// 				   ];

// 	$scope.remove = function(index){
// 		$scope.items.splice(index,1);
// 	}	
// }