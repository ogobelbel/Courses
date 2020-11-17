function calcMin(a, b) {

    {
        let i;
    function ifNubmber(e) {
        if (isNaN(e)) {
            alert("Для ввода допустимы только числа!");
        }
    }

    for ( i = 0; i < 1; i++) {

        a = prompt("Какое число возвести в степень?", "");

        if (!isNaN(a)) {
            b = prompt("В какую степень возводим");
            if (!isNaN(b)) {
                let c = a ** b;
                return alert('Результат ${a}');
            } else {
                ifNubmber(b);
                i--;
            }
        } else {
           ifNubmber(a, i);
           i--;
        }
    }
}
}




console.log(calcMin(3, 2));