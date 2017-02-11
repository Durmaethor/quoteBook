angular.module('quoteBook').controller('mainCtrl', function($scope){

    $scope.quotes = dataService.getQuotes();

});