angular.module('myApp').controller('headerCtrl',function ($http,$stateParams,authService) {
	var vm = this;
	vm.hello = "hello";
	$http.get("/api/contacts")
        .success(function(response){
        	vm.contacts = response[0];
        })
        .error(function(err){
            console.log(err);
        });
        // authService.signup('Ая','amabilisdu');

});




angular.module('myApp').controller('footerCtrl',function ($http,$stateParams,$localStorage,authService,$state,$scope) {
	var vm = this;
	vm.isAdmin=false;
    vm.currentYear = new Date().getFullYear();

		$http.get("/api/contacts")
        .success(function(response){
        	vm.contacts = response[0];
        })
        .error(function(err){
            console.log(err);
        });

	if($localStorage.admin!=undefined)	vm.isAdmin=true;
	vm.logout = function(){
		$localStorage.admin = undefined;
		$state.go('glavnaya');
	}
});