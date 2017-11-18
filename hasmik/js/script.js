function myFunction1() {
    var menuBar = document.getElementById("menu_bar");
    var iconBar = document.getElementById("icon_bar");
    iconBar.style.display = "none";
    if(document.body.clientWidth > 560){
        iconBar.style.display = "none";
        menuBar.style.display = "block";
    } else {
        iconBar.style.display = "block";

    }
}


function myFunction() {

    var x = document.getElementById("menu_bar");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}