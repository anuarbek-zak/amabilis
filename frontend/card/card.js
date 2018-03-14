angular.module('myApp').controller('cardCtrl',function ($http,$location,$stateParams,$anchorScroll,$state) {
	var vm = this;
	vm.which = $stateParams.which;
	vm.user = {};
  vm.prodId = $stateParams.prodId;
	$location.hash('anchor');
	$anchorScroll();

	if($stateParams.prodId){
		$http.get("/api/product/"+$stateParams.prodId)
		.success(function(response){
			vm.productName = response[0].name;
		})
		.error(function(err){
			$state.go('glavnaya');
		});
	}

	switch(vm.which){
		case 'action':				
		$http.get("/api/action/")
		.success(function(response){
			vm.action = response[0];
		})
		.error(function(err){
		});
		break;
	}  


	vm.sendEmail = function(){
		if((vm.user.name==null||vm.user.name==undefined||vm.user.name=='')
			||(vm.user.email==null||vm.user.email==undefined||vm.user.email=='')
			||(vm.user.number==null||vm.user.number==undefined||vm.user.number=='')){
			vm.showErr = true;
		return;
	}
	$http.post("/api/zakaz",{user:vm.user,product:{_id:vm.prodId}})
	.success(function(response){
	})
	.error(function(err){
	});
	
	vm.showErr = false;
	vm.updated=true;
}

});