angular.module('quoteBook').service('dataService', function(){

  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];
    //calls the quotes array
    this.getQuotes = function(){
        return quotes;
    };
    //adds a new quote to the array as long as it meets both requirements
    this.addData = function(newQuote){
        if(newQuote.text && newQuote.author) { //if both properties are present
            quotes.push(quotes); //push to the quotes array
            return true;
        }
        return false;
    };
    //removes a chosen quote from the array after looping through
    this.removeData = function(textToRemove){
        for(i = 0; i < quotes.length; i++){
            if(quotes[i].text.toLowerCase() === textToRemove.toLowerCase()){
                quotes.splice(i--, 1);
            }
        }
    }

})