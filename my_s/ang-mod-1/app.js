(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    
    .controller('MyController', MyController);
    MyController.$inject= ["$scope"];
    function MyController ($scope){
        $scope.message="";
        $scope.answer= "";
        $scope.Check = function(){
            var items = $scope.message.split(",")

            if(items[0] === ""){
                $scope.answer = "Write Something!"
            }
            else if(items.length <= 3){
                $scope.answer = "Enjoy your meal!"
            }
            else{
                $scope.answer = "Too much!"
            }
        };
    }
})();