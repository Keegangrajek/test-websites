document.addEventListener('DOMContentLoaded', function(){
    var l = document.getElementsByClassName("head-div-1");
    var p = document.getElementsByClassName("foot-div-1");
    var initial = 1000;
    l[0].style.setProperty('display', 'flex');
    l[0].style.setProperty('height', '60px');
    p[0].style.setProperty('display', 'flex');
    p[0].style.setProperty('height', '20px');
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