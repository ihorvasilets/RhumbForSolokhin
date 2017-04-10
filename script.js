window.onload = function () {
//-----------------------------The team-----------------------------------
//------------------------------------------------------------------------





//-----------------------------Filter of agencies-----------------------------------
    var filters = document.querySelectorAll(".filt-type h4");
    var all_vess = document.getElementById("all-vess");
    var best_vess = document.getElementById("best-vess");

    filters[0].onclick = function () {
        all_vess.style.display = "block";
        best_vess.style.display = "none";
        filters[0].style.borderBottom = "3px solid black";
        filters[0].style.color = "black";
        filters[1].style.borderBottom = "3px solid transparent";
        filters[1].style.color = "#b4b4b4";


    };

    filters[1].onclick = function () {
       best_vess.style.display = "block";
       all_vess.style.display = "none";
        filters[1].style.borderBottom = "3px solid black";
        filters[1].style.color = "black";
        filters[0].style.borderBottom = "3px solid transparent";
        filters[0].style.color = "#b4b4b4";
    };

//----------------------------------------------------------------





    var range = document.getElementById("range-year");
    var print = document.getElementById("print-year");
    var filt_reset = document.querySelectorAll("button[type='reset']")[0];

    var year = range.value;
    print.innerHTML = year;


    range.onmousemove = filt_reset.onmousemove = function(e) {
        if (!e) e = window.event;

        var year = range.value;
        print.innerHTML = year;
    }

}












var filters = document.querySelectorAll(".data-type h4");
var photo = document.getElementById("photo");
var about = document.getElementById("about");
var about_side = document.getElementById("about-side");
var voted = document.getElementById("voted");

var review = document.getElementById("review");


filters[0].onclick = function () {
    photo.style.display = "block";
    about_side.style.display = "block";
    voted.style.display = "none";
    about.style.display = "none";
    review.style.display = "none";

}

filters[1].onclick = function () {
    about.style.display = "block";
    voted.style.display = "block";
    about_side.style.display = "none";
    photo.style.display = "none";
    review.style.display = "none";
}

filters[2].onclick = function () {
    review.style.display = "block";
    voted.style.display = "block";
    about_side.style.display = "none";
    photo.style.display = "none";
    about.style.display = "none";

}



$(document).ready(function() {
    $('#media').carousel({
        pause: true,
        interval: false,
    });
});







