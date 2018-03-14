angular.module('myApp').controller('removeCategoryCtrl',function ($stateParams,$location,$anchorScroll,$http,$state,$localStorage,authService) {
    var vm = this;

	$location.hash('anchor');
	$anchorScroll();
	vm.type = $stateParams.type;

    $http.get("/api/category/all")
		.success(function(response){
			vm.categories = response;
		})
		.error(function(err){
		});


		vm.save = function(){
			$http.put("/api/category/"+vm.currentCategory._id,vm.currentCategory)
			.success(function(response){
				$state.go('adminPanel');
			})
			.error(function(err){
			});
		}

    vm.remove = function(){
    	var ok = confirm('Вы уверены что хотите удалить эту категорию? Вместе с ней удалятся все связанные с ней товары и подкатегории(если имеются).');
    	if(!ok) return;
    	if(vm.currentCategory==undefined){
    		vm.showErr = true;
    		return;
    	}
			$http.delete("/api/category/"+vm.currentCategory._id)
			.success(function(response){
				$state.go('adminPanel');
			})
			.error(function(err){
			});
	};
		    
});
