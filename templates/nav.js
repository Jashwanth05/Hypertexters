// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

const vsi=document.querySelector(".bx-microphone");
vsi.addEventListener('click',()=>{
    var rec=new webkitSpeechRecognotion();
    rec.lang ="en-GB"
    rec.onresult= function(e){
        console.log(9);
    }
    rec.start();
});

function search () {
    let searchs=document.getElementById("search").value.toUpperCase();
if (searchs.includes("NEWS")) {
    window.location.href="tata.html"
}
else if (searchs.includes("MEET")) {
    window.location.href="meet.html"
}else if (searchs.includes("GADGETS")){
    window.location.href="gadgets.html"
}
else if (searchs.includes("EMO")){
    window.location.href="gadgets (1).html.html#emo"
}
else if (searchs.includes("SHOE")){
    window.location.href="gadgets (1).html.html#shoe"
}

else if (searchs.includes("PSVR")){
    window.location.href="gadgets (1).html.html#psvr"
}}

window.addEventListener('scroll',reveal())
function reveal(){
    let reveals=document.querySelectorAll(".reveal");
    for(var i=0;i<reveals.length;i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoints =150;
        
        if (revealtop<windowheight-revealpoints) {
            reveals[i].classList.add('active');
        }else {
            reveals[i].classList.remove('active');
        }
    }
}
