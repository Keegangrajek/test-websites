var mobileNavbarState = false;

document.addEventListener('DOMContentLoaded', function(){
    var l = document.getElementsByClassName("head-div-1");
    var p = document.getElementsByClassName("foot-div-1");
    var bodyDiv = document.getElementsByClassName("body-div");
    var menuBody = document.getElementsByClassName("mobilemenu-dropdown-body");
    var menuBtn = document.getElementsByClassName('dropdown-btns');
    l[0].style.setProperty('display', 'flex');
    l[0].style.setProperty('height', '60px');
    p[0].style.setProperty('display', 'flex');
    p[0].style.setProperty('height', '20px');
    menuBody[0].style.setProperty('height', '0%');
    // setTimeout(function(){
    //     l[0].style.setProperty('height', '400px');
    // }, 0);
    // setTimeout(function(){
    //     l[0].style.setProperty('height', '60px');
    // }, initial);
    // setTimeout(function(){
    //     p[0].style.setProperty('display', 'flex');
    //     p[0].style.setProperty('height', '0px');
    // }, 0);
    // setTimeout(function(){
    //     p[0].style.setProperty('height', '400px');
    // }, initial);
    // setTimeout(function(){
    //     p[0].style.setProperty('height', '0px');
    // }, 1000+initial);
    // setTimeout(function(){
    //     p[0].style.setProperty('display', 'none');
    // }, 2000+initial);
});

function toggleMobileNavbar() {
    var menuBody = document.getElementsByClassName("mobilemenu-dropdown-body");
    var bodyDiv = document.getElementsByClassName("body-div");
    var footDiv = document.getElementsByClassName("foot-div-1");
    var menuBtn = document.getElementsByClassName('dropdown-btns');
    try {
        if (!mobileNavbarState) {
            try {
                document.getElementById('span-1').classList.add("mobile-menu-bars-span-animation-1");
                document.getElementById('span-2').classList.add("mobile-menu-bars-span-animation-2");
                document.getElementById('span-3').classList.add("mobile-menu-bars-span-animation-3");
                document.getElementById('span-1').classList.remove("mobile-menu-bars-span-animation-1-not");
                document.getElementById('span-2').classList.remove("mobile-menu-bars-span-animation-2-not");
                document.getElementById('span-3').classList.remove("mobile-menu-bars-span-animation-3-not");
                menuBody[0].style.setProperty('min-height', '100%');
                menuBody[0].style.setProperty('max-height', 'fit-content');
                footDiv[0].style.setProperty('height', '0px');
                bodyDiv[0].style.setProperty('transform', 'translatey(-200px)');
                for (let index = 0; index < menuBtn.length; index++) {
                    menuBtn[index].style.setProperty('display', 'flex');
                }
                setTimeout(function(){
                    bodyDiv[0].style.setProperty('display', 'none');
                }, 300);
            } catch {
                console.log('error1');
            }
            mobileNavbarState = true;
            return;
        } 
        if (mobileNavbarState) {
            try {
                document.getElementById('span-1').classList.add("mobile-menu-bars-span-animation-1-not");
                document.getElementById('span-2').classList.add("mobile-menu-bars-span-animation-2-not");
                document.getElementById('span-3').classList.add("mobile-menu-bars-span-animation-3-not");
                document.getElementById('span-1').classList.remove("mobile-menu-bars-span-animation-1");
                document.getElementById('span-2').classList.remove("mobile-menu-bars-span-animation-2");
                document.getElementById('span-3').classList.remove("mobile-menu-bars-span-animation-3");
                footDiv[0].style.setProperty('height', '20px');
                menuBody[0].style.setProperty('max-height', '0%');
                menuBody[0].style.setProperty('min-height', '0%');
                setTimeout(function(){
                    for (let index = 0; index < menuBtn.length; index++) {
                        menuBtn[index].style.setProperty('display', 'none');
                    }
                }, 150);
                setTimeout(function(){
                        bodyDiv[0].style.setProperty('display', 'flex');
                        bodyDiv[0].style.setProperty('transform', 'translatey(0px)');
                }, 150);
            } catch {
                console.log("error3");
            }
            mobileNavbarState = false;
            return;
        }
    } catch {
        console.log("error");
    }
}