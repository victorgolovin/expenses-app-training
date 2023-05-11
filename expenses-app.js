const LIMIT = 10000;

const expenses = [];

const inputNode = document.querySelector('.js-expense-input');
const buttonNode = document.querySelector('.js-expense-button');
const historyNode = document.querySelector('.js-history');
const sumNode = document.querySelector('.js-sum');
const limitNode = document.querySelector('.js-limit');
const statusNode = document.querySelector('.js-status');

limitNode.innerText = LIMIT;

// const expenses = [] - пример массива ([] - массив)
// expenses.push() - вносить данные которые на нужны в массиве

buttonNode.addEventListener('click', function() {

    // 1. Получаем значение из поля ввода

    if (!inputNode.value) { // знак ! говорит нам что в этой переменной нечего нету 
        return; // ретурн возвращает нас обратно если выполнить условия if
    }

    const expense = parseInt (inputNode.value); // parseInt() - позволяет переводить строки в целые числа

    inputNode.value = ''; // обнуляет строку послее ввода в инпуте и нажатии кнопки 

    // 2. Сохраняем трату в список

    expenses.push(expense);

    // 3. Выводим новый список трат

    let expensesListHTML = '';

    expenses.forEach(element => { // forEach - новый оператор циклов
        expensesListHTML +=`<li>${element} руб</li>`;
    });

    historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;

    // 4. Посчитать сумму и вывести ее

    let sum = 0;

    expenses.forEach(element => {
        sum += element;
    });

    sumNode.innerText = sum;

    // 5. Сравнение с лимитом и вывод статуса 

    if (sum <= LIMIT) {
        statusNode.innerText ='Все хорошо';
    } else {
        statusNode.innerText ='Все плохо';
        statusNode.classList.add('status-red'); // classList.add - добовляет класс из css
    }
});