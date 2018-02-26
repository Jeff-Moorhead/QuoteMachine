var quote;
var movie;
var currentIndex = Math.floor(Math.random() * quotes.length);

function getRandomQuote() {
    console.log(currentIndex);
    quote = quotes[currentIndex].quote;
    movie = quotes[currentIndex].movie;
    console.log(quote);
    linkQuote = quote.split(" ").join("+");
    linkMovie = movie.split(" ").join("");
    console.log(linkQuote, linkMovie);
    var twitterLink = "https://twitter.com/intent/tweet?text=\"" +
    linkQuote + "\"%20%20%20&hashtags=" + linkMovie + ",freeCodeCamp" +
    ",FrontEndWebDev"
    $("#tweet-quote").attr("disabled", false);
    $("#tweet-link").attr("href", twitterLink);
    var newIndex = Math.floor(Math.random() * quotes.length);
    if (newIndex != currentIndex) {
        currentIndex = newIndex;
        console.log(newIndex);
    }
    else {
        newIndex = Math.floor(Math.random() * quotes.length);
    }
}

function getQuote() {
    getRandomQuote();
    $(".quote").fadeOut(1000, function () {
        $(".quote").html("\"" + quote + "\"");
        $(this).fadeIn(1000);
    });

    $(".movie").fadeOut(1000, function () {
        $(".movie").html("- " + movie);
        $(this).fadeIn(1000);
    });

    $(".btn-basic").fadeOut(1000, function () {
        $(this).fadeIn(1000);
    })
    console.log(quote, movie);
}

$(document).ready(function () {
    $("body").hide();
    $("body").fadeIn(1000);
    $("#get-quote").on("click", getQuote);
});
