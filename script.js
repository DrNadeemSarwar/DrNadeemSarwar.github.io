$(document).ready(function() {
    // Get visitor information using ipinfo.io API
    $.get("https://ipinfo.io", function(response) {
        // Display visitor information in the footer
        var visitorInfo = "Visitor from " + response.city + ", " + response.region + ", " + response.country;
        $("#visitor-info").text(visitorInfo);
    }, "jsonp");
});
