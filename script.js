document.addEventListener("DOMContentLoaded", function() {
    // Find the button element by its ID
    var button = document.getElementById("headhunter");

    // Add click event listener to the button
    button.addEventListener("click", function() {
        // Define the URL you want to open
        var url = "https://almaty.hh.kz/resume/84ae506bff0b15ca4a0039ed1f6f6a68756450"; 
        // Open the URL in a new tab/window
        window.open(url, "_blank");
    });
});

// Get the button
var backToTopButton = document.getElementById("back-to-top-btn");

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Find the button element by its ID
    var button = document.getElementById("to-mythos");

    // Add click event listener to the button
    button.addEventListener("click", function() {
        // Define the URL you want to open
        var url = "/mythos.html"; 
        // Open the URL in a new tab/window
        window.location.href = "/mythos.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Find the button element by its ID
    var button = document.getElementById("to-mk");

    // Add click event listener to the button
    button.addEventListener("click", function() {
        // Define the URL you want to open
        var url = "/mkcorp.html"; 
        // Open the URL in a new tab/window
        window.location.href = "/mkcorp.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Find the button element by its ID
    var button = document.getElementById("to-bb");

    // Add click event listener to the button
    button.addEventListener("click", function() {
        // Define the URL you want to open
        var url = "/balbobek.html"; 
        // Open the URL in a new tab/window
        window.location.href = "/balbobek.html";
    });
});