// начало формы
const getForm = document.querySelector(".form-order");
const getButton = document.querySelector(".btn--submit");


const validateField = argField => {
    return argField.checkValidity();
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
    for (let i = 0; i < getForm.elements.length; i += 1) {
        // console.log(getForm.elements[i].name);
        let thisName = getForm.elements[i].name;
        // console.log(thisName);

        if (thisName === 'name') {
            // console.log(getForm.elements.thisName);
        }


    }

    if (validateForm(getForm)) {
        const data = {
            name: getForm.elements.name.value,
            phone: getForm.elements.phone.value,
            comment: getForm.elements.text.value,
            to: "aaaaaa@aaaaaaa.aa"
        };

        var formData = new FormData();
formData.append("name", getForm.elements.name.value);
formData.append("phone", getForm.elements.phone.value);
formData.append("comment", getForm.elements.text.value);
formData.append("to", "aaaaaa@aaaaaaa.aa");
        // console.log(formData);

        const json = new XMLHttpRequest();

        


    }
});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiLCJtZW51LmpzIiwibW9kYWwuanMiLCJuZXcuanMiLCJzbGlkZXIuanMiLCJ0YXNrLmpzIiwidGVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0L3QsNGH0LDQu9C+INGE0L7RgNC80YtcclxuY29uc3QgZ2V0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1vcmRlclwiKTtcclxuY29uc3QgZ2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tLXN1Ym1pdFwiKTtcclxuXHJcblxyXG5jb25zdCB2YWxpZGF0ZUZpZWxkID0gYXJnRmllbGQgPT4ge1xyXG4gICAgcmV0dXJuIGFyZ0ZpZWxkLmNoZWNrVmFsaWRpdHkoKTtcclxufTtcclxuXHJcblxyXG5cclxuY29uc3QgdmFsaWRhdGVGb3JtID0gYXJnRm9ybSA9PiB7XHJcbiAgICBsZXQgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJnRm9ybS5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIGlmICghdmFsaWRhdGVGaWVsZChhcmdGb3JtLmVsZW1lbnRzW2ldKSkge1xyXG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxufTtcclxuXHJcbmdldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V0Rm9ybS5lbGVtZW50cy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdldEZvcm0uZWxlbWVudHNbaV0ubmFtZSk7XHJcbiAgICAgICAgbGV0IHRoaXNOYW1lID0gZ2V0Rm9ybS5lbGVtZW50c1tpXS5uYW1lO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXNOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXNOYW1lID09PSAnbmFtZScpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZ2V0Rm9ybS5lbGVtZW50cy50aGlzTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbGlkYXRlRm9ybShnZXRGb3JtKSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IGdldEZvcm0uZWxlbWVudHMubmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgcGhvbmU6IGdldEZvcm0uZWxlbWVudHMucGhvbmUudmFsdWUsXHJcbiAgICAgICAgICAgIGNvbW1lbnQ6IGdldEZvcm0uZWxlbWVudHMudGV4dC52YWx1ZSxcclxuICAgICAgICAgICAgdG86IFwiYWFhYWFhQGFhYWFhYWEuYWFcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5mb3JtRGF0YS5hcHBlbmQoXCJuYW1lXCIsIGdldEZvcm0uZWxlbWVudHMubmFtZS52YWx1ZSk7XHJcbmZvcm1EYXRhLmFwcGVuZChcInBob25lXCIsIGdldEZvcm0uZWxlbWVudHMucGhvbmUudmFsdWUpO1xyXG5mb3JtRGF0YS5hcHBlbmQoXCJjb21tZW50XCIsIGdldEZvcm0uZWxlbWVudHMudGV4dC52YWx1ZSk7XHJcbmZvcm1EYXRhLmFwcGVuZChcInRvXCIsIFwiYWFhYWFhQGFhYWFhYWEuYWFcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xyXG5cclxuICAgICAgICBjb25zdCBqc29uID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8g0LrQvtC90LXRhiDRhNC+0YDQvNGLIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSlcclxuY29uc3QgZ2V0TXVudVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9faXRlbVwiKTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnZXRNdW51U2VsZWN0b3JzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBnZXRNdW51U2VsZWN0b3JzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V0TXVudVNlbGVjdG9ycy5sZW5ndGg7IGogKz0gMSkge1xyXG4gICAgICAgICAgICBpZiAoaiAhPT0gaSlcclxuICAgICAgICAgICAgZ2V0TXVudVNlbGVjdG9yc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9faXRlbS0tYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNdW51U2VsZWN0b3JzW2ldLmNsYXNzTGlzdC50b2dnbGUoXCJtZW51X19pdGVtLS1hY3RpdmVcIik7XHJcbiAgICB9KTtcclxufVxyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINCw0LrQutC+0YDQtNC10L7QvSAo0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90YvQuSkiLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC+0YLQt9GL0LLQvtCyXHJcbmNvbnN0IGdldENvbW1lbnRzU2VsZWN0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21tZW50X19saW5rXCIpO1xyXG5jb25zdCBzdWNjZXNzT3ZlcmxheSA9IGNyZWF0ZU92ZXJsYXkoXCIgPGgzIGNsYXNzPVxcXCJjb21tZW50X190aXRsZS0tb3ZlcmxheVxcXCI+0KHRgtC40LLQtdC9INCh0L/QuNC70LHQtdGA0LM8L2gzPlwiICsgXHJcblwi0KEg0LTRgNGD0LPQvtC5INGB0YLQvtGA0L7QvdGLINC00LDQu9GM0L3QtdC50YjQtdC1INGA0LDQt9Cy0LjRgtC40LUg0YDQsNC30LvQuNGH0L3Ri9GFINGE0L7RgNC8XCIgKyBcclxuXCLQtNC10Y/RgtC10LvRjNC90L7RgdGC0Lgg0L3QsNC/0YDRj9C80YPRjiDQt9Cw0LLQuNGB0LjRgiDQvtGCINGB0LjRgdGC0LXQvNGLINC80LDRgdGI0YLQsNCx0L3QvtCz0L4g0LjQt9C80LXQvdC10L3QuNGPINGA0Y/QtNCwINC/0LDRgNCw0LzQtdGC0YDQvtCyLiDQotCw0LrQuNC8INC+0LHRgNCw0LfQvtC8LFwiICsgIFxyXG5cItC60YPRgNGBINC90LAg0YHQvtGG0LjQsNC70YzQvdC+LdC+0YDQuNC10L3RgtC40YDQvtCy0LDQvdC90YvQuSDQvdCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0L/RgNC+0LXQutGCINGB0L/QvtGB0L7QsdGB0YLQstGD0LXRgiDQv9C+0LLRi9GI0LXQvdC40Y4g0LDQutGC0YPQsNC70YzQvdC+0YHRgtC4XCIgKyBcclxuXCLQvdCw0L/RgNCw0LLQu9C10L3QuNC5INC/0YDQvtCz0YDQtdGB0YHQuNCy0L3QvtCz0L4g0YDQsNC30LLQuNGC0LjRjyFcIik7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGdldENvbW1lbnRzU2VsZWN0b3JzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICBnZXRDb21tZW50c1NlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN1Y2Nlc3NPdmVybGF5KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5KGNvbnRlbnQpIHtcclxuICAgIGNvbnN0IG92ZXJsYXlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG92ZXJsYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xyXG4gIFxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlUZW1wbGF0ZVwiKTtcclxuICAgIG92ZXJsYXlFbGVtZW50LmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICBcclxuICAgIGNvbnN0IGNsb3NlRWxlbWVudCA9IG92ZXJsYXlFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcbiAgICBjbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdmVybGF5RWxlbWVudCk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gb3ZlcmxheUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgY29udGVudEVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcclxuICBcclxuICAgIHJldHVybiBvdmVybGF5RWxlbWVudDtcclxuICB9XHJcbiAgXHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+INC+0YLQt9GL0LLQvtCyIiwiLy8g0L3QsNGH0LDQu9C+INC60L7QtNCwINC80LXQvdGOICjRgdC60YDRi9GC0L7QtSlcclxudmFyIGNsb3NlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VfX2xpbmtcIik7XHJcbi8vIGNvbnNvbGUubG9nKGNsb3NlTGluayk7XHJcblxyXG52YXIgbW9iaWxlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnVcIik7XHJcbi8vIGNvbnNvbGUubG9nKG1vYmlsZU1lbnUpO1xyXG5cclxudmFyIG9wZW5MaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRhYmxldHNcIik7XHJcbi8vIGNvbnNvbGUubG9nKG9wZW5MaW5rKTtcclxuXHJcbnZhciBjbG9zZUxpbmtGcm9tTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXZfX2l0ZW1cIik7XHJcbi8vIGNvbnNvbGUubG9nKGNsb3NlTGlua0Zyb21OYXYpO1xyXG5cclxub3BlbkxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51LW9wZW5cIik7XHJcbn0pO1xyXG5cclxuY2xvc2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGUtbWVudS1vcGVuXCIpO1xyXG59KTtcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgY2xvc2VMaW5rRnJvbU5hdi5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY2xvc2VMaW5rRnJvbU5hdltpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZS1tZW51LW9wZW5cIik7XHJcbiAgICB9KTtcclxufVxyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINC80LXQvdGOICjRgdC60YDRi9GC0L7QtSkiLCIvLyDQvdCw0YfQsNC70L4g0LrQvtC00LAg0YHQu9Cw0LnQtNC10YBcclxuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWxheW91dF9fbGVmdFwiKTtcclxuY29uc3QgcmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1sYXlvdXRfX3JpZ2h0XCIpO1xyXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyX193cmFwXCIpO1xyXG5cclxuLy8g0YjQuNGA0LjQvdCwINC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxudmFyIHdpZHRoID0gMTAwO1xyXG4vLyDRgtC10LrRg9GJ0LjQuSDRgdC00LLQuNCzINCy0LvQtdCy0L5cclxudmFyIGNvdW50ID0gMDtcclxuLy8g0LLRgdC10LPQviDRgdC70LDQudC00L7QslxyXG5jb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXJfX2l0ZW1cIik7XHJcblxyXG5yaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXRlbS5sZW5ndGgsIGl0ZW0ubGVuZ3RoIC0gMik7XHJcbiAgICBpZiAoY291bnQgPD0gaXRlbS5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgY291bnQgKz0gMTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudCArICc9PicpO1xyXG4gICAgICAgIHBvc2l0aW9uID0gd2lkdGggKiBjb3VudDtcclxuICAgICAgICBpdGVtcy5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgcG9zaXRpb24gKyAnJSc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbXMuc3R5bGUubWFyZ2luTGVmdCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGNvdW50ICE9PSAwKSB7XHJcbiAgICAgICAgY291bnQgLT0gMTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudCArICc8PScpO1xyXG4gICAgICAgIHBvc2l0aW9uID0gd2lkdGggKiBjb3VudDtcclxuICAgICAgICBpdGVtcy5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0nICsgcG9zaXRpb24gKyAnJSc7XHJcbiAgICB9XHJcbn0pO1xyXG4vLyDQutC+0L3QtdGGINC60L7QtNCwINGB0LvQsNC50LTQtdGAIiwiLy8g0JfQsNC00LDQvdC40LUgMTpcclxuZnVuY3Rpb24gZmlsdGVyKGlucHV0LCB0aGFuKSB7XHJcblxyXG4gICAgLy8g0L3QsNC/0LjRiNC40YLQtSDQt9C00LXRgdGMINC60L7QtCwg0LrQvtGC0L7RgNGL0Lkg0LLQvtC30LLRgNCw0YnQsNC10YIg0L3QvtCy0YvQuSDQvNCw0YHRgdC40LJcclxuICAgIC8vINCyINC60L7RgtC+0YDQvtC8INGB0L7QtNC10YDQttCw0YLRgdGPINGC0LUg0Y3Qu9C10LzQtdC90YLRiyBpbnB1dCwg0LrQvtGC0L7RgNGL0LUg0LHQvtC70YzRiNC1IHRoYW5cclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICBpbnB1dC5mb3JFYWNoKGVsZW0gPT4gZWxlbSA+IHRoYW4gPyByZXN1bHQucHVzaChlbGVtKSA6IG51bGwpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxudmFyIGFycmF5ID0gWzEyLCAxMDAsIDM0LCA2NSwgMTBdO1xyXG52YXIgcmVzdWx0ID0gZmlsdGVyKGFycmF5LCA2MCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhyZXN1bHQpOyAvLyBbMTAwLCA2NV07XHJcblxyXG5yZXN1bHQgPSBmaWx0ZXIoYXJyYXksIDIwKTtcclxuLy8gY29uc29sZS5sb2cocmVzdWx0KTsgLy8gWzEwMCwgMzQsIDY1XTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbi8vINCX0LDQtNCw0L3QuNC1IDI6XHJcblxyXG4vLyDQktC+0LfRjNC80LjRgtC1INC60L7QtCDQv9GA0LXQtNGL0LTRg9GJ0LXQs9C+INC30LDQtNCw0L3QuNGPXHJcbi8vINCc0L7QtNC40YTQuNGG0LjRgNGD0LnRgtC1INC60L7QtCDRhNGD0L3QutGG0LjQuCBmaWx0ZXIg0YLQsNC6LCDRh9GC0L7QsdGLINGE0YPQvdC60YbQuNGPINCy0YvQsdGA0LDRgdGL0LLQsNC70LAg0LjRgdC60LvRjtGH0LXQvdC40Y8g0L/RgNC4INGB0LvQtdC00YPRjtGJ0LjRhSDRg9GB0LvQvtCy0LjRj9GFOlxyXG4vLyDQkiBpbnB1dCDQv9C10YDQtdC00LDQvSDQv9GD0YHRgtC+0Lkg0LzQsNGB0YHQuNCyXHJcbi8vINCl0L7RgtGPINCx0Ysg0L7QtNC40L0g0LjQtyDRjdC70LXQvNC10L3RgtC+0LIgaW5wdXQg0L3QtSDRj9Cy0LvRj9C10YLRgdGPINGH0LjRgdC70L7QvFxyXG4vLyDQpdC+0YLRjyDQsdGLINC+0LTQuNC9INC40Lcg0Y3Qu9C10LzQtdC90YLQvtCyIGlucHV0INGP0LLQu9GP0LXRgtGB0Y8g0L7RgtGA0LjRhtCw0YLQtdC70YzQvdGL0Lwg0YfQuNGB0LvQvtC8XHJcblxyXG5cclxuZnVuY3Rpb24gZmlsdGVyMihpbnB1dCwgdGhhbikge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcblxyXG4gICAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcItCf0YPRgdGC0L7QuSDQvNCw0YHRgdC40LJcIik7XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0LnNvbWUoZWxlbSA9PiBlbGVtIDwgMCkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQpdC+0YLRjyDQsdGLINC+0LTQuNC9INC40Lcg0Y3Qu9C10LzQtdC90YLQvtCyIGlucHV0INGP0LLQu9GP0LXRgtGB0Y8g0L7RgtGA0LjRhtCw0YLQtdC70YzQvdGL0Lwg0YfQuNGB0LvQvtC8XCIpO1xyXG4gICAgfSBlbHNlIGlmICghaW5wdXQuZXZlcnkoZWxlbSA9PiBOdW1iZXIuaXNGaW5pdGUoZWxlbSkpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi0KXQvtGC0Y8g0LHRiyDQvtC00LjQvSDQuNC3INGN0LvQtdC80LXQvdGC0L7QsiBpbnB1dCDQvdC1INGP0LLQu9GP0LXRgtGB0Y8g0YfQuNGB0LvQvtC8XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LmZvckVhY2goZWxlbSA9PiBlbGVtID4gdGhhbiA/IHJlc3VsdC5wdXNoKGVsZW0pIDogbnVsbCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyB2YXIgYXJyYXkgPSBbMSwgMiwgNCwgNiwgNjFdO1xyXG52YXIgYXJyYXkgPSBbMSwgMiwgNCwgNiwgJ2ZmZicsIDYxXTtcclxuXHJcbnRyeSB7XHJcblxyXG4gICAgdmFyIHJlc3VsdCA9IGZpbHRlcjIoYXJyYXksIDYwKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7IFxyXG59XHJcbmNhdGNoIChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG5cclxufVxyXG5cclxuLy8gZm9yIChsZXQgaSA9IDE7IGkgPCA2OyBpICs9IDEpIHtcclxuLy8gICAgIGxldCBvdXQgPSBbXTtcclxuLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgaTsgaiArPSAxKSB7XHJcbi8vICAgICAgICAgb3V0LnB1c2goaSk7XHJcbi8vICAgICB9XHJcbi8vIGNvbnNvbGUubG9nKG91dC5qb2luKCcnKSk7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gYXJyLmZpbHRlcihlbGVtID0+IHtcclxuLy8gICAgIGNvbnN0IHJlc3VsdCA9IChhcmcpID0+IGNvbnNvbGUubG9nKGFyZyk7XHJcbi8vICAgICAvLyByZXR1cm4gZWxlbSA9PT0gMyA/IHJlc3VsdCgn0LXRgdGC0YwnKSA6IG51bGw7XHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgYXJyID0gWzAsIDEsIDIsIDYsIDRdO1xyXG4vLyBjb25zdCBvdXQgPSBhcnIuc29tZShlbGVtID0+IGVsZW0gPT09IDMpID8gXCLQtdGB0YLRjFwiIDogXCLQvdC10YJcIjtcclxuLy8gLy8gY29uc29sZS5sb2cob3V0KTtcclxuXHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XHJcbi8vICAgICBpZiAoYXJyW2ldID09PSAzKSB7XHJcbi8vICAgICAgICAgIGNvbnNvbGUubG9nKCfQtdGB0YLRjCcpO1xyXG4vLyAgICAgICAgICByZXR1cm47ICBcclxuLy8gICAgIH1cclxuLy8gY29uc29sZS5sb2coJ9C90LXRgicpO1xyXG4vLyByZXR1cm47XHJcbi8vIH1cclxuXHJcbiIsIi8vINC90LDRh9Cw0LvQviDQutC+0LTQsCDQsNC60LrQvtGA0LTQtdC+0L0gKNCy0LXRgNGC0LjQutCw0LvRjNC90YvQuSlcclxuY29uc3QgZ2V0VGVhbVNlbGVjdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uLXRlYW1fX3dyYXBcIik7XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZ2V0VGVhbVNlbGVjdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgZ2V0VGVhbVNlbGVjdG9yc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdldFRlYW1TZWxlY3RvcnMubGVuZ3RoOyBqICs9IDEpIHtcclxuICAgICAgICAgICAgaWYgKGogIT09IGkpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZ2V0VGVhbVNlbGVjdG9yc1tqXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWNjb3JkaW9uLXRlYW1fX3dyYXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0VGVhbVNlbGVjdG9yc1tpXS5jbGFzc0xpc3QudG9nZ2xlKFwiYWNjb3JkaW9uLXRlYW1fX3dyYXAtLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59XHJcbi8vINC60L7QvdC10YYg0LrQvtC00LAg0LDQutC60L7RgNC00LXQvtC9ICjQstC10YDRgtC40LrQsNC70YzQvdGL0LkpIl19
