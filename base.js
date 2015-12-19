var quotes = [{
  "quote-text": "Keep it lite like Jogging Gear",
  "author": "Lupe Fiasco"
}, {
  "quote-text": "Feelin' like a mac standing around a bunch of PC's",
  "author": "Lupe Fiasco"
}, {
  "quote-text": "My money talk for me, I'm rich!",
  "author": "Unknown"
}];

var button = $("#button");

function getRandomIndex() {
  var min = 0,
    max = quotes.length;
  return Math.floor(Math.random() * (max - min + 1)) + min
};

function getRandomQuote(index) {
  var quote = quotes[index];

  if (quote == undefined) {
    quote = quotes[0];
  }

  return quote;
}

button.click(function() {
  var index = getRandomIndex(),
    quote = getRandomQuote(index);
  $("#h4").html("<p>" + quote['quote-text'] + "</p>");
  $("#h6").html("<p>" + quote['author'] + "</p>");
  var _href = $("#tweetText").attr("href");
  $("#tweetText").attr("href", _href + quote['quote-text'] + " - " + quote['author']);
  
});
