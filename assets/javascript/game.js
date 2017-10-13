//Document ready function to wrap all javascript
$(document).ready(function(){

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "01779c7ce4234a8ab3ac8c8c29f9eeba",
  'q': "cubs"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});	

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {


//Four input boxes

//

});