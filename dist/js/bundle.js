var closeLink = document.querySelector(".close__link");
console.log(closeLink);

var mobileMenu = document.querySelector(".mobile-menu");
console.log(mobileMenu);

var openLink = document.querySelector(".menu-tablets");
console.log(openLink);

var closeLinkFromNav = document.querySelector(".nav__link");
console.log(closeLinkFromNav);

openLink.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.add("mobile-menu-open");
    // console.log('open');
});

closeLink.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.remove("mobile-menu-open");
    // console.log('close');
});


