const expenses = [];

const inputNode = document.querySelector('.js-expense-input');
const buttonNode = document.querySelector('.js-expense-button');

buttonNode.addEventListener('click', function() {
    const expens = inputNode.value;
    expenses.push(expens);
    console.log(expenses)
});