/*=============== SHOW & CLOSE MENU ===============*/

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE HEADER STYLES ===============*/

const scrollHeader = () => {
  const header = document.getElementById("header");
  //Add the .scroll-hwader class if the bottom scroll of the view

  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER MENU ===============*/

const swiperTabs = new Swiper(".menu__tabs", {
  sliderPreview: "auto",
});

const swiperMenu = new Swiper(".menu__content", {
  loop: true,
  thumbs: {
    swiper: swiperTabs,
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollup = () => {
  const scrollUp = document.getElementById("scroll-up");
  //Add the .scroll-haeder class if the bottm scroll of the view port
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollup);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
//Link the ID of each section (section id="home") to each link (a href="home")
//add activate the link with class .active_link

const scrollActive = () => {
  //We get the position by scrolling down
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id, //id of each section
      top = section.offsetTop - 100,
      height = section.offsetHeight,
      link = document.querySelector(".nav__menu a[href*=" + id + "]"); //id nav link

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY >= top && scrollY <= top + height,
    );
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
