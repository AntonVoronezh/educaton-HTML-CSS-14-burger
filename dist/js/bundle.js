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
	//options here
    autoScrolling:true,
    menu: '#menu',
    anchors:['section-first', 'section-we', 'section-burgers', 
    'section-team', 'section-menu', 'section-reviews', 'section-how', 
    'section-form', 'section-contacts'],
    // scrollHorizontally: true
});
// $('#getActiveSection').click(function(){
//     console.log(fullpage_api.getActiveSection());
//  });

var pagescrollLink = document.querySelectorAll(".pagescroll__link");

for (let i = 0; i < pagescrollLink.length; i += 1) {
    pagescrollLink[i].addEventListener("click", function () {
// console.log(i);
//
// for (let j = 0; j < pagescrollLink.length; j += 1) {
//     if (j !== i)
//     pagescrollLink[j].classList.remove("pagescroll__link--active");
// }
//
console.log(fullpage_api.getActiveSection());
// pagescrollLink[i].classList.toggle("pagescroll__link--active");
    });
}
// конец fullpage
// // начало карты
// ymaps.ready(init);
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

// document.addEventListener("DOMContentLoaded", ready());
// // конец карты

// function init (ymaps) {
//     var myMap = new ymaps.Map("map", {
//         center: [55.87, 37.66],
//         zoom: 10
//     });
// }
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
var closeLink = document.querySelector(".close__link");
var navLink = document.querySelectorAll(".nav__link");
var mobileMenu = document.querySelector(".mobile-menu");
var openLink = document.querySelector(".menu-tablets");

openLink.addEventListener("click", function (e) {
    e.preventDefault();
    mobileMenu.classList.add("mobile-menu-open")
});





// 
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJmdWxscGFnZS5qcyIsIm1hcC5qcyIsIm1lbnUuanMiLCJtb2JpbGUuanMiLCJtb2RhbC5qcyIsInNsaWRlci5qcyIsInRlYW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0L3QsNGH0LDQu9C+INGE0L7RgNC80YtcclxuY29uc3QgZ2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1vcmRlclwiKTtcclxuY29uc3QgZ2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tLXN1Ym1pdFwiKTtcclxuY29uc3QgZ2V0RXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xyXG52YXIgc2VydmVyUmVzcG9uc2U7XHJcblxyXG5jb25zdCB2YWxpZGF0ZUZpZWxkID0gYXJnRmllbGQgPT4ge1xyXG4gICAgcmV0dXJuIGFyZ0ZpZWxkLmNoZWNrVmFsaWRpdHkoKTtcclxuICAgIC8vIGlmKCFhcmdGaWVsZC5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgIC8vICAgICBhcmdGaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gYXJnRmllbGQudmFsaWRhdGlvbk1lc3NhZ2U7XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICBhcmdGaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vIH1cclxufTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlRm9ybSA9IGFyZ0Zvcm0gPT4ge1xyXG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ0Zvcm0uZWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoYXJnRm9ybS5lbGVtZW50c1tpXSkpIHtcclxuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn07XHJcblxyXG5nZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRm9ybShnZXRGb3JtKSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcIm5hbWVcIiwgZ2V0Rm9ybS5lbGVtZW50cy5uYW1lLnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwicGhvbmVcIiwgZ2V0Rm9ybS5lbGVtZW50cy5waG9uZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNvbW1lbnRcIiwgZ2V0Rm9ybS5lbGVtZW50cy50ZXh0LnZhbHVlKTtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwidG9cIiwgXCJhYWFhYWFAYWFhYWFhYS5hYVwiKTtcclxuXHJcbiAgICAgICAgY29uc3QganNvbiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICBqc29uLm9wZW4oJ1BPU1QnLCAnaHR0cHM6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL3NlbmRtYWlsJyk7XHJcbiAgICAgICAganNvbi5zZW5kKGZvcm1EYXRhKTtcclxuXHJcbiAgICAgICAganNvbi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoanNvbi5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ID0gSlNPTi5wYXJzZShqc29uLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG91dC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNlcnZlclJlc3BvbnNlID0gb3V0Lm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWNjZXNzT3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoc2VydmVyUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdWNjZXNzT3ZlcmxheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbi8vINC60L7QvdC10YYg0YTQvtGA0LzRiyIsIi8vINC90LDRh9Cw0LvQviBmdWxscGFnZVxyXG5uZXcgZnVsbHBhZ2UoJyNmdWxscGFnZScsIHtcclxuXHQvL29wdGlvbnMgaGVyZVxyXG4gICAgYXV0b1Njcm9sbGluZzp0cnVlLFxyXG4gICAgbWVudTogJyNtZW51JyxcclxuICAgIGFuY2hvcnM6WydzZWN0aW9uLWZpcnN0JywgJ3NlY3Rpb24td2UnLCAnc2VjdGlvbi1idXJnZXJzJywgXHJcbiAgICAnc2VjdGlvbi10ZWFtJywgJ3NlY3Rpb24tbWVudScsICdzZWN0aW9uLXJldmlld3MnLCAnc2VjdGlvbi1ob3cnLCBcclxuICAgICdzZWN0aW9uLWZvcm0nLCAnc2VjdGlvbi1jb250YWN0cyddLFxyXG4gICAgLy8gc2Nyb2xsSG9yaXpvbnRhbGx5OiB0cnVlXHJcbn0pO1xyXG4vLyAkKCcjZ2V0QWN0aXZlU2VjdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbi8vICAgICBjb25zb2xlLmxvZyhmdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2VjdGlvbigpKTtcclxuLy8gIH0pO1xyXG5cclxudmFyIHBhZ2VzY3JvbGxMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlc2Nyb2xsX19saW5rXCIpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlc2Nyb2xsTGluay5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgcGFnZXNjcm9sbExpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gY29uc29sZS5sb2coaSk7XHJcbi8vXHJcbi8vIGZvciAobGV0IGogPSAwOyBqIDwgcGFnZXNjcm9sbExpbmsubGVuZ3RoOyBqICs9IDEpIHtcclxuLy8gICAgIGlmIChqICE9PSBpKVxyXG4vLyAgICAgcGFnZXNjcm9sbExpbmtbal0uY2xhc3NMaXN0LnJlbW92ZShcInBhZ2VzY3JvbGxfX2xpbmstLWFjdGl2ZVwiKTtcclxuLy8gfVxyXG4vL1xyXG5jb25zb2xlLmxvZyhmdWxscGFnZV9hcGkuZ2V0QWN0aXZlU2VjdGlvbigpKTtcclxuLy8gcGFnZXNjcm9sbExpbmtbaV0uY2xhc3NMaXN0LnRvZ2dsZShcInBhZ2VzY3JvbGxfX2xpbmstLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYgZnVsbHBhZ2UiLCIvLyAvLyDQvdCw0YfQsNC70L4g0LrQsNGA0YLRi1xyXG4vLyB5bWFwcy5yZWFkeShpbml0KTtcclxueW1hcHMucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xyXG4gICAgICAgIGNlbnRlcjogWzUxLjY4MDQyNywgMzkuMTc2NzY5XSxcclxuICAgICAgICB6b29tOiAxNFxyXG4gICAgfSwge1xyXG4gICAgICAgICAgICBzZWFyY2hDb250cm9sUHJvdmlkZXI6ICd5YW5kZXgjc2VhcmNoJ1xyXG4gICAgICAgIH0pLFxyXG5cclxuICAgICAgICAvLyDQodC+0LfQtNCw0ZHQvCDQvNCw0LrQtdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4uXHJcbiAgICAgICAgTXlJY29uQ29udGVudExheW91dCA9IHltYXBzLnRlbXBsYXRlTGF5b3V0RmFjdG9yeS5jcmVhdGVDbGFzcyhcclxuICAgICAgICAgICAgJzxkaXYgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JFtwcm9wZXJ0aWVzLmljb25Db250ZW50XTwvZGl2PidcclxuICAgICAgICApLFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsobXlNYXAuZ2V0Q2VudGVyKCksIHtcclxuICAgICAgICAgICAgaGludENvbnRlbnQ6ICfQodC+0LHRgdGC0LLQtdC90L3Ri9C5INC30L3QsNGH0L7QuiDQvNC10YLQutC4JyxcclxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQrdGC0L4g0LrRgNCw0YHQuNCy0LDRjyDQvNC10YLQutCwJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXHJcbiAgICAgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cclxuICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi9pbWcvaWNvbnMvbWFwLW1hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0NiwgNTddLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTEsIC0xXVxyXG4gICAgICAgICAgICB9KSxcclxuXHJcbiAgICAgICAgbXlQbGFjZW1hcmtXaXRoQ29udGVudCA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUxLjY4OTQ5NywgMzkuMTc2ODY5XSwge1xyXG4gICAgICAgICAgICBoaW50Q29udGVudDogJ9Ch0L7QsdGB0YLQstC10L3QvdGL0Lkg0LfQvdCw0YfQvtC6INC80LXRgtC60Lgg0YEg0LrQvtC90YLQtdC90YLQvtC8JyxcclxuICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6ICfQkCDRjdGC0LAg4oCUINC90L7QstC+0LPQvtC00L3Rj9GPJyxcclxuICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICcxMidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAvLyDQntC/0YbQuNC4LlxyXG4gICAgICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXHJcbiAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZVdpdGhDb250ZW50JyxcclxuICAgICAgICAgICAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiAnLi9pbWcvaWNvbnMvbWFwLW1hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFs0NiwgNTddLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XHJcbiAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI0LCAtMjRdLFxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDRgdC70L7RjyDRgSDRgdC+0LTQtdGA0LbQuNC80YvQvCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0YHQu9C+0Y8g0YEg0LrQsNGA0YLQuNC90LrQvtC5LlxyXG4gICAgICAgICAgICAgICAgaWNvbkNvbnRlbnRPZmZzZXQ6IFsxNSwgMTVdLFxyXG4gICAgICAgICAgICAgICAgLy8g0JzQsNC60LXRgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+LlxyXG4gICAgICAgICAgICAgICAgaWNvbkNvbnRlbnRMYXlvdXQ6IE15SWNvbkNvbnRlbnRMYXlvdXRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAgIC5hZGQobXlQbGFjZW1hcmspXHJcbiAgICAgICAgLmFkZChteVBsYWNlbWFya1dpdGhDb250ZW50KTtcclxufSk7XHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZWFkeSgpKTtcclxuLy8gLy8g0LrQvtC90LXRhiDQutCw0YDRgtGLXHJcblxyXG4vLyBmdW5jdGlvbiBpbml0ICh5bWFwcykge1xyXG4vLyAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbi8vICAgICAgICAgY2VudGVyOiBbNTUuODcsIDM3LjY2XSxcclxuLy8gICAgICAgICB6b29tOiAxMFxyXG4vLyAgICAgfSk7XHJcbi8vIH0iLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5KVxyXG5jb25zdCBnZXRNdW51U2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51X19pdGVtXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdldE11bnVTZWxlY3RvcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGdldE11bnVTZWxlY3RvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnZXRNdW51U2VsZWN0b3JzLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChqICE9PSBpKVxyXG4gICAgICAgICAgICBnZXRNdW51U2VsZWN0b3JzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE11bnVTZWxlY3RvcnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5KSIsIi8vINC90LDRh9Cw0LvQviDQvNC+0LHQuNC70YzQvdC+0LPQviDQvNC10L3RjlxyXG52YXIgY2xvc2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZV9fbGlua1wiKTtcclxudmFyIG5hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fbGlua1wiKTtcclxudmFyIG1vYmlsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51XCIpO1xyXG52YXIgb3BlbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGFibGV0c1wiKTtcclxuXHJcbm9wZW5MaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnUtb3BlblwiKVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBcclxuLy8g0LrQvtC90LXRhiDQvNC+0LHQuNC70YzQvdC+0LPQviDQvNC10L3RjiIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L7RgtC30YvQstC+0LJcclxuY29uc3QgZ2V0Q29tbWVudHNTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbW1lbnRfX2xpbmtcIik7XHJcbmNvbnN0IHN1Y2Nlc3NPdmVybGF5ID0gY3JlYXRlT3ZlcmxheShcIiA8aDMgY2xhc3M9XFxcImNvbW1lbnRfX3RpdGxlLS1vdmVybGF5XFxcIj7QodGC0LjQstC10L0g0KHQv9C40LvQsdC10YDQszwvaDM+XCIgKyBcclxuXCLQoSDQtNGA0YPQs9C+0Lkg0YHRgtC+0YDQvtC90Ysg0LTQsNC70YzQvdC10LnRiNC10LUg0YDQsNC30LLQuNGC0LjQtSDRgNCw0LfQu9C40YfQvdGL0YUg0YTQvtGA0LxcIiArIFxyXG5cItC00LXRj9GC0LXQu9GM0L3QvtGB0YLQuCDQvdCw0L/RgNGP0LzRg9GOINC30LDQstC40YHQuNGCINC+0YIg0YHQuNGB0YLQtdC80Ysg0LzQsNGB0YjRgtCw0LHQvdC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8g0YDRj9C00LAg0L/QsNGA0LDQvNC10YLRgNC+0LIuINCi0LDQutC40Lwg0L7QsdGA0LDQt9C+0LwsXCIgKyAgXHJcblwi0LrRg9GA0YEg0L3QsCDRgdC+0YbQuNCw0LvRjNC90L4t0L7RgNC40LXQvdGC0LjRgNC+0LLQsNC90L3Ri9C5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQv9GA0L7QtdC60YIg0YHQv9C+0YHQvtCx0YHRgtCy0YPQtdGCINC/0L7QstGL0YjQtdC90LjRjiDQsNC60YLRg9Cw0LvRjNC90L7RgdGC0LhcIiArIFxyXG5cItC90LDQv9GA0LDQstC70LXQvdC40Lkg0L/RgNC+0LPRgNC10YHRgdC40LLQvdC+0LPQviDRgNCw0LfQstC40YLQuNGPIVwiKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0Q29tbWVudHNTZWxlY3RvcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGdldENvbW1lbnRzU2VsZWN0b3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3VjY2Vzc092ZXJsYXkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoY29udGVudCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVRlbXBsYXRlXCIpO1xyXG4gICAgb3ZlcmxheUVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gIFxyXG4gICAgY29uc3QgY2xvc2VFbGVtZW50ID0gb3ZlcmxheUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuICAgIGNsb3NlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXlFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBvdmVybGF5RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50RWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIFxyXG4gICAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xyXG4gIH1cclxuICBcclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L7RgtC30YvQstC+0LIiLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0YHQu9Cw0LnQtNC10YBcclxuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWxheW91dF9fbGVmdFwiKTtcclxuY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1sYXlvdXRfX3JpZ2h0XCIpO1xyXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX193cmFwXCIpO1xyXG5cclxuLy8g0YjQuNGA0LjQvdCwINC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxudmFyIHdpZHRoID0gMTAwO1xyXG4vLyDRgtC10LrRg9GJ0LjQuSDRgdC00LLQuNCzINCy0LvQtdCy0L5cclxudmFyIGNvdW50ID0gMDtcclxuLy8g0LLRgdC10LPQviDRgdC70LDQudC00L7QslxyXG5jb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXJfX2l0ZW1cIik7XHJcblxyXG5yaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXRlbS5sZW5ndGgsIGl0ZW0ubGVuZ3RoIC0gMik7XHJcbiAgICBpZiAoY291bnQgPD0gaXRlbS5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudCArICc9PicpO1xyXG4gICAgICAgIHBvc2l0aW9uID0gd2lkdGggKiBjb3VudDtcclxuICAgICAgICBpdGVtcy5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgcG9zaXRpb24gKyAnJSc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbXMuc3R5bGUubWFyZ2luTGVmdCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGNvdW50ICE9PSAwKSB7XHJcbiAgICAgICAgY291bnQgLT0gMTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudCArICc8PScpO1xyXG4gICAgICAgIHBvc2l0aW9uID0gd2lkdGggKiBjb3VudDtcclxuICAgICAgICBpdGVtcy5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgcG9zaXRpb24gKyAnJSc7XHJcbiAgICB9XHJcbn0pO1xyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINGB0LvQsNC50LTQtdGAIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5KVxyXG5jb25zdCBnZXRUZWFtU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tdGVhbV9fd3JhcFwiKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRUZWFtU2VsZWN0b3JzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBnZXRUZWFtU2VsZWN0b3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V0VGVhbVNlbGVjdG9ycy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoaiAhPT0gaSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBnZXRUZWFtU2VsZWN0b3JzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY2NvcmRpb24tdGVhbV9fd3JhcC0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRUZWFtU2VsZWN0b3JzW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJhY2NvcmRpb24tdGVhbV9fd3JhcC0tYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSkiXX0=
