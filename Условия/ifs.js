if ("1"===1){
    console.log("Verno!")
}
else
{
    console.log("Neverno")
}
(50 === 33) ? console.log("verno") :   console.log("Neverno");

switch(num)
{
    case num == 16:
        console.log("Verno!");
        break;
    case num > 17:
        console.log("Neverno");
        break;
    case num > 100:
        console.log("Neverno");
        break;
    default:
        console.log("Что-то пошло не так");
}


let num = 50;



for ( let i = 0; i<55; i++){
    if (i % 2 == 0)
    {
        continue;
    }
    console.log(i);
}