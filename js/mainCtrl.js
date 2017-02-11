angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

    $scope.quotes = dataService.getQuotes();

    $scope.deleteMe = function(textToDelete){
        dataService.removeData(textToDelete);
    };

    $scope.addQuote = function(){
        var newQuote = {
            text:$scope.newQuoteText,
            auther:$scope.newQuoteAuthor
        }
        if(dataService.addData(newQuote)){
            $scope.newQuoteText = '';
            $scope.newQuoteAuthor = '';
        }
    };

});