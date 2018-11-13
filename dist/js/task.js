// Типы данных и переменные================================
// 1
var name = 'Антон';
// 2
console.log(name);
// 3
name = 'Наташа';
// 4
console.log(name);

// Условный оператор if===================================
// 1
if (10 > 9) {
    // 2
    console.log('ok');
}
// 3
if (8 > 9) {
    console.log('ok');
} else {
    // 4
    console.log('not ok');
}
// Циклический оператор for==============================
// 1
for (let i = 0; i < 10; i += 1) {
    // 2
    // 3
    console.log(i);
}
// Функции==============================================
// 1
const sum = (p1, p2, p3) => {
    // 2
    const result = p1 + p2 + p3;
    // 3
    return result;
};
// 4
sum(10, 20, 30);
// 5
const out = sum(10, 20, 30);
console.log(out);
// 6
const out2 = sum(1, 7, 3);
console.log(out2);