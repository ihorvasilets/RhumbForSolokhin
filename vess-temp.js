window.onload = function () {
var vessel =  document.querySelectorAll('aside .best-vessels .best');

    for(var i = 0; i < vessel.length; i++){
        vessel[i].style.cursor = 'pointer';
        vessel[i].addEventListener('click', function () {
            window.location = 'vessel.html';
        });
    }

}
