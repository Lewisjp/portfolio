$( document ).ready(function() {
    $(".wiki-results").hide(); 

$(document).on("click","#theCloser", function(){
  $(".wiki-results").hide();
});


$("#newQuote").click(function(){ 
  
    var randomQuote = Math.floor(Math.random() * 10);
    var randomPic = Math.floor(Math.random() * 3);
    var theQuote =  quotes[randomQuote];
  
  
    $("#debbie-quote").text(quotes[randomQuote]);
    $("#twitter-quote").html(quotes[randomQuote]);
  

    $(".tweet-quote").html("<a href=\"http://twitter.com/share\" class=\"twitter-share-button\"  data-size=\"large\"  data-text=\""+ theQuote +"\" data-count=\"none\"></a>");

 $.getScript('http://platform.twitter.com/widgets.js'); 
  

  
});



var quotes = [
  "I do know the effect that music still has on me - I'm completely vulnerable to it. I'm seduced by it.",
  "I'm a culture vulture, and I just want to experience it all.",
  "Being hot never hurts!",
  "New York has always been a city of change and a city about change, and it is a back-leading development. Nobody's going to want to come to New York if it looks like another strip mall.",
  "Music is wonderful. Especially if there's some kind of content to it.",
  "I Could Be A Housewife… I Guess I’ve Vacuumed A Couple Of Times.",
  "The only person I really believe in is me.",
  "I thought I’d live to a ripe old age, because I always felt there was a lot to do. I had a driven feeling. I always thought in the present.",
  "I was one of those idiots who thought they were going to live forever.",
  "You always fall for the rascal or the guy who’s got a little bit of the devil in him. You can’t help it."
];



});

//link to page
//"https://en.wikipedia.org/?curid=" id num


// get data
//- enter into arrays
//-- page id 
//-- page title
//-- extract

//- clear previously displayed items
//- display new item each item


  function presentResults(results){
    var html = "<a href='#' id='theCloser'><span class='glyphicon glyphicon-remove-circle' aria-hidden='true'></span>  Close Search Results</a>";
        html += "<br><br><a href='#blondie' id='skipDown'><span class='glyphicon glyphicon-download' aria-hidden='true'></span>  Jump down to Debbie Harry's Tribute section (based on wiki facts)</a>";
        html += "<center><h1>Below are your Wikipedia search results</h1></center>";
    var results = results.query.pages;
    console.log(results);
    for (var key in results) {
      if (results.hasOwnProperty(key)) {
        var val = results[key];
        html += "<div class ='wiki-entry'>";
        html += "<br><a href='https://en.wikipedia.org/?curid=" + val["pageid"] + "'>" + val["title"] + "</a><br>" + val["extract"] + "<br>";
        html += "</div>";
      }
    }
    $(".wiki-results").html(html);
    $(".wiki-results").show(); 
  };


  function wikiSearch(textSearch)
      {
        var apiCall = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + textSearch + "&callback=?";

        $.getJSON(apiCall, function( data ) {
          var results = data;
          console.log(results);
          presentResults(results);
        }).done(function() {
          console.log( "success confirmation" );
        }).fail(function() {
          console.log( "error" );
        }).always(function() {
          console.log( "completed getJSON call" );
        });   
      
      };
        
