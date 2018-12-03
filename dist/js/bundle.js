// начало формы
const getForm = document.querySelector(".form-order");
const getButton = document.querySelector(".btn--submit");
const getError = document.querySelector(".error");
var serverResponse;

const validateField = argField => {
    return argField.checkValidity();
    // if(!argField.checkValidity()) {
    //     argField.nextElementSibling.innerHTML = argField.validationMessage;
    //     return false;
    // } else {
    //     argField.nextElementSibling.innerHTML = "";
    //     return true;
    // }
};

const validateForm = argForm => {
    let valid = true;

    for (let i = 0; i < argForm.elements.length; i += 1) {
        if (!validateField(argForm.elements[i])) {
            valid = false;
        }
    }
    return valid;
};

getButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (validateForm(getForm)) {
        const formData = new FormData();
            formData.append("name", getForm.elements.name.value);
            formData.append("phone", getForm.elements.phone.value);
            formData.append("comment", getForm.elements.text.value);
            formData.append("to", "aaaaaa@aaaaaaa.aa");

        const json = new XMLHttpRequest();

        json.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        json.send(formData);

        json.addEventListener('load', () => {
            if (json.response) {
                const out = JSON.parse(json.response);
                console.log(out.message);
                serverResponse = out.message;
                const successOverlay = createOverlay(serverResponse);
                document.body.appendChild(successOverlay);
            }
        });
    }
});
// конец формы
// начало fullpage
new fullpage('#fullpage', {
    autoScrolling:true,
    menu: '#menu',
    anchors:['section-first', 'section-we', 'section-burgers', 
    'section-team', 'section-menu', 'section-reviews', 'section-how', 
    'section-form', 'section-contacts'],
});
// конец fullpage

// начало видео
const getVideo = document.querySelector(".player__video");
const getVideoPlayPauseButton = document.querySelector(".video__play-pause");
const getcVideoIcon = document.querySelector(".control__video-icon");
const getTimeRange = document.querySelector(".control__time-range");
const getAudioPlayPauseButton = document.querySelector(".control__sound-icon");
const getSoundRange = document.querySelector(".control__sound-range");


getVideoPlayPauseButton.addEventListener('click', playPause);
getcVideoIcon.addEventListener('click', playPause);
getVideo.addEventListener('timeupdate', percentRange);
getTimeRange.addEventListener('input', progressRange);

getAudioPlayPauseButton.addEventListener('click', playAudio);
getSoundRange.addEventListener('input', percentSound);

function playPause() {

    if (getVideo.paused) {
        getVideo.play();
        getVideoPlayPauseButton.style.opacity = '0';
    } else {
        getVideo.pause();
        getVideoPlayPauseButton.style.opacity = '0.5';
    }
};






// конец видео
// // начало карты
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [51.680427, 39.176769],
        zoom: 14
    }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
      
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-1, -1]
            }),

        myPlacemarkWithContent = new ymaps.Placemark([51.689497, 39.176869], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: './img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
// конец карты

// начало кода аккордеон (горизонтальный)
const getMunuSelectors = document.querySelectorAll(".menu__item");
for (let i = 0; i < getMunuSelectors.length; i += 1) {
    getMunuSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (let j = 0; j < getMunuSelectors.length; j += 1) {
            if (j !== i)
            getMunuSelectors[j].classList.remove("menu__item--active");
        }
        getMunuSelectors[i].classList.toggle("menu__item--active");
    });
}
// конец кода аккордеон (горизонтальный)
// начало мобильного меню
const closeLink = document.querySelector(".close__link");
const navLink = document.querySelectorAll(".nav__link");
const mobileMenu = document.querySelector(".mobile-menu");
const openLink = document.querySelector(".menu-tablets");

openLink.addEventListener("click", function (e) {
    e.preventDefault();
    mobileMenu.classList.add("mobile-menu-open")
});

closeLink.addEventListener("click", function (e) {
    e.preventDefault();
    mobileMenu.classList.remove("mobile-menu-open")
});

for (let i = 0; i < navLink.length; i += 1) {
    navLink[i].addEventListener("click", function () {
        mobileMenu.classList.remove("mobile-menu-open");
    });
}
// конец мобильного меню
// начало кода модальное окно отзывов
const getCommentsSelectors = document.querySelectorAll(".comment__link");
const successOverlay = createOverlay(" <h3 class=\"comment__title--overlay\">Стивен Спилберг</h3>" + 
"С другой стороны дальнейшее развитие различных форм" + 
"деятельности напрямую зависит от системы масштабного изменения ряда параметров. Таким образом," +  
"курс на социально-ориентированный национальный проект способствует повышению актуальности" + 
"направлений прогрессивного развития!");

for (let i = 0; i < getCommentsSelectors.length; i += 1) {
    getCommentsSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        document.body.appendChild(successOverlay);
    });
}

function createOverlay(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
  
    const template = document.querySelector("#overlayTemplate");
    overlayElement.innerHTML = template.innerHTML;
  
    const closeElement = overlayElement.querySelector(".close");
    closeElement.addEventListener("click", function(event) {
        event.preventDefault();
      document.body.removeChild(overlayElement);
    });
  
    const contentElement = overlayElement.querySelector(".content");
    contentElement.innerHTML = content;
  
    return overlayElement;
  }
  
// конец кода модальное окно отзывов
// начало кода слайдер
const left = document.querySelector(".slider-layout__left");
const right = document.querySelector(".slider-layout__right");
const items = document.querySelector(".slider__wrap");

// ширина изображения
var width = 100;
// текущий сдвиг влево
var count = 0;
// всего слайдов
const item = document.querySelectorAll(".slider__item");

right.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log(item.length, item.length - 2);
    if (count <= item.length - 2) {
        count += 1;
        // console.log(count + '=>');
        position = width * count;
        items.style.marginLeft = '-' + position + '%';
        // console.log(items.style.marginLeft);
    }
});

left.addEventListener("click", function (event) {
    event.preventDefault();
    if (count !== 0) {
        count -= 1;
        // console.log(count + '<=');
        position = width * count;
        items.style.marginLeft = '-' + position + '%';
    }
});
// конец кода слайдер
// начало кода аккордеон (вертикальный)
const getTeamSelectors = document.querySelectorAll(".accordion-team__wrap");
for (let i = 0; i < getTeamSelectors.length; i += 1) {
    getTeamSelectors[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (let j = 0; j < getTeamSelectors.length; j += 1) {
            if (j !== i)
            
                getTeamSelectors[j].classList.remove("accordion-team__wrap--active");
        }
        getTeamSelectors[i].classList.toggle("accordion-team__wrap--active");
    });
}
// конец кода аккордеон (вертикальный)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJmdWxscGFnZS5qcyIsImhvdy5qcyIsIm1hcC5qcyIsIm1lbnUuanMiLCJtb2JpbGUuanMiLCJtb2RhbC5qcyIsInNsaWRlci5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0L3QsNGH0LDQu9C+INGE0L7RgNC80YtcclxuY29uc3QgZ2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1vcmRlclwiKTtcclxuY29uc3QgZ2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tLXN1Ym1pdFwiKTtcclxuY29uc3QgZ2V0RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xyXG52YXIgc2VydmVyUmVzcG9uc2U7XHJcblxyXG5jb25zdCB2YWxpZGF0ZUZpZWxkID0gYXJnRmllbGQgPT4ge1xyXG4gICAgcmV0dXJuIGFyZ0ZpZWxkLmNoZWNrVmFsaWRpdHkoKTtcclxuICAgIC8vIGlmKCFhcmdGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgIC8vICAgICBhcmdGaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYXJnRmllbGQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICBhcmdGaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxufTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlRm9ybSA9IGFyZ0Zvcm0gPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ0Zvcm0uZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoYXJnRm9ybS5lbGVtZW50c1tpXSkpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn07XHJcblxyXG5nZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRm9ybShnZXRGb3JtKSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgZ2V0Rm9ybS5lbGVtZW50cy5uYW1lLnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgZ2V0Rm9ybS5lbGVtZW50cy5waG9uZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbW1lbnRcIiwgZ2V0Rm9ybS5lbGVtZW50cy50ZXh0LnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidG9cIiwgXCJhYWFhYWFAYWFhYWFhYS5hYVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBqc29uLm9wZW4oJ1BPU1QnLCAnaHR0cHM6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL3NlbmRtYWlsJyk7XHJcbiAgICAgICAganNvbi5zZW5kKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAganNvbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoanNvbi5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gSlNPTi5wYXJzZShqc29uLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG91dC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNlcnZlclJlc3BvbnNlID0gb3V0Lm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzT3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoc2VydmVyUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWNjZXNzT3ZlcmxheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbi8vINC60L7QvdC10YYg0YTQvtGA0LzRiyIsIi8vINC90LDRh9Cw0LvQviBmdWxscGFnZVxyXG5uZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuICAgIGF1dG9TY3JvbGxpbmc6dHJ1ZSxcclxuICAgIG1lbnU6ICcjbWVudScsXHJcbiAgICBhbmNob3JzOlsnc2VjdGlvbi1maXJzdCcsICdzZWN0aW9uLXdlJywgJ3NlY3Rpb24tYnVyZ2VycycsIFxyXG4gICAgJ3NlY3Rpb24tdGVhbScsICdzZWN0aW9uLW1lbnUnLCAnc2VjdGlvbi1yZXZpZXdzJywgJ3NlY3Rpb24taG93JywgXHJcbiAgICAnc2VjdGlvbi1mb3JtJywgJ3NlY3Rpb24tY29udGFjdHMnXSxcclxufSk7XHJcbi8vINC60L7QvdC10YYgZnVsbHBhZ2VcclxuIiwiLy8g0L3QsNGH0LDQu9C+INCy0LjQtNC10L5cclxuY29uc3QgZ2V0VmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fdmlkZW9cIik7XHJcbmNvbnN0IGdldFZpZGVvUGxheVBhdXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb19fcGxheS1wYXVzZVwiKTtcclxuY29uc3QgZ2V0Y1ZpZGVvSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbF9fdmlkZW8taWNvblwiKTtcclxuY29uc3QgZ2V0VGltZVJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250cm9sX190aW1lLXJhbmdlXCIpO1xyXG5jb25zdCBnZXRBdWRpb1BsYXlQYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbF9fc291bmQtaWNvblwiKTtcclxuY29uc3QgZ2V0U291bmRSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbF9fc291bmQtcmFuZ2VcIik7XHJcblxyXG5cclxuZ2V0VmlkZW9QbGF5UGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UGF1c2UpO1xyXG5nZXRjVmlkZW9JY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVBhdXNlKTtcclxuZ2V0VmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHBlcmNlbnRSYW5nZSk7XHJcbmdldFRpbWVSYW5nZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHByb2dyZXNzUmFuZ2UpO1xyXG5cclxuZ2V0QXVkaW9QbGF5UGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5QXVkaW8pO1xyXG5nZXRTb3VuZFJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgcGVyY2VudFNvdW5kKTtcclxuXHJcbmZ1bmN0aW9uIHBsYXlQYXVzZSgpIHtcclxuXHJcbiAgICBpZiAoZ2V0VmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgZ2V0VmlkZW8ucGxheSgpO1xyXG4gICAgICAgIGdldFZpZGVvUGxheVBhdXNlQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdldFZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgZ2V0VmlkZW9QbGF5UGF1c2VCdXR0b24uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyDQutC+0L3QtdGGINCy0LjQtNC10L4iLCIvLyAvLyDQvdCw0YfQsNC70L4g0LrQsNGA0YLRi1xyXG55bWFwcy5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XHJcbiAgICAgICAgY2VudGVyOiBbNTEuNjgwNDI3LCAzOS4xNzY3NjldLFxyXG4gICAgICAgIHpvb206IDE0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgICAgIHNlYXJjaENvbnRyb2xQcm92aWRlcjogJ3lhbmRleCNzZWFyY2gnXHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIC8vINCh0L7Qt9C00LDRkdC8INC80LDQutC10YIg0YHQvtC00LXRgNC20LjQvNC+0LPQvi5cclxuICAgICAgICBNeUljb25Db250ZW50TGF5b3V0ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKFxyXG4gICAgICAgICAgICAnPGRpdiBzdHlsZT1cImNvbG9yOiAjRkZGRkZGOyBmb250LXdlaWdodDogYm9sZDtcIj4kW3Byb3BlcnRpZXMuaWNvbkNvbnRlbnRdPC9kaXY+J1xyXG4gICAgICAgICksXHJcbiAgICAgIFxyXG4gICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhteU1hcC5nZXRDZW50ZXIoKSwge1xyXG4gICAgICAgICAgICBoaW50Q29udGVudDogJ9Ch0L7QsdGB0YLQstC10L3QvdGL0Lkg0LfQvdCw0YfQvtC6INC80LXRgtC60LgnLFxyXG4gICAgICAgICAgICBiYWxsb29uQ29udGVudDogJ9Ct0YLQviDQutGA0LDRgdC40LLQsNGPINC80LXRgtC60LAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cclxuICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcuL2ltZy9pY29ucy9tYXAtbWFya2VyLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N10sXHJcbiAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMSwgLTFdXHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBteVBsYWNlbWFya1dpdGhDb250ZW50ID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTEuNjg5NDk3LCAzOS4xNzY4NjldLCB7XHJcbiAgICAgICAgICAgIGhpbnRDb250ZW50OiAn0KHQvtCx0YHRgtCy0LXQvdC90YvQuSDQt9C90LDRh9C+0Log0LzQtdGC0LrQuCDRgSDQutC+0L3RgtC10L3RgtC+0LwnLFxyXG4gICAgICAgICAgICBiYWxsb29uQ29udGVudDogJ9CQINGN0YLQsCDigJQg0L3QvtCy0L7Qs9C+0LTQvdGP0Y8nLFxyXG4gICAgICAgICAgICBpY29uQ29udGVudDogJzEyJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cclxuICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlV2l0aENvbnRlbnQnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcuL2ltZy9pY29ucy9tYXAtbWFya2VyLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N10sXHJcbiAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjQsIC0yNF0sXHJcbiAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INGB0LvQvtGPINGBINGB0L7QtNC10YDQttC40LzRi9C8INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdC70L7RjyDRgSDQutCw0YDRgtC40L3QutC+0LkuXHJcbiAgICAgICAgICAgICAgICBpY29uQ29udGVudE9mZnNldDogWzE1LCAxNV0sXHJcbiAgICAgICAgICAgICAgICAvLyDQnNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXHJcbiAgICAgICAgICAgICAgICBpY29uQ29udGVudExheW91dDogTXlJY29uQ29udGVudExheW91dFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICBteU1hcC5nZW9PYmplY3RzXHJcbiAgICAgICAgLmFkZChteVBsYWNlbWFyaylcclxuICAgICAgICAuYWRkKG15UGxhY2VtYXJrV2l0aENvbnRlbnQpO1xyXG59KTtcclxuLy8g0LrQvtC90LXRhiDQutCw0YDRgtGLXHJcbiIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0LkpXHJcbmNvbnN0IGdldE11bnVTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVfX2l0ZW1cIik7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0TXVudVNlbGVjdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZ2V0TXVudVNlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdldE11bnVTZWxlY3RvcnMubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKGogIT09IGkpXHJcbiAgICAgICAgICAgIGdldE11bnVTZWxlY3RvcnNbal0uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TXVudVNlbGVjdG9yc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0LkpIiwiLy8g0L3QsNGH0LDQu9C+INC80L7QsdC40LvRjNC90L7Qs9C+INC80LXQvdGOXHJcbmNvbnN0IGNsb3NlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VfX2xpbmtcIik7XHJcbmNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlua1wiKTtcclxuY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIik7XHJcbmNvbnN0IG9wZW5MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYmxldHNcIik7XHJcblxyXG5vcGVuTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51LW9wZW5cIilcclxufSk7XHJcblxyXG5jbG9zZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtbWVudS1vcGVuXCIpXHJcbn0pO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaW5rLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBuYXZMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLW1lbnUtb3BlblwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LzQvtCx0LjQu9GM0L3QvtCz0L4g0LzQtdC90Y4iLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC+0YLQt9GL0LLQvtCyXHJcbmNvbnN0IGdldENvbW1lbnRzU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21tZW50X19saW5rXCIpO1xyXG5jb25zdCBzdWNjZXNzT3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoXCIgPGgzIGNsYXNzPVxcXCJjb21tZW50X190aXRsZS0tb3ZlcmxheVxcXCI+0KHRgtC40LLQtdC9INCh0L/QuNC70LHQtdGA0LM8L2gzPlwiICsgXHJcblwi0KEg0LTRgNGD0LPQvtC5INGB0YLQvtGA0L7QvdGLINC00LDQu9GM0L3QtdC50YjQtdC1INGA0LDQt9Cy0LjRgtC40LUg0YDQsNC30LvQuNGH0L3Ri9GFINGE0L7RgNC8XCIgKyBcclxuXCLQtNC10Y/RgtC10LvRjNC90L7RgdGC0Lgg0L3QsNC/0YDRj9C80YPRjiDQt9Cw0LLQuNGB0LjRgiDQvtGCINGB0LjRgdGC0LXQvNGLINC80LDRgdGI0YLQsNCx0L3QvtCz0L4g0LjQt9C80LXQvdC10L3QuNGPINGA0Y/QtNCwINC/0LDRgNCw0LzQtdGC0YDQvtCyLiDQotCw0LrQuNC8INC+0LHRgNCw0LfQvtC8LFwiICsgIFxyXG5cItC60YPRgNGBINC90LAg0YHQvtGG0LjQsNC70YzQvdC+LdC+0YDQuNC10L3RgtC40YDQvtCy0LDQvdC90YvQuSDQvdCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0L/RgNC+0LXQutGCINGB0L/QvtGB0L7QsdGB0YLQstGD0LXRgiDQv9C+0LLRi9GI0LXQvdC40Y4g0LDQutGC0YPQsNC70YzQvdC+0YHRgtC4XCIgKyBcclxuXCLQvdCw0L/RgNCw0LLQu9C10L3QuNC5INC/0YDQvtCz0YDQtdGB0YHQuNCy0L3QvtCz0L4g0YDQsNC30LLQuNGC0LjRjyFcIik7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdldENvbW1lbnRzU2VsZWN0b3JzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBnZXRDb21tZW50c1NlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN1Y2Nlc3NPdmVybGF5KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xyXG4gIFxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlUZW1wbGF0ZVwiKTtcclxuICAgIG92ZXJsYXlFbGVtZW50LmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICBcclxuICAgIGNvbnN0IGNsb3NlRWxlbWVudCA9IG92ZXJsYXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcbiAgICBjbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gb3ZlcmxheUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICBcclxuICAgIHJldHVybiBvdmVybGF5RWxlbWVudDtcclxuICB9XHJcbiAgXHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC+0YLQt9GL0LLQvtCyIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINGB0LvQsNC50LTQtdGAXHJcbmNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1sYXlvdXRfX2xlZnRcIik7XHJcbmNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItbGF5b3V0X19yaWdodFwiKTtcclxuY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fd3JhcFwiKTtcclxuXHJcbi8vINGI0LjRgNC40L3QsCDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbnZhciB3aWR0aCA9IDEwMDtcclxuLy8g0YLQtdC60YPRidC40Lkg0YHQtNCy0LjQsyDQstC70LXQstC+XHJcbnZhciBjb3VudCA9IDA7XHJcbi8vINCy0YHQtdCz0L4g0YHQu9Cw0LnQtNC+0LJcclxuY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyX19pdGVtXCIpO1xyXG5cclxucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0ubGVuZ3RoLCBpdGVtLmxlbmd0aCAtIDIpO1xyXG4gICAgaWYgKGNvdW50IDw9IGl0ZW0ubGVuZ3RoIC0gMikge1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQgKyAnPT4nKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpZHRoICogY291bnQ7XHJcbiAgICAgICAgaXRlbXMuc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHBvc2l0aW9uICsgJyUnO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zLnN0eWxlLm1hcmdpbkxlZnQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChjb3VudCAhPT0gMCkge1xyXG4gICAgICAgIGNvdW50IC09IDE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQgKyAnPD0nKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpZHRoICogY291bnQ7XHJcbiAgICAgICAgaXRlbXMuc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHBvc2l0aW9uICsgJyUnO1xyXG4gICAgfVxyXG59KTtcclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDRgdC70LDQudC00LXRgCIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSlcclxuY29uc3QgZ2V0VGVhbVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLXRlYW1fX3dyYXBcIik7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0VGVhbVNlbGVjdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZ2V0VGVhbVNlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdldFRlYW1TZWxlY3RvcnMubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKGogIT09IGkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZ2V0VGVhbVNlbGVjdG9yc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWNjb3JkaW9uLXRlYW1fX3dyYXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0VGVhbVNlbGVjdG9yc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwiYWNjb3JkaW9uLXRlYW1fX3dyYXAtLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQstC10YDRgtC40LrQsNC70YzQvdGL0LkpIl19
