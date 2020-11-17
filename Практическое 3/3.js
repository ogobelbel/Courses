'use srtict';


let money, time;

function start(){
     money = +prompt("Ваш бюджет на месяц?", "");

     while (( money == null) || isNaN(money) || money =="" ){
        money = +prompt("Ваш бюджет на месяц?", "");
     }
     time = prompt("Введите дату в формате ГГГГ ММ ДД", "");
}

start();


let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpensses: {},
    income: [],
    savings: true,
    Huita: {}
};


function chooseExpenses() { 
    for (let i = 0; i < 2; i++) {
        var answer1 = prompt("Обязаельная статья расходов в этом месяце?");
    
    
        if (typeof (answer1) === 'string' && typeof (answer1) != null && typeof (answer1) != null &&
            answer1 != "" && answer1.length < 5 && !isNaN(answer1)) {
               var  answer2 = prompt("Во сколько обойдется?");
    
            appData.expences[answer1] = answer2;
        }
        else{
       i--;
       alert("Введено неверное значение, повторите попытку!")
        }
    }
 }

chooseExpenses();



function checkSavings() {
    if (appData.savings)
    {
        let save = +prompt("Какая сумма сбережений?"),
        persent = +prompt("Какой процент?");
        appData.monthIncome = save/100/12*persent;
        alert("Доход в месяц: " + appData.monthIncome);
    }
  }

  checkSavings();


  function detectDayBudget() {

    appData.moneyPerDay = +(appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    }
detectDayBudget();


function detectLevel(){
    switch(appData.moneyPerDay)
    {
        case appData.moneyPerDay < 100:
            alert("Min");
            break;
        case appData.moneyPerDay < 100 && appData.moneyPerDay > 1000:
            alert("Medium");
            break;
        case appData.moneyPerDay > 1000:
            alert("High");
            break;
    }
}
detectLevel();

function chooseOptExpenses(){
    for (let i = 0; i<3;i++)
    {
         appData.optionalExpensses[i+1] = prompt("Статья необяательных расходов?");
         while (isNaN(appData.optionalExpensses[i+1]) || appData.optionalExpensses[i+1] == null || appData.optionalExpensses[i+1] == ""){
            appData.optionalExpensses[i+1] = prompt("Статья необяательных расходов?");
         }
    }
}

chooseOptExpenses();