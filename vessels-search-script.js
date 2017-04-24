window.onload = function () {

//----------------------------------------------------------------------------------------------
//-----------------------------FILTER OF AGENCIES AND VESSELS-----------------------------------

    var filters = document.querySelectorAll(".filt-type h4");
    var all_vess = document.getElementById("all-vess");
    var best_vess = document.getElementById("best-vess");

    (function filtButtonsInit(){
        filters[0].style.borderBottom = "3px solid black";
        filters[0].style.color = "black";
        filters[1].style.borderBottom = "3px solid transparent";
        filters[1].style.color = "#b4b4b4";
        filtButtonsInit = null;
    })();

    filters[0].addEventListener('click', function () {
        all_vess.style.display = "block";
        best_vess.style.display = "none";
        filters[0].style.borderBottom = "3px solid black";
        filters[0].style.color = "black";
        filters[1].style.borderBottom = "3px solid transparent";
        filters[1].style.color = "#b4b4b4";

    });

    filters[1].addEventListener('click', function () {
        best_vess.style.display = "block";
        all_vess.style.display = "none";
        filters[1].style.borderBottom = "3px solid black";
        filters[1].style.color = "black";
        filters[0].style.borderBottom = "3px solid transparent";
        filters[0].style.color = "#b4b4b4";
    });

//--------- range ---------------------------------------------

    var range = document.getElementById("range-year");
    var print = document.getElementById("print-year");
    var filt_reset = document.querySelectorAll("button[type='reset']")[0];

    var year = range.value;
    print.innerHTML = year;


    range.onmousemove = filt_reset.onmousemove = function(e) {
        if (!e) e = window.event;

        var year = range.value;
        print.innerHTML = year;
    };
}
