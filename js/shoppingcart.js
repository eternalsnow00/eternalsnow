function cartControl($scope){
	$scope.items = [ 
						{title:'paint pot1' , quantity:8, price:3.95},
						{title:'paint pot2' , quantity:7, price:3.95},
						{title:'paint pot3' , quantity:6, price:3.95}
				   ];

	$scope.remove = function(index){
		$scope.items.splice(index,1);
	}

	// easyDialog.open({
	// 	container:{
	// 		header : "提示",
	// 		content : "是否要删除么？",
	// 		yesFn : $scope.remove = function(index){
	// 					$scope.items.splice(index,1);
	// 				},
	// 		noFn : true		
	// 	}
	// });
		
}