var quote;
var movie;

function getRandomQuote(json) {
    var index = Math.floor(Math.random() * json.quotes.length);
    console.log(index);
    quote = json.quotes[index].quote;
    movie = json.quotes[index].movie;
    console.log(quote);
    linkQuote = quote.split(" ").join("+");
    linkMovie = movie.split(" ").join("");
    console.log(linkQuote, linkMovie);
    var twitterLink = "https://twitter.com/intent/tweet?text=\"" +
    linkQuote + "\"%20%20%20&hashtags=" + linkMovie + ",freeCodeCamp" +
    ",FrontEndWebDev"
    $("#tweet-quote").attr("disabled", false);
    $("#tweet-link").attr("href", twitterLink);
}

function getQuote() {
    $.getJSON("quotes.json", getRandomQuote);
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
