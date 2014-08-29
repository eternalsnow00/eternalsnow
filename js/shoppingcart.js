var mycart = angular.module("mycart",[]);
mycart.controller("cartControl",function($scope) {
	var items=	[ 
						{title:'paint pot1' , quantity:8, price:3.95 , day: new Date()},
						{title:'paint pot2' , quantity:7, price:3.95 , day: new Date()},
						{title:'paint pot3' , quantity:6, price:3.95 , day: new Date()}
			   	];
	$scope.items=items;
	$scope.remove = function(index){
		//$scope.items.splice(index,1);
		easyDialog.open({
		  	container : {
		    	header : '提示',
		    	content : '是否删除选中内容？',
		    	yesFn : btn=function(){
							$scope.$apply(function (){$scope.items.splice(index,1);})
		    			},
		   	 	noFn : true
		  	},
		  	overlay : false

		});
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