'use srtict';
let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате ГГГГ ММ ДД", "");



let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpensses: {},
    income: [],
    savings: false,
    Huita: {}
};


// for (let i = 0; i < 2; i++) {
//     var answer1 = prompt("Обязаельная статья расходов в этом месяце?");


//     if (typeof (answer1) === 'string' && typeof (answer1) != null && typeof (answer1) != null &&
//         answer1 != "" && answer1.length < 5) {
//            var  answer2 = prompt("Во сколько обойдется?");

//         appData.expences.answer1 = answer2;
//     }
//     else{
//    i--;
//    alert("Введено неверное значение, повторите попытку!")
//     }


// }


 let i = 0;
// while (i < 2 ) {
    
//     let answer1 = prompt("Есть доп расходы?");
//     i++;
//     if (answer1.length < 5 && typeof (answer1) === "string" &&typeof (answer1) != null && answer1 != '' ) {
        
//         var answer2 = prompt("Сумма расходов");
//         appData.expences[answer1] = answer2;
        
//     }
//     else
//     {
//         i--;
//         alert("Ошибочки, трайни еще раз");
//     }
// }



do {
    let answer1 = prompt("Есть доп расходы?");
    i++;
    if (answer1.length < 5 && typeof (answer1) === "string" &&typeof (answer1) != null && answer1 != '' ) {
        
        var answer2 = prompt("Сумма расходов");
        appData.expences[answer1] = answer2;
        
    }
    else
    {
        i--;
        alert("Ошибочки, трайни еще раз");
    }
}
while (i < 2 );










appData.moneyPerDay = appData.budget / 30;
let arrrrrrr = "Test";

appData.Huita[arrrrrrr] = answer2;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

// if (appData.moneyPerDay < 100) {
//     console.log("Min");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
//     console.log("Medium");
// } else if (appData.moneyPerDay > 1000) {
//     alert("High");
// } else {
//     console.log("Error")
// }

switch(appData.moneyPerDay)
{
    case appData.moneyPerDay < 100:
        console.log("Min");
        break;
    case appData.moneyPerDay < 100 && appData.moneyPerDay > 1000:
        console.log("Medium");
        break;
    case appData.moneyPerDay > 1000:
        console.log("High");
        break;
}