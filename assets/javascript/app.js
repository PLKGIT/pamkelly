/*
    JavaScript and jQuery Code for Portfolio
*/

$(document).ready(function () {

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

    $("#super").on("click", function (event) {

        // Prevent default action on click
        event.preventDefault();

        // AJAX Call to API
        //-----Pulls the superhero image

        var heroName = $("#hero");
        console.log(heroName.val());

        $.ajax({
            url: "https://superheroapi.com/api/10157763823113954/search/" + heroName.val(),
            type: 'GET',
            // Error handling
            error: function () {
                $("#resultsHero").html("An error occurred, please try again.");
            },
            // On success, display results in Quotes modal
            success: function (response) {
                $("#resultsHero").html(response.results[0].name);
            },
            
        });

    });




});