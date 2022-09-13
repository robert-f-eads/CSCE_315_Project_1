//Style 1 - Side Navbar
function navOpen() {
    document.getElementById("navbar").style.width = "15rem";
}

function navClose() {
    document.getElementById("navbar").style.width = "0";
}

//Style 2 - Slide open tabs
function openPage(title) {
    document.getElementById(title).classList.toggle("sliding-page");
    document.getElementById(title+"-button").classList.toggle("open");
}

//Rotate card elements
function rotateCard(tag) {
    document.getElementById(tag).classList.toggle("card-rotate");
}

//Date for copyright
function getDate() {
    const new_date = new Date();
    let year = new_date.getFullYear();
    document.getElementById("current").innerHTML = year;    
}

//Style Switching
function styleSwitch() {
    let new_style;
    //Choosing opposite style sheet
    let curr_num = document.getElementById("styling").getAttribute("href").substring(6,7) 
    curr_num == 1 ? new_style = "style-2.css" : new_style = "style-1.css";

    //Updating and saving style sheet
    document.getElementById("styling").setAttribute("href", new_style);
    fixWidth(curr_num);
    localStorage.setItem("stored_style", new_style);
}

//Holding style after refresh
window.onload = function(){ 
    //Load correct style sheet after refresh
    if(localStorage.getItem("stored_style") != null) {
        document.getElementById("styling").setAttribute("href", localStorage.getItem("stored_style"));
    }
    //Getting and setting proper date for copyright 
    getDate();
}

//Fixing div widths after style change
function fixWidth(num) {
    if(num == 1) {document.getElementById("navbar").style.width = "0";}
}

