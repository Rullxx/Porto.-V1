// ========================================
// MYPORTO SCRIPT.JS
// PART 1
// ========================================

// PRELOADER
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

});

// ===========================
// TYPING EFFECT
// ===========================

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "UI Designer",
    "JavaScript Developer",
    "React Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typing) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typing.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 120);

}

typeEffect();


// ===========================
// DARK MODE
// ===========================

const themeBtn = document.getElementById("theme");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

    if(themeBtn){

        themeBtn.textContent = "☀️";

    }

}

themeBtn?.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeBtn.textContent="☀️";

    }else{

        localStorage.setItem("theme","dark");

        themeBtn.textContent="🌙";

    }

});


// ===========================
// REVEAL SCROLL
// ===========================

const reveals =
document.querySelectorAll(".reveal");

function revealSection(){

    const trigger =
    window.innerHeight - 120;

    reveals.forEach(section=>{

        const top =
        section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSection);

revealSection();


// ===========================
// SKILL BAR ANIMATION
// ===========================

const skillBars =
document.querySelectorAll(".bar span");

function animateSkill(){

    skillBars.forEach(bar=>{

        const width =
        bar.style.width;

        bar.style.width="0";

        setTimeout(()=>{

            bar.style.width=width;

        },300);

    });

}

const skillSection =
document.querySelector("#skill");

let skillPlayed=false;

window.addEventListener("scroll",()=>{

    if(!skillSection) return;

    const top=
    skillSection.getBoundingClientRect().top;

    if(top < window.innerHeight-100 && !skillPlayed){

        animateSkill();

        skillPlayed=true;

    }

});


// ===========================
// NAVBAR ACTIVE
// ===========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=
        window.scrollY;

        const offset=
        section.offsetTop-150;

        const height=
        section.offsetHeight;

        if(top>=offset && top<offset+height){

            current=section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")
        ==="#"+current){

            link.classList.add("active");

        }

    });

});


// ===========================
// HEADER BLUR
// ===========================

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


// ===========================
// BUTTON RIPPLE
// ===========================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=
document.createElement("span");

const rect=
this.getBoundingClientRect();

ripple.style.left=
e.clientX-rect.left+"px";

ripple.style.top=
e.clientY-rect.top+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

// ========================================
// PART 2 (REVISI)
// 100% SESUAI HTML & CSS
// ========================================

// ===========================
// SCROLL PROGRESS BAR
// ===========================

const progressBar = document.createElement("div");
progressBar.id = "progress-bar";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ===========================
// BACK TO TOP
// ===========================

const topBtn = document.getElementById("top");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 400) {

        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";

    }

});

topBtn?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===========================
// HERO IMAGE PARALLAX
// ===========================

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// ===========================
// HERO TEXT PARALLAX
// ===========================

const heroText =
document.querySelector(".hero-text");

window.addEventListener("scroll", () => {

    if (!heroText) return;

    heroText.style.transform =
        `translateY(${window.scrollY * 0.2}px)`;

});

// ===========================
// COUNTER
// ===========================

const counterItems =
document.querySelectorAll(".counter-box h2");

let counterPlayed = false;

function runCounter() {

    counterItems.forEach(item => {

        const target =
        parseInt(item.innerText);

        let number = 0;

        const speed = target / 80;

        const update = () => {

            number += speed;

            if (number < target) {

                item.innerText =
                Math.ceil(number);

                requestAnimationFrame(update);

            } else {

                item.innerText = target;

            }

        }

        update();

    });

}

window.addEventListener("scroll", () => {

    const counter =
    document.querySelector(".counter");

    if (!counter || counterPlayed) return;

    const top =
    counter.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        runCounter();

        counterPlayed = true;

    }

});

// ===========================
// CARD HOVER
// ===========================

const cards = document.querySelectorAll(

".skill-card, .service-card, .project-card, .contact-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(56,189,248,.25),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,.05)";

    });

});

// ===========================
// FLOATING ICON
// ===========================

const emoji = [

"✨",
"⚡",
"💙",
"🚀",
"🔥"

];

setInterval(() => {

    const icon =
    document.createElement("span");

    icon.innerHTML =
    emoji[Math.floor(Math.random() * emoji.length)];

    icon.className =
    "floating-icon";

    icon.style.left =
    Math.random() * 100 + "vw";

    icon.style.fontSize =
    Math.random() * 20 + 18 + "px";

    document.body.appendChild(icon);

    setTimeout(() => {

        icon.remove();

    }, 4500);

}, 1200);

// ===========================
// CONSOLE
// ===========================

console.log(
"%cWelcome To My Portfolio 🚀",
"font-size:18px;color:#38bdf8;font-weight:bold;"
);

// ========================================
// PART 3
// FINAL
// ========================================

// ===========================
// PRELOADER
// ===========================

window.addEventListener("load", () => {

const loader =
document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

// ===========================
// SMOOTH SCROLL
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=
document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ===========================
// NAVBAR SHOW / HIDE
// ===========================

let lastScroll=0;

const navbar=
document.querySelector("header");

window.addEventListener("scroll",()=>{

const current=
window.pageYOffset;

if(current>lastScroll && current>120){

navbar.style.top="-120px";

}else{

navbar.style.top="0";

}

lastScroll=current;

});

// ===========================
// PROJECT IMAGE EFFECT
// ===========================

document.querySelectorAll(".project-card img")
.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// ===========================
// CONTACT CARD EFFECT
// ===========================

document.querySelectorAll(".contact-card")
.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// ===========================
// HERO IMAGE GLOW
// ===========================

const photo=
document.querySelector(".hero-image img");

if(photo){

setInterval(()=>{

photo.style.boxShadow=

"0 0 60px rgba(56,189,248,.7)";

setTimeout(()=>{

photo.style.boxShadow=

"0 0 30px rgba(56,189,248,.4)";

},800);

},1600);

}

// ===========================
// SECTION FADE
// ===========================

const allSection=
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

allSection.forEach(sec=>{

const top=
sec.getBoundingClientRect().top;

if(top<window.innerHeight-120){

sec.style.opacity="1";

sec.style.transform="translateY(0)";

}

});

});

// ===========================
// EASTER EGG
// ===========================

let clickLogo=0;

const logo=
document.querySelector(".logo");

logo?.addEventListener("click",()=>{

clickLogo++;

if(clickLogo==7){

alert("😎 Selamat! Kamu menemukan Easter Egg Portfolio.");

clickLogo=0;

}

});

// ===========================
// ERROR HANDLER
// ===========================

window.onerror=function(){

console.log("Ignored Minor Error.");

return true;

};

// ===========================
// FINISH
// ===========================

console.log(

"%cPortfolio Ready 🚀",

"font-size:20px;color:#38bdf8;font-weight:bold;"

);