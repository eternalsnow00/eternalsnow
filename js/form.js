function formControl($scope){
	$scope.youCheckedIt=true;
}
function stratControl($scope){
	$scope.funding={ startingEstimate : 0 };
	computeNeeded=function(){
		if(!/^(?!0[1-9])?\d+(\.\d{1,3})?$/.test($scope.funding.startingEstimate)){
			easyDialog.open({
			  	container : {
			    	header : '提示',
			    	content : '输入数字不合法',
			   	 	noFn : true,
			   	 	noText : "确认"
			  	},
			  	overlay : false
			});
			$scope.funding.startingEstimate=0;			
		}else{
			$scope.funding.needed=$scope.funding.startingEstimate*10;
		}
	};
	$scope.$watch("funding.startingEstimate" , computeNeeded);
}