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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJmdWxscGFnZS5qcyIsImhvdy5qcyIsIm1hcC5qcyIsIm1lbnUuanMiLCJtb2JpbGUuanMiLCJtb2RhbC5qcyIsInNsaWRlci5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINC90LDRh9Cw0LvQviDRhNC+0YDQvNGLXHJcbmNvbnN0IGdldEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tb3JkZXJcIik7XHJcbmNvbnN0IGdldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1zdWJtaXRcIik7XHJcbmNvbnN0IGdldEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcclxudmFyIHNlcnZlclJlc3BvbnNlO1xyXG5cclxuY29uc3QgdmFsaWRhdGVGaWVsZCA9IGFyZ0ZpZWxkID0+IHtcclxuICAgIHJldHVybiBhcmdGaWVsZC5jaGVja1ZhbGlkaXR5KCk7XHJcbiAgICAvLyBpZighYXJnRmllbGQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAvLyAgICAgYXJnRmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IGFyZ0ZpZWxkLnZhbGlkYXRpb25NZXNzYWdlO1xyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgYXJnRmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyB9XHJcbn07XHJcblxyXG5jb25zdCB2YWxpZGF0ZUZvcm0gPSBhcmdGb3JtID0+IHtcclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdGb3JtLmVsZW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGFyZ0Zvcm0uZWxlbWVudHNbaV0pKSB7XHJcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG59O1xyXG5cclxuZ2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oZ2V0Rm9ybSkpIHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIGdldEZvcm0uZWxlbWVudHMubmFtZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInBob25lXCIsIGdldEZvcm0uZWxlbWVudHMucGhvbmUudmFsdWUpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjb21tZW50XCIsIGdldEZvcm0uZWxlbWVudHMudGV4dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcInRvXCIsIFwiYWFhYWFhQGFhYWFhYWEuYWFcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IGpzb24gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgICAganNvbi5vcGVuKCdQT1NUJywgJ2h0dHBzOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9zZW5kbWFpbCcpO1xyXG4gICAgICAgIGpzb24uc2VuZChmb3JtRGF0YSk7XHJcblxyXG4gICAgICAgIGpzb24uYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGpzb24ucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dCA9IEpTT04ucGFyc2UoanNvbi5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvdXQubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBzZXJ2ZXJSZXNwb25zZSA9IG91dC5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc092ZXJsYXkgPSBjcmVhdGVPdmVybGF5KHNlcnZlclJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3VjY2Vzc092ZXJsYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4vLyDQutC+0L3QtdGGINGE0L7RgNC80YsiLCIvLyDQvdCw0YfQsNC70L4gZnVsbHBhZ2VcclxubmV3IGZ1bGxwYWdlKCcjZnVsbHBhZ2UnLCB7XHJcbiAgICBhdXRvU2Nyb2xsaW5nOnRydWUsXHJcbiAgICBtZW51OiAnI21lbnUnLFxyXG4gICAgYW5jaG9yczpbJ3NlY3Rpb24tZmlyc3QnLCAnc2VjdGlvbi13ZScsICdzZWN0aW9uLWJ1cmdlcnMnLCBcclxuICAgICdzZWN0aW9uLXRlYW0nLCAnc2VjdGlvbi1tZW51JywgJ3NlY3Rpb24tcmV2aWV3cycsICdzZWN0aW9uLWhvdycsIFxyXG4gICAgJ3NlY3Rpb24tZm9ybScsICdzZWN0aW9uLWNvbnRhY3RzJ10sXHJcbn0pO1xyXG4vLyDQutC+0L3QtdGGIGZ1bGxwYWdlXHJcbiIsIi8vINC90LDRh9Cw0LvQviDQstC40LTQtdC+XHJcbmNvbnN0IGdldFZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3ZpZGVvXCIpO1xyXG5jb25zdCBnZXRWaWRlb1BsYXlQYXVzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9fX3BsYXktcGF1c2VcIik7XHJcbmNvbnN0IGdldGNWaWRlb0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xfX3ZpZGVvLWljb25cIik7XHJcbmNvbnN0IGdldFRpbWVSYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbF9fdGltZS1yYW5nZVwiKTtcclxuY29uc3QgZ2V0QXVkaW9QbGF5UGF1c2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xfX3NvdW5kLWljb25cIik7XHJcbmNvbnN0IGdldFNvdW5kUmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xfX3NvdW5kLXJhbmdlXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyDQutC+0L3QtdGGINCy0LjQtNC10L4iLCIvLyAvLyDQvdCw0YfQsNC70L4g0LrQsNGA0YLRi1xyXG55bWFwcy5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XHJcbiAgICAgICAgY2VudGVyOiBbNTEuNjgwNDI3LCAzOS4xNzY3NjldLFxyXG4gICAgICAgIHpvb206IDE0XHJcbiAgICB9LCB7XHJcbiAgICAgICAgICAgIHNlYXJjaENvbnRyb2xQcm92aWRlcjogJ3lhbmRleCNzZWFyY2gnXHJcbiAgICAgICAgfSksXHJcblxyXG4gICAgICAgIC8vINCh0L7Qt9C00LDRkdC8INC80LDQutC10YIg0YHQvtC00LXRgNC20LjQvNC+0LPQvi5cclxuICAgICAgICBNeUljb25Db250ZW50TGF5b3V0ID0geW1hcHMudGVtcGxhdGVMYXlvdXRGYWN0b3J5LmNyZWF0ZUNsYXNzKFxyXG4gICAgICAgICAgICAnPGRpdiBzdHlsZT1cImNvbG9yOiAjRkZGRkZGOyBmb250LXdlaWdodDogYm9sZDtcIj4kW3Byb3BlcnRpZXMuaWNvbkNvbnRlbnRdPC9kaXY+J1xyXG4gICAgICAgICksXHJcbiAgICAgIFxyXG4gICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhteU1hcC5nZXRDZW50ZXIoKSwge1xyXG4gICAgICAgICAgICBoaW50Q29udGVudDogJ9Ch0L7QsdGB0YLQstC10L3QvdGL0Lkg0LfQvdCw0YfQvtC6INC80LXRgtC60LgnLFxyXG4gICAgICAgICAgICBiYWxsb29uQ29udGVudDogJ9Ct0YLQviDQutGA0LDRgdC40LLQsNGPINC80LXRgtC60LAnXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cclxuICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxyXG4gICAgICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcuL2ltZy9pY29ucy9tYXAtbWFya2VyLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N10sXHJcbiAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMSwgLTFdXHJcbiAgICAgICAgICAgIH0pLFxyXG5cclxuICAgICAgICBteVBsYWNlbWFya1dpdGhDb250ZW50ID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTEuNjg5NDk3LCAzOS4xNzY4NjldLCB7XHJcbiAgICAgICAgICAgIGhpbnRDb250ZW50OiAn0KHQvtCx0YHRgtCy0LXQvdC90YvQuSDQt9C90LDRh9C+0Log0LzQtdGC0LrQuCDRgSDQutC+0L3RgtC10L3RgtC+0LwnLFxyXG4gICAgICAgICAgICBiYWxsb29uQ29udGVudDogJ9CQINGN0YLQsCDigJQg0L3QvtCy0L7Qs9C+0LTQvdGP0Y8nLFxyXG4gICAgICAgICAgICBpY29uQ29udGVudDogJzEyJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cclxuICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlV2l0aENvbnRlbnQnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcuL2ltZy9pY29ucy9tYXAtbWFya2VyLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N10sXHJcbiAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cclxuICAgICAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjQsIC0yNF0sXHJcbiAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INGB0LvQvtGPINGBINGB0L7QtNC10YDQttC40LzRi9C8INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDRgdC70L7RjyDRgSDQutCw0YDRgtC40L3QutC+0LkuXHJcbiAgICAgICAgICAgICAgICBpY29uQ29udGVudE9mZnNldDogWzE1LCAxNV0sXHJcbiAgICAgICAgICAgICAgICAvLyDQnNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXHJcbiAgICAgICAgICAgICAgICBpY29uQ29udGVudExheW91dDogTXlJY29uQ29udGVudExheW91dFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICBteU1hcC5nZW9PYmplY3RzXHJcbiAgICAgICAgLmFkZChteVBsYWNlbWFyaylcclxuICAgICAgICAuYWRkKG15UGxhY2VtYXJrV2l0aENvbnRlbnQpO1xyXG59KTtcclxuLy8g0LrQvtC90LXRhiDQutCw0YDRgtGLXHJcbiIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0LkpXHJcbmNvbnN0IGdldE11bnVTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnVfX2l0ZW1cIik7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0TXVudVNlbGVjdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZ2V0TXVudVNlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdldE11bnVTZWxlY3RvcnMubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKGogIT09IGkpXHJcbiAgICAgICAgICAgIGdldE11bnVTZWxlY3RvcnNbal0uY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TXVudVNlbGVjdG9yc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwibWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCz0L7RgNC40LfQvtC90YLQsNC70YzQvdGL0LkpIiwiLy8g0L3QsNGH0LDQu9C+INC80L7QsdC40LvRjNC90L7Qs9C+INC80LXQvdGOXHJcbmNvbnN0IGNsb3NlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VfX2xpbmtcIik7XHJcbmNvbnN0IG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlua1wiKTtcclxuY29uc3QgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIik7XHJcbmNvbnN0IG9wZW5MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYmxldHNcIik7XHJcblxyXG5vcGVuTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51LW9wZW5cIilcclxufSk7XHJcblxyXG5jbG9zZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtbWVudS1vcGVuXCIpXHJcbn0pO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaW5rLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBuYXZMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLW1lbnUtb3BlblwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LzQvtCx0LjQu9GM0L3QvtCz0L4g0LzQtdC90Y4iLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC+0YLQt9GL0LLQvtCyXHJcbmNvbnN0IGdldENvbW1lbnRzU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21tZW50X19saW5rXCIpO1xyXG5jb25zdCBzdWNjZXNzT3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoXCIgPGgzIGNsYXNzPVxcXCJjb21tZW50X190aXRsZS0tb3ZlcmxheVxcXCI+0KHRgtC40LLQtdC9INCh0L/QuNC70LHQtdGA0LM8L2gzPlwiICsgXHJcblwi0KEg0LTRgNGD0LPQvtC5INGB0YLQvtGA0L7QvdGLINC00LDQu9GM0L3QtdC50YjQtdC1INGA0LDQt9Cy0LjRgtC40LUg0YDQsNC30LvQuNGH0L3Ri9GFINGE0L7RgNC8XCIgKyBcclxuXCLQtNC10Y/RgtC10LvRjNC90L7RgdGC0Lgg0L3QsNC/0YDRj9C80YPRjiDQt9Cw0LLQuNGB0LjRgiDQvtGCINGB0LjRgdGC0LXQvNGLINC80LDRgdGI0YLQsNCx0L3QvtCz0L4g0LjQt9C80LXQvdC10L3QuNGPINGA0Y/QtNCwINC/0LDRgNCw0LzQtdGC0YDQvtCyLiDQotCw0LrQuNC8INC+0LHRgNCw0LfQvtC8LFwiICsgIFxyXG5cItC60YPRgNGBINC90LAg0YHQvtGG0LjQsNC70YzQvdC+LdC+0YDQuNC10L3RgtC40YDQvtCy0LDQvdC90YvQuSDQvdCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0L/RgNC+0LXQutGCINGB0L/QvtGB0L7QsdGB0YLQstGD0LXRgiDQv9C+0LLRi9GI0LXQvdC40Y4g0LDQutGC0YPQsNC70YzQvdC+0YHRgtC4XCIgKyBcclxuXCLQvdCw0L/RgNCw0LLQu9C10L3QuNC5INC/0YDQvtCz0YDQtdGB0YHQuNCy0L3QvtCz0L4g0YDQsNC30LLQuNGC0LjRjyFcIik7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdldENvbW1lbnRzU2VsZWN0b3JzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBnZXRDb21tZW50c1NlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN1Y2Nlc3NPdmVybGF5KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xyXG4gIFxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlUZW1wbGF0ZVwiKTtcclxuICAgIG92ZXJsYXlFbGVtZW50LmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICBcclxuICAgIGNvbnN0IGNsb3NlRWxlbWVudCA9IG92ZXJsYXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcbiAgICBjbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gb3ZlcmxheUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICBcclxuICAgIHJldHVybiBvdmVybGF5RWxlbWVudDtcclxuICB9XHJcbiAgXHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC+0YLQt9GL0LLQvtCyIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINGB0LvQsNC50LTQtdGAXHJcbmNvbnN0IGxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1sYXlvdXRfX2xlZnRcIik7XHJcbmNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItbGF5b3V0X19yaWdodFwiKTtcclxuY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fd3JhcFwiKTtcclxuXHJcbi8vINGI0LjRgNC40L3QsCDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbnZhciB3aWR0aCA9IDEwMDtcclxuLy8g0YLQtdC60YPRidC40Lkg0YHQtNCy0LjQsyDQstC70LXQstC+XHJcbnZhciBjb3VudCA9IDA7XHJcbi8vINCy0YHQtdCz0L4g0YHQu9Cw0LnQtNC+0LJcclxuY29uc3QgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyX19pdGVtXCIpO1xyXG5cclxucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0ubGVuZ3RoLCBpdGVtLmxlbmd0aCAtIDIpO1xyXG4gICAgaWYgKGNvdW50IDw9IGl0ZW0ubGVuZ3RoIC0gMikge1xyXG4gICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQgKyAnPT4nKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpZHRoICogY291bnQ7XHJcbiAgICAgICAgaXRlbXMuc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHBvc2l0aW9uICsgJyUnO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zLnN0eWxlLm1hcmdpbkxlZnQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChjb3VudCAhPT0gMCkge1xyXG4gICAgICAgIGNvdW50IC09IDE7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQgKyAnPD0nKTtcclxuICAgICAgICBwb3NpdGlvbiA9IHdpZHRoICogY291bnQ7XHJcbiAgICAgICAgaXRlbXMuc3R5bGUubWFyZ2luTGVmdCA9ICctJyArIHBvc2l0aW9uICsgJyUnO1xyXG4gICAgfVxyXG59KTtcclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDRgdC70LDQudC00LXRgCIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSlcclxuY29uc3QgZ2V0VGVhbVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLXRlYW1fX3dyYXBcIik7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0VGVhbVNlbGVjdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZ2V0VGVhbVNlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdldFRlYW1TZWxlY3RvcnMubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKGogIT09IGkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZ2V0VGVhbVNlbGVjdG9yc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWNjb3JkaW9uLXRlYW1fX3dyYXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0VGVhbVNlbGVjdG9yc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwiYWNjb3JkaW9uLXRlYW1fX3dyYXAtLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQstC10YDRgtC40LrQsNC70YzQvdGL0LkpIl19
