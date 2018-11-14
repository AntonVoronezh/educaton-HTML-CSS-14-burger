// Задание 1:
// 1 При помощи DOM API создайте DOM-элемент с тегом div
const createDiv = document.createElement('div');

// 2 Добавьте созданный элемент в DOM-дерево
const getBody = document.querySelector('body');
getBody.appendChild(createDiv);

// 3 При помощи DOM API, поместите в элемент текст: 'Этот элемент создан при помощи DOM API'
createDiv.textContent = 'Этот элемент создан при помощи DOM API';

// Задание 2:
// 1 При помощи DOM API создайте элемент с тегом div
const createDiv2 = document.createElement('div');
getBody.appendChild(createDiv2);

// 2 Задайте созданному элементу класс 'inner'
createDiv2.classList.add('inner');

// 3 При помощи DOM API, поместите в элемент текст: 'Этот элемент тоже создан при помощи DOM API'
createDiv2.textContent = 'Этот элемент тоже создан при помощи DOM API';