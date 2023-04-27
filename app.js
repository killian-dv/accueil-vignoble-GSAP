const allNavLinks = document.querySelectorAll('.container-nav a');
const imgNav = document.querySelectorAll('nav img');
const title = document.querySelector('.home-content h1');
const verticalLine = document.querySelector('.middle-line');
const grapesLogo = document.querySelector('.home-content img');
const homeBtn = document.querySelector('.home-content button');

window.addEventListener('load', initAnimation);

function initAnimation() {
    const TLFADE = gsap.timeline();

    TLFADE
    .to(title, {autoAlpha: 1, y: 0, delay: 0.2})
    .to(verticalLine, {height: '200'}, "-=0.3")
    .to(grapesLogo, {autoAlpha: 1, y: 0}, "-=0.2")
    .to(homeBtn, {autoAlpha: 1, y: 0}, "-=0.2")
    .to(allNavLinks, {autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1}, "-=0.2")
    .to(imgNav, {autoAlpha: 1, y: 0})
}