//Side Navbar
function navOpen() {
    document.getElementById("navbar").style.width = "15rem";
}

function navClose() {
    document.getElementById("navbar").style.width = "0";
}


//Date for copyright
function getDate() {
    const new_date = new Date();
    let year = new_date.getFullYear();
    document.getElementById("current").innerHTML = year;    
}


//Style Switching
function styleSwitch() {
    let style = document.getElementById("styling");
    style.getAttribute("href").substring(6,7) == 1 ? style.setAttribute("href","style-2.css") : style.setAttribute("href","style-1.css");
}