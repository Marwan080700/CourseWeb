
let navbarOpen = false;

function openNav(){
    let hamburNav = document.getElementById("hamburger-nav-container");

    if(!navbarOpen){
        hamburNav.style.display = "block";
        navbarOpen = true;
    } else {
        hamburNav.style.display = "none";
        navbarOpen = false;
    }
}
