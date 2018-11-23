// начало формы
const getForm = document.querySelector(".form-order");
const getButton = document.querySelector(".btn--submit");


const validateField = argField => {
    return argField.checkValidity();
};



const validateForm = argForm => {
};



// конец формы
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
// начало кода меню (скрытое)
var closeLink = document.querySelector(".close__link");
// console.log(closeLink);

var mobileMenu = document.querySelector(".mobile-menu");
// console.log(mobileMenu);

var openLink = document.querySelector(".menu-tablets");
// console.log(openLink);

var closeLinkFromNav = document.querySelectorAll(".nav__item");
// console.log(closeLinkFromNav);

openLink.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.add("mobile-menu-open");
});

closeLink.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.remove("mobile-menu-open");
});

for (let i = 0; i < closeLinkFromNav.length; i += 1) {
    closeLinkFromNav[i].addEventListener("click", function () {
        mobileMenu.classList.remove("mobile-menu-open");
    });
}
// конец кода меню (скрытое)
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
// Задание 1:
function filter(input, than) {

    // напишите здесь код, который возвращает новый массив
    // в котором содержатся те элементы input, которые больше than

    const result = [];

    input.forEach(elem => elem > than ? result.push(elem) : null);
    return result;
}

var array = [12, 100, 34, 65, 10];
var result = filter(array, 60);

// console.log(result); // [100, 65];

result = filter(array, 20);
// console.log(result); // [100, 34, 65];

// console.log('----------------------------------------');
// Задание 2:

// Возьмите код предыдущего задания
// Модифицируйте код функции filter так, чтобы функция выбрасывала исключения при следующих условиях:
// В input передан пустой массив
// Хотя бы один из элементов input не является числом
// Хотя бы один из элементов input является отрицательным числом


function filter2(input, than) {
    const result = [];

    if (input.length === 0) {
        throw new Error("Пустой массив");
    } else if (input.some(elem => elem < 0)) {
        throw new Error("Хотя бы один из элементов input является отрицательным числом");
    } else if (!input.every(elem => Number.isFinite(elem))) {
        throw new Error("Хотя бы один из элементов input не является числом");
    }

    input.forEach(elem => elem > than ? result.push(elem) : null);
    return result;
}

// var array = [1, 2, 4, 6, 61];
var array = [1, 2, 4, 6, 'fff', 61];

try {

    var result = filter2(array, 60);
    // console.log(result); 
}
catch (e) {
    // console.log(e.message);

}

// for (let i = 1; i < 6; i += 1) {
//     let out = [];
//     for (let j = 0; j < i; j += 1) {
//         out.push(i);
//     }
// console.log(out.join(''));
// }



// arr.filter(elem => {
//     const result = (arg) => console.log(arg);
//     // return elem === 3 ? result('есть') : null;
// });

// const arr = [0, 1, 2, 6, 4];
// const out = arr.some(elem => elem === 3) ? "есть" : "нет";
// // console.log(out);

// for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === 3) {
//          console.log('есть');
//          return;  
//     }
// console.log('нет');
// return;
// }


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJtZW51LmpzIiwibW9kYWwuanMiLCJuZXcuanMiLCJzbGlkZXIuanMiLCJ0YXNrLmpzIiwidGVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINC90LDRh9Cw0LvQviDRhNC+0YDQvNGLXHJcbmNvbnN0IGdldEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tb3JkZXJcIik7XHJcbmNvbnN0IGdldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLS1zdWJtaXRcIik7XHJcblxyXG5cclxuY29uc3QgdmFsaWRhdGVGaWVsZCA9IGFyZ0ZpZWxkID0+IHtcclxuICAgIHJldHVybiBhcmdGaWVsZC5jaGVja1ZhbGlkaXR5KCk7XHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IHZhbGlkYXRlRm9ybSA9IGFyZ0Zvcm0gPT4ge1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyDQutC+0L3QtdGGINGE0L7RgNC80YsiLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5KVxyXG5jb25zdCBnZXRNdW51U2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51X19pdGVtXCIpO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdldE11bnVTZWxlY3RvcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGdldE11bnVTZWxlY3RvcnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnZXRNdW51U2VsZWN0b3JzLmxlbmd0aDsgaiArPSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChqICE9PSBpKVxyXG4gICAgICAgICAgICBnZXRNdW51U2VsZWN0b3JzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE11bnVTZWxlY3RvcnNbaV0uY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnVfX2l0ZW0tLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3Ri9C5KSIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L7RgtC30YvQstC+0LJcclxuY29uc3QgZ2V0Q29tbWVudHNTZWxlY3RvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbW1lbnRfX2xpbmtcIik7XHJcbmNvbnN0IHN1Y2Nlc3NPdmVybGF5ID0gY3JlYXRlT3ZlcmxheShcIiA8aDMgY2xhc3M9XFxcImNvbW1lbnRfX3RpdGxlLS1vdmVybGF5XFxcIj7QodGC0LjQstC10L0g0KHQv9C40LvQsdC10YDQszwvaDM+XCIgKyBcclxuXCLQoSDQtNGA0YPQs9C+0Lkg0YHRgtC+0YDQvtC90Ysg0LTQsNC70YzQvdC10LnRiNC10LUg0YDQsNC30LLQuNGC0LjQtSDRgNCw0LfQu9C40YfQvdGL0YUg0YTQvtGA0LxcIiArIFxyXG5cItC00LXRj9GC0LXQu9GM0L3QvtGB0YLQuCDQvdCw0L/RgNGP0LzRg9GOINC30LDQstC40YHQuNGCINC+0YIg0YHQuNGB0YLQtdC80Ysg0LzQsNGB0YjRgtCw0LHQvdC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8g0YDRj9C00LAg0L/QsNGA0LDQvNC10YLRgNC+0LIuINCi0LDQutC40Lwg0L7QsdGA0LDQt9C+0LwsXCIgKyAgXHJcblwi0LrRg9GA0YEg0L3QsCDRgdC+0YbQuNCw0LvRjNC90L4t0L7RgNC40LXQvdGC0LjRgNC+0LLQsNC90L3Ri9C5INC90LDRhtC40L7QvdCw0LvRjNC90YvQuSDQv9GA0L7QtdC60YIg0YHQv9C+0YHQvtCx0YHRgtCy0YPQtdGCINC/0L7QstGL0YjQtdC90LjRjiDQsNC60YLRg9Cw0LvRjNC90L7RgdGC0LhcIiArIFxyXG5cItC90LDQv9GA0LDQstC70LXQvdC40Lkg0L/RgNC+0LPRgNC10YHRgdC40LLQvdC+0LPQviDRgNCw0LfQstC40YLQuNGPIVwiKTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0Q29tbWVudHNTZWxlY3RvcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGdldENvbW1lbnRzU2VsZWN0b3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3VjY2Vzc092ZXJsYXkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkoY29udGVudCkge1xyXG4gICAgY29uc3Qgb3ZlcmxheUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb3ZlcmxheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgXHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVRlbXBsYXRlXCIpO1xyXG4gICAgb3ZlcmxheUVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGUuaW5uZXJIVE1MO1xyXG4gIFxyXG4gICAgY29uc3QgY2xvc2VFbGVtZW50ID0gb3ZlcmxheUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuICAgIGNsb3NlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXlFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgY29uc3QgY29udGVudEVsZW1lbnQgPSBvdmVybGF5RWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XHJcbiAgICBjb250ZW50RWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50O1xyXG4gIFxyXG4gICAgcmV0dXJuIG92ZXJsYXlFbGVtZW50O1xyXG4gIH1cclxuICBcclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQvNC+0LTQsNC70YzQvdC+0LUg0L7QutC90L4g0L7RgtC30YvQstC+0LIiLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LzQtdC90Y4gKNGB0LrRgNGL0YLQvtC1KVxyXG52YXIgY2xvc2VMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZV9fbGlua1wiKTtcclxuLy8gY29uc29sZS5sb2coY2xvc2VMaW5rKTtcclxuXHJcbnZhciBtb2JpbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudVwiKTtcclxuLy8gY29uc29sZS5sb2cobW9iaWxlTWVudSk7XHJcblxyXG52YXIgb3BlbkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGFibGV0c1wiKTtcclxuLy8gY29uc29sZS5sb2cob3BlbkxpbmspO1xyXG5cclxudmFyIGNsb3NlTGlua0Zyb21OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9faXRlbVwiKTtcclxuLy8gY29uc29sZS5sb2coY2xvc2VMaW5rRnJvbU5hdik7XHJcblxyXG5vcGVuTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW9iaWxlTWVudS5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnUtb3BlblwiKTtcclxufSk7XHJcblxyXG5jbG9zZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1tZW51LW9wZW5cIik7XHJcbn0pO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBjbG9zZUxpbmtGcm9tTmF2Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBjbG9zZUxpbmtGcm9tTmF2W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9iaWxlTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlLW1lbnUtb3BlblwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LzQtdC90Y4gKNGB0LrRgNGL0YLQvtC1KSIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDRgdC70LDQudC00LXRgFxyXG5jb25zdCBsZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItbGF5b3V0X19sZWZ0XCIpO1xyXG5jb25zdCByaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWxheW91dF9fcmlnaHRcIik7XHJcbmNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJfX3dyYXBcIik7XHJcblxyXG4vLyDRiNC40YDQuNC90LAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG52YXIgd2lkdGggPSAxMDA7XHJcbi8vINGC0LXQutGD0YnQuNC5INGB0LTQstC40LMg0LLQu9C10LLQvlxyXG52YXIgY291bnQgPSAwO1xyXG4vLyDQstGB0LXQs9C+INGB0LvQsNC50LTQvtCyXHJcbmNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlcl9faXRlbVwiKTtcclxuXHJcbnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpdGVtLmxlbmd0aCwgaXRlbS5sZW5ndGggLSAyKTtcclxuICAgIGlmIChjb3VudCA8PSBpdGVtLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50ICsgJz0+Jyk7XHJcbiAgICAgICAgcG9zaXRpb24gPSB3aWR0aCAqIGNvdW50O1xyXG4gICAgICAgIGl0ZW1zLnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyBwb3NpdGlvbiArICclJztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtcy5zdHlsZS5tYXJnaW5MZWZ0KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoY291bnQgIT09IDApIHtcclxuICAgICAgICBjb3VudCAtPSAxO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50ICsgJzw9Jyk7XHJcbiAgICAgICAgcG9zaXRpb24gPSB3aWR0aCAqIGNvdW50O1xyXG4gICAgICAgIGl0ZW1zLnN0eWxlLm1hcmdpbkxlZnQgPSAnLScgKyBwb3NpdGlvbiArICclJztcclxuICAgIH1cclxufSk7XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0YHQu9Cw0LnQtNC10YAiLCIvLyDQl9Cw0LTQsNC90LjQtSAxOlxyXG5mdW5jdGlvbiBmaWx0ZXIoaW5wdXQsIHRoYW4pIHtcclxuXHJcbiAgICAvLyDQvdCw0L/QuNGI0LjRgtC1INC30LTQtdGB0Ywg0LrQvtC0LCDQutC+0YLQvtGA0YvQuSDQstC+0LfQstGA0LDRidCw0LXRgiDQvdC+0LLRi9C5INC80LDRgdGB0LjQslxyXG4gICAgLy8g0LIg0LrQvtGC0L7RgNC+0Lwg0YHQvtC00LXRgNC20LDRgtGB0Y8g0YLQtSDRjdC70LXQvNC10L3RgtGLIGlucHV0LCDQutC+0YLQvtGA0YvQtSDQsdC+0LvRjNGI0LUgdGhhblxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIGlucHV0LmZvckVhY2goZWxlbSA9PiBlbGVtID4gdGhhbiA/IHJlc3VsdC5wdXNoKGVsZW0pIDogbnVsbCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG52YXIgYXJyYXkgPSBbMTIsIDEwMCwgMzQsIDY1LCAxMF07XHJcbnZhciByZXN1bHQgPSBmaWx0ZXIoYXJyYXksIDYwKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFsxMDAsIDY1XTtcclxuXHJcbnJlc3VsdCA9IGZpbHRlcihhcnJheSwgMjApO1xyXG4vLyBjb25zb2xlLmxvZyhyZXN1bHQpOyAvLyBbMTAwLCAzNCwgNjVdO1xyXG5cclxuLy8gY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuLy8g0JfQsNC00LDQvdC40LUgMjpcclxuXHJcbi8vINCS0L7Qt9GM0LzQuNGC0LUg0LrQvtC0INC/0YDQtdC00YvQtNGD0YnQtdCz0L4g0LfQsNC00LDQvdC40Y9cclxuLy8g0JzQvtC00LjRhNC40YbQuNGA0YPQudGC0LUg0LrQvtC0INGE0YPQvdC60YbQuNC4IGZpbHRlciDRgtCw0LosINGH0YLQvtCx0Ysg0YTRg9C90LrRhtC40Y8g0LLRi9Cx0YDQsNGB0YvQstCw0LvQsCDQuNGB0LrQu9GO0YfQtdC90LjRjyDQv9GA0Lgg0YHQu9C10LTRg9GO0YnQuNGFINGD0YHQu9C+0LLQuNGP0YU6XHJcbi8vINCSIGlucHV0INC/0LXRgNC10LTQsNC9INC/0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcclxuLy8g0KXQvtGC0Y8g0LHRiyDQvtC00LjQvSDQuNC3INGN0LvQtdC80LXQvdGC0L7QsiBpbnB1dCDQvdC1INGP0LLQu9GP0LXRgtGB0Y8g0YfQuNGB0LvQvtC8XHJcbi8vINCl0L7RgtGPINCx0Ysg0L7QtNC40L0g0LjQtyDRjdC70LXQvNC10L3RgtC+0LIgaW5wdXQg0Y/QstC70Y/QtdGC0YHRjyDQvtGC0YDQuNGG0LDRgtC10LvRjNC90YvQvCDRh9C40YHQu9C+0LxcclxuXHJcblxyXG5mdW5jdGlvbiBmaWx0ZXIyKGlucHV0LCB0aGFuKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0J/Rg9GB0YLQvtC5INC80LDRgdGB0LjQslwiKTtcclxuICAgIH0gZWxzZSBpZiAoaW5wdXQuc29tZShlbGVtID0+IGVsZW0gPCAwKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcItCl0L7RgtGPINCx0Ysg0L7QtNC40L0g0LjQtyDRjdC70LXQvNC10L3RgtC+0LIgaW5wdXQg0Y/QstC70Y/QtdGC0YHRjyDQvtGC0YDQuNGG0LDRgtC10LvRjNC90YvQvCDRh9C40YHQu9C+0LxcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFpbnB1dC5ldmVyeShlbGVtID0+IE51bWJlci5pc0Zpbml0ZShlbGVtKSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQpdC+0YLRjyDQsdGLINC+0LTQuNC9INC40Lcg0Y3Qu9C10LzQtdC90YLQvtCyIGlucHV0INC90LUg0Y/QstC70Y/QtdGC0YHRjyDRh9C40YHQu9C+0LxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQuZm9yRWFjaChlbGVtID0+IGVsZW0gPiB0aGFuID8gcmVzdWx0LnB1c2goZWxlbSkgOiBudWxsKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIHZhciBhcnJheSA9IFsxLCAyLCA0LCA2LCA2MV07XHJcbnZhciBhcnJheSA9IFsxLCAyLCA0LCA2LCAnZmZmJywgNjFdO1xyXG5cclxudHJ5IHtcclxuXHJcbiAgICB2YXIgcmVzdWx0ID0gZmlsdGVyMihhcnJheSwgNjApO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzdWx0KTsgXHJcbn1cclxuY2F0Y2ggKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUubWVzc2FnZSk7XHJcblxyXG59XHJcblxyXG4vLyBmb3IgKGxldCBpID0gMTsgaSA8IDY7IGkgKz0gMSkge1xyXG4vLyAgICAgbGV0IG91dCA9IFtdO1xyXG4vLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpOyBqICs9IDEpIHtcclxuLy8gICAgICAgICBvdXQucHVzaChpKTtcclxuLy8gICAgIH1cclxuLy8gY29uc29sZS5sb2cob3V0LmpvaW4oJycpKTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBhcnIuZmlsdGVyKGVsZW0gPT4ge1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gKGFyZykgPT4gY29uc29sZS5sb2coYXJnKTtcclxuLy8gICAgIC8vIHJldHVybiBlbGVtID09PSAzID8gcmVzdWx0KCfQtdGB0YLRjCcpIDogbnVsbDtcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBhcnIgPSBbMCwgMSwgMiwgNiwgNF07XHJcbi8vIGNvbnN0IG91dCA9IGFyci5zb21lKGVsZW0gPT4gZWxlbSA9PT0gMykgPyBcItC10YHRgtGMXCIgOiBcItC90LXRglwiO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhvdXQpO1xyXG5cclxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcclxuLy8gICAgIGlmIChhcnJbaV0gPT09IDMpIHtcclxuLy8gICAgICAgICAgY29uc29sZS5sb2coJ9C10YHRgtGMJyk7XHJcbi8vICAgICAgICAgIHJldHVybjsgIFxyXG4vLyAgICAgfVxyXG4vLyBjb25zb2xlLmxvZygn0L3QtdGCJyk7XHJcbi8vIHJldHVybjtcclxuLy8gfVxyXG5cclxuIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LLQtdGA0YLQuNC60LDQu9GM0L3Ri9C5KVxyXG5jb25zdCBnZXRUZWFtU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY2NvcmRpb24tdGVhbV9fd3JhcFwiKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRUZWFtU2VsZWN0b3JzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBnZXRUZWFtU2VsZWN0b3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V0VGVhbVNlbGVjdG9ycy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoaiAhPT0gaSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBnZXRUZWFtU2VsZWN0b3JzW2pdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY2NvcmRpb24tdGVhbV9fd3JhcC0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRUZWFtU2VsZWN0b3JzW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJhY2NvcmRpb24tdGVhbV9fd3JhcC0tYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8g0LrQvtC90LXRhiDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSkiXX0=
