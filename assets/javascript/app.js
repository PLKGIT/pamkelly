/*
    JavaScript and jQuery Code for Portfolio
*/

$(document).ready(function () {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://numbersapi.p.rapidapi.com/random/trivia?max=50&min=10&json=true",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "a102a6bd42msh621d5bd9f35a97cp1e956ajsne435b3fc88d0"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);

        $("#quote").html(response.text);
    });


    // Switch images on click
    $(document).on("click", ".card-img-top", function () {

        // Get or set the state of the images with alternate images
        var state = $(this).attr("data-state");
        // If the clicked image's state is data-begin, update its src attribute to data-end
        // If the clicked image's state is data-end, update its src attribute to data-begin
        if (state === "begin") {
            $(this).attr("src", $(this).attr("data-mid"));
            $(this).attr("data-state", "mid");
        } else if (state === "mid") {
            $(this).attr("src", $(this).attr("data-end"));
            $(this).attr("data-state", "end");
        } else if (state === "end") {
            $(this).attr("src", $(this).attr("data-begin"));
            $(this).attr("data-state", "begin");
        }
    });

});