// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
    '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('header__sm-menu--active')) {
        smallMenu.classList.remove('header__sm-menu--active')
    } else {
        smallMenu.classList.add('header__sm-menu--active')
    }
    if (headerHamMenuBtn.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    } else {
        headerHamMenuBtn.classList.add('d-none')
        headerHamMenuCloseBtn.classList.remove('d-none')
    }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
    headerSmallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('header__sm-menu--active')
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuCloseBtn.classList.add('d-none')
    })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
    location.href = 'index.html'
})

gsap.registerPlugin(ScrollTrigger);

// gsap.to('.justify-center-header', {
//     scrollTrigger: {
//         trigger: '.justify-center-header',
//         // start: 'top top+=100',
//         rotation:360,
//         // scrub: true, 
//     }
// });

gsap.to(".justify-center-header", {
    scrollTrigger: {
    trigger: ".about",
    scrub:true
    },
    opacity:0
    // delay:10,
    // duration: 30, 
    // x:-3000,
    // y:0,
  });


//   gsap.to(".logo-position", {
//     x:815,
//     y:260,
//     // opacity:0,
//   })

  gsap.to(".logo-position", {
    scrollTrigger: {
        trigger: '.about',
        scrub:true,
    },
    x:-1989,
    y:-500,
    opacity:1,
    duration:1 
  })


  const root = document.documentElement;
  const menuItem = document.querySelectorAll(".menu-item");
  const circularMenu = document.getElementById("circularMenu")

  const bgColor = localStorage.getItem("bg-color");
  bgColor && root.style.setProperty('--bg-color', bgColor);
  bgColor && root.style.setProperty('--bg-gradient', `linear-gradient(to right, ${bgColor}cc, ${bgColor}cc)`);

  function themeColor(ele){

    const color = ele.getAttribute("data-color");

    localStorage.setItem("bg-color", color);

    menuItem.forEach((items)=>{
        items.classList.remove("active");
    })
    ele.classList.add("active");

    root.style.setProperty('--bg-color', color);
    root.style.setProperty('--bg-gradient', `linear-gradient(to right, ${color}cc, ${color}cc)`);

    circularMenu.classList.remove("active")

    console.log(color);
  }
  