var experience = document.getElementById('experience');
var education = document.getElementById('education');
var skills = document.getElementById('skills');
var exp_btn = document.getElementById('exp-btn');
var edu_btn = document.getElementById('edu-btn');
var skills_btn = document.getElementById('skills-btn');

function changeexp(el){
    exp_btn.classList.add('active');
    edu_btn.classList.remove('active');
    skills_btn.classList.remove('active');
    experience.classList.add('active');
    education.classList.remove('active');
    skills.classList.remove('active');
}

function changeedu(el){
    exp_btn.classList.remove('active');
    edu_btn.classList.add('active');
    skills_btn.classList.remove('active');
    experience.classList.remove('active');
    education.classList.add('active');
    skills.classList.remove('active');
}

function changeskill(el){
    exp_btn.classList.remove('active');
    edu_btn.classList.remove('active');
    skills_btn.classList.add('active');
    experience.classList.remove('active');
    education.classList.remove('active');
    skills.classList.add('active');
}

var homeBtn = document.getElementById('home-btn');
var aboutBtn = document.getElementById('about-btn');
var portBtn = document.getElementById('port-btn');
var contactBtn = document.getElementById('contact-btn');

homeBtn.addEventListener("click", () =>{
    homeBtn.parentElement.classList.add('active');
    aboutBtn.parentElement.classList.remove('active');
    portBtn.parentElement.classList.remove('active');
    contactBtn.parentElement.classList.remove('active');
})

aboutBtn.addEventListener("click", () => {
    homeBtn.parentElement.classList.remove('active');
    aboutBtn.parentElement.classList.add('active');
    portBtn.parentElement.classList.remove('active');
    contactBtn.parentElement.classList.remove('active');
})

portBtn.addEventListener("click", () => {
    homeBtn.parentElement.classList.remove('active');
    aboutBtn.parentElement.classList.remove('active');
    portBtn.parentElement.classList.add('active');
    contactBtn.parentElement.classList.remove('active');
})

contactBtn.addEventListener("click", () => {
    homeBtn.parentElement.classList.remove('active');
    aboutBtn.parentElement.classList.remove('active');
    portBtn.parentElement.classList.remove('active');
    contactBtn.parentElement.classList.add('active');
})
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop < document.getElementById('about').getBoundingClientRect().top + 500) {
        homeBtn.parentElement.classList.add('active');
        aboutBtn.parentElement.classList.remove('active');
        portBtn.parentElement.classList.remove('active');
        contactBtn.parentElement.classList.remove('active');
    } else if (scrollTop < document.getElementById('portfolio').getBoundingClientRect().top + 500) {
        homeBtn.parentElement.classList.remove('active');
        aboutBtn.parentElement.classList.add('active');
        portBtn.parentElement.classList.remove('active');
        contactBtn.parentElement.classList.remove('active');
    } else if (scrollTop < document.getElementById('contact').getBoundingClientRect().top + 1500) {
        homeBtn.parentElement.classList.remove('active');
        aboutBtn.parentElement.classList.remove('active');
        portBtn.parentElement.classList.add('active');
        contactBtn.parentElement.classList.remove('active');
    } else {
        homeBtn.parentElement.classList.remove('active');
        aboutBtn.parentElement.classList.remove('active');
        portBtn.parentElement.classList.remove('active');
        contactBtn.parentElement.classList.add('active');
    }
});

