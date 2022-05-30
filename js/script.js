//header
const header = document.querySelector("#header");
const pager = document.querySelectorAll(".gnb > li");
const cont = document.querySelectorAll(".cont");
const section = document.querySelectorAll(".section");
const logo = document.querySelector(".logo");
const gnbMenu = document.querySelector(".gnb");

let contPosition = [];

window.addEventListener("scroll",function(){
    let scTop = window.scrollY;

    for(let i=0; i< cont.length; i++){
        contPosition[i] = cont[i].offsetTop; //스크롤 길이 설정
        pager[i].classList.remove("one");
    }

    if(scTop > 0){
        header.classList.add("in");

        logo.classList.add("in");
        logo.querySelector("img").setAttribute("src","img/logo.png");

        for(let i=0; i<pager.length; i++){
            pager[i].classList.add("in");
        }
    }
    else{
        header.classList.remove("in");

        logo.classList.remove("in");
        logo.querySelector("img").setAttribute("src","img/logo2.png");

        for(let i=0; i<pager.length; i++){
            pager[i].classList.remove("in");
        }
    }

    //첫번째
    if(scTop >= contPosition[0] && scTop < contPosition[1]){
        pager[0].classList.add("on");
        pager[0].classList.add("one");
    }

    //두번째
    else if(scTop >= contPosition[1] && scTop < contPosition[2]){
        pager[0].classList.remove("one");

        pager[1].classList.add("on");
        pager[1].classList.add("one");
        section[0].classList.add("start");
    }

    //세번째
    else if(scTop >= contPosition[2] && scTop < contPosition[3]){
        pager[1].classList.remove("one");

        pager[2].classList.add("on");
        pager[2].classList.add("one");
        section[1].classList.add("start");
        section[2].classList.add("start");
    }
    //네번째
    else if(scTop >= contPosition[3] && scTop < contPosition[4]){ // 구역 길이 지정
        pager[2].classList.remove("one");

        pager[3].classList.add("on");
        pager[3].classList.add("one");
    }

    //다섯번째
    else if(scTop >= contPosition[4]){
        pager[3].classList.remove("one");

        pager[4].classList.add("on");
        pager[4].classList.add("one");
    }
});

for(let i=0; i<pager.length; i++){
    pager[i].addEventListener("click",function(e){
        e.preventDefault();
        let scrollMove = cont[i].offsetTop;
        window.scrollTo({
            top:scrollMove,
            behavior:"smooth"
        });
    });
}

//typing
let text = "I am Seoyun Kim";
let viewtext = "";
let i = 0;

const tyPing = document.querySelector(".typing");

let autoTyping = setInterval(function(){
    typing();
},100);

function typing(){
    viewtext = text[i++];

    if(viewtext == "\n"){
        tyPing.innerHTML += "<br>";
    }
    else{
        tyPing.innerHTML += viewtext;
    }

    if(i > text.length-1){
        clearInterval(autoTyping);

        setTimeout(function(){
            tyPing.innerHTML = "";
            i = 0;

            autoTyping = setInterval(function(){
                typing();
            },100);
        },4000);
    }
}

//cont1 배경변경
let chekDate = new Date();
let hr = chekDate.getHours();
const stage = document.querySelector("#container .bg");
let time = ["morning","afternoon","night"]; 

document.querySelector("#container .bg").classList.remove("morning","afternoon","night");

if(hr >= 6 && hr < 12){ 
    document.querySelector("#container .bg").classList.add("morning");
    
}
else if(hr >= 12 && hr < 19){
    document.querySelector("#container .bg").classList.add("afternoon");
    
}
else{
    document.querySelector("#container .bg").classList.add("night");
    
}

//cont4 
let tabMenu = document.querySelectorAll(".menu li");
let tabContents = document.querySelectorAll(".product");

for(let i = 0; i < tabMenu.length; i++){
    tabMenu[i].addEventListener("click",function(e){
        e.preventDefault();

        for(let t = 0; t < tabMenu.length; t++){
            tabMenu[t].classList.remove("on");
            tabContents[t].classList.remove("on");
        }
        tabMenu[i].classList.add("on");
        tabContents[i].classList.add("on");
    });
}

//cont5
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});