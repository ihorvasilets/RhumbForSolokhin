window.onload = function () {
//----------------------------------------------------------------------------------------------
//---------------------------------FILTER OF VESSEL-INFO----------------------------------------

    //---------------- tabs  ------------------------
    var filters1 = document.querySelectorAll(".data-type h4");
    var photo = document.getElementById("photo");
    var about = document.getElementById("about");
    var about_side = document.getElementById("about-side");
    var voted = document.getElementById("voted");

    var review = document.getElementById("review");

    (function buttonStyleInit(){
        filters1[0].style.borderBottom = "3px solid black";
        filters1[0].style.color = "#464646";
        filters1[1].style.borderBottom =  filters1[2].style.borderBottom = "3px solid transparent";
        filters1[1].style.color = filters1[2].style.color = "#b4b4b4";
        filtButtonsInit = null;
    })();

    filters1[0].addEventListener('click', function () {
        photo.style.display = about_side.style.display = "block";
        review.style.display = about.style.display = voted.style.display = "none";

        filters1[0].style.borderBottom = "3px solid black";
        filters1[0].style.color = "#464646";
        filters1[1].style.borderBottom =  filters1[2].style.borderBottom = "3px solid transparent";
        filters1[1].style.color = filters1[2].style.color = "#b4b4b4";

    });

    filters1[1].addEventListener('click', function () {
        about.style.display = voted.style.display = "block";
        photo.style.display = review.style.display = about_side.style.display = "none";

        filters1[1].style.borderBottom = "3px solid black";
        filters1[1].style.color = "#464646";
        filters1[0].style.borderBottom =  filters1[2].style.borderBottom = "3px solid transparent";
        filters1[0].style.color = filters1[2].style.color = "#b4b4b4";
    });

    filters1[2].addEventListener('click', function () {
        review.style.display = voted.style.display = "block";
        photo.style.display = about.style.display = about_side.style.display = "none";

        filters1[2].style.borderBottom = "3px solid black";
        filters1[2].style.color = "#464646";
        filters1[1].style.borderBottom =  filters1[0].style.borderBottom = "3px solid transparent";
        filters1[1].style.color = filters1[0].style.color = "#b4b4b4";

    });

    //---------------- thumbnails blur ------------------------

    var thumbs = document.querySelectorAll("section .filt-active #media a.thumbnail img");

    for(var i = 0; i < thumbs.length; i++){
        thumbs[i].addEventListener('click', function () {
            for(var j = 0; j < thumbs.length; j++){
                thumbs[j].classList.remove("non-blur");
            }
           this.classList.add("non-blur");
        });
   }

    $(document).ready(function() {
        $('#media').carousel({
            pause: true,
            interval: false,
        });
    });






































}
