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