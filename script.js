var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var expenses1= prompt("Введите обязательную статью расходов в этом месяце");
var expenses2= prompt("Во сколько обойдется?");
var expenses3= prompt("Введите обязательную статью расходов в этом месяце");
var expenses4= prompt("Во сколько обойдется?");

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        expenses2,
        expenses4
    },
    optionalExpenses: {},
    income: {},
    savings: false
};

alert(appData["budget"] / 30);
