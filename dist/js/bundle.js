const getMunuSelectors = document.querySelectorAll(".menu__item");
for (let i = 0; i < getMunuSelectors.length; i += 1) {
    getMunuSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (let j = 0; j < getMunuSelectors.length; j += 1) {
            
            getMunuSelectors[j].classList.remove("menu__item--active");
            // console.log('del');
        }
        getMunuSelectors[i].classList.toggle("menu__item--active");
    });
}
var closeLink = document.querySelector(".close__link");
console.log(closeLink);

var mobileMenu = document.querySelector(".mobile-menu");
console.log(mobileMenu);

var openLink = document.querySelector(".menu-tablets");
console.log(openLink);

var closeLinkFromNav = document.querySelectorAll(".nav__item");
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

// console.log(closeLinkFromNav.length);

for (let i = 0; i < closeLinkFromNav.length; i += 1) {
    closeLinkFromNav[i].addEventListener("click", function () {
        // event.preventDefault();
        mobileMenu.classList.remove("mobile-menu-open");
        // console.log('close');
    });
}



console.log('aaaaaaaaaaaaaaaa');

const getTeamSelectors = document.querySelectorAll(".accordion-team__wrap");
for (let i = 0; i < getTeamSelectors.length; i += 1) {
    getTeamSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (let j = 0; j < getTeamSelectors.length; j += 1) {
            if (j !== i)
                getTeamSelectors[j].classList.remove("accordion-team__wrap--active");
            // console.log('del');
        }
        getTeamSelectors[i].classList.toggle("accordion-team__wrap--active");
    });
}