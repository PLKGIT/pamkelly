/*
    JavaScript and jQuery Code for Portfolio
*/

$(document).ready(function () {

    // Call Star Wars Quote API on page load

    $.ajax({
        url: "http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote",
        data: {
            format: 'json'
        },
        "async": true,
        "crossDomain": true,
       
        success: function (response) {

            // console.log(response);
            // console.log(response.starWarsQuote);

            $("#quote").html(response.starWarsQuote);
        },
        error: function () {
            $("#quote").html("Sorry, there was an error retrieving the quote.  Please try again.");
        },
        type: "GET"
    });

    // Switch Images
    $(document).on("click", ".card-img-top", function () {

        //  $(".gif").on("click", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        console.log(state);
        // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        // Then, set the image's data-state to animate
        // Else set src to the data-still value
        if (state === "begin") {
            $(this).attr("src", $(this).attr("data-end"));
            $(this).attr("data-state", "end");
        } else {
            $(this).attr("src", $(this).attr("data-begin"));
            $(this).attr("data-state", "begin");
        }
    });

});