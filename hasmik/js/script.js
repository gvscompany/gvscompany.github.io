function myFunction1() {
    // var menuBar = document.getElementById("menu_bar");
    // var iconBar = document.getElementById("icon_bar");
    // iconBar.style.display = "none";
    // if(document.body.clientWidth > 991){
    //     iconBar.style.display = "none";
    //     menuBar.style.display = "block";
    // } else {
    //     iconBar.style.display = "block";
    // }
}


function myFunction() {

    var x = document.getElementById("menu_bar");

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function changeContent(n){
    switch (n) {
        case 1:
            h3_content1.style.display = "block";
            h3_content2.style.display = "none";
            h3_content3.style.display = "none";
            h3_content4.style.display = "none";
            break;
        case 2:
            h3_content1.style.display = "none";
            h3_content2.style.display = "block";
            h3_content3.style.display = "none";
            h3_content4.style.display = "none";
            break;
        case 3:
            h3_content1.style.display = "none";
            h3_content2.style.display = "none";
            h3_content3.style.display = "block";
            h3_content4.style.display = "none";
            break;
        case 4:
            h3_content1.style.display = "none";
            h3_content2.style.display = "none";
            h3_content3.style.display = "none";
            h3_content4.style.display = "block";
            break;
    }
}

function fixColor(){
    this.style.background='#fff';
    // alert("sssssssssss");
}