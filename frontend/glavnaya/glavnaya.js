angular.module('myApp').controller('glavnayaCtrl',function ($http,$state,$localStorage,authService) {
    var vm = this;
    vm.selected = "";
    vm.slides = ['slider-1.png','slider-2.PNG','slider-3.PNG','slider-4.PNG',
                  'slider-5.jpg','slider-6.PNG','slider-7.png'];

    $http.get("/api/category/parents",{ cache: true})
        .success(function(response){
            vm.categories = response;
        })
        .error(function(err){
        }); 

   vm.clickCategory = function(category){
   	if(category.children.length>0){
   		if(vm.selected!=category._id) vm.selected=category._id;
   		else vm.selected="";
   	}else{
   		$state.go('showProducts',{category_id:category._id});
   	}
   }     
    
});
