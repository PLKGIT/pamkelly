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
            // console.log(response.en);
            // console.log(response.author);

            $("#quote").html(response.en + " - " + response.author);
        },
        error: function () {
            $("#quote").html("Sorry, there was an error retrieving the quote.  Please try again.");
        },
        type: "GET"
    });

    // Tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    // Switch Images
    $(document).on("click", ".card-img-top", function () {

        //  $(".gif").on("click", function () {
        // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        var state = $(this).attr("data-state");
        // console.log(state);
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