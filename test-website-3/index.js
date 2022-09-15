document.addEventListener('DOMContentLoaded', function(){
    var l = document.getElementsByClassName("head-div");
    var p = document.getElementsByClassName("foot-div");
    var initial = 1000;
    l[0].style.setProperty('display', 'flex');
    l[0].style.setProperty('height', '0px');
    setTimeout(function(){
        l[0].style.setProperty('height', '400px');
    }, 0);
    setTimeout(function(){
        l[0].style.setProperty('height', '0px');
    }, initial);
    setTimeout(function(){
        l[0].style.setProperty('display', 'none');
    }, 1000+initial);
    setTimeout(function(){
        p[0].style.setProperty('display', 'flex');
        p[0].style.setProperty('height', '0px');
    }, 0);
    setTimeout(function(){
        p[0].style.setProperty('height', '400px');
    }, initial);
    setTimeout(function(){
        p[0].style.setProperty('height', '0px');
    }, 1000+initial);
    setTimeout(function(){
        p[0].style.setProperty('display', 'none');
    }, 2000+initial);
});