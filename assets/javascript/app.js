/*
    JavaScript and jQuery Code for Portfolio
*/

$(document).ready(function () {

    // Call Programming Quotes API on page load
    // https://programming-quotes-api.herokuapp.com/

    $.ajax({
        url: "https://programming-quotes-api.herokuapp.com/quotes/random",
        data: {
            format: 'json'
        },
        "async": true,
        "crossDomain": true,

        success: function (response) {

            // console.log(response);

            $("#quote").html(response.en + " - " + response.author);
        },
        error: function () {
            $("#quote").html("Sorry, there was an error retrieving your quote. Refresh the page try again.");
        },
        type: "GET"
    });

    // Switch images on click
    $(document).on("click", ".card-img-top", function () {

        // Get or set the state of the images with alternate images
        var state = $(this).attr("data-state");
        // If the clicked image's state is data-begin, update its src attribute to data-end
        // If the clicked image's state is data-end, update its src attribute to data-begin
        if (state === "begin") {
            $(this).attr("src", $(this).attr("data-end"));
            $(this).attr("data-state", "end");
        } else {
            $(this).attr("src", $(this).attr("data-begin"));
            $(this).attr("data-state", "begin");
        }
    });

});