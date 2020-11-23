function excercise1() {
    let number = parseInt(prompt('Enter a number:'));
    alert(number * number);
}

function excercise2() {
    let radius = parseInt(prompt('Enter the radius'));
    let area = Math.PI * radius;
    let perimeter = Math.PI * 2 * radius;
    alert('Area is: ' + area + 'Perimeter is: ' + perimeter);
}

function excercise3() {
    let number = parseInt(prompt('Enter a number: '));
    let factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial *= i;
    }
    alert(factorial);
}

function excercise4() {
    let number = prompt('Enter a number: ');
    if (number % 1 == 0) {
        alert(true);
    } else {
        alert(false);
    }
}

function excercise5() {
    let num1 = parseInt(prompt('Enter a number: '));
    let num2 = parseInt(prompt('Enter a number: '));
    let num3 = parseInt(prompt('Enter a number: '));

    if (num1 < num2) {
        if (num1 < num3) alert(num1 + ' is mininum');
        else alert(num3 + ' is minimum');
    }
    else {
        if (num2 < num3) alert(num2 + ' is minimum');
        else alert(num3 + ' is minimum');
    }
}

function excercise6 () {
    let number = prompt('Enter a number: ');
    if (number > 0)
        alert( number + ' is the positive');
    else alert(number + ' is not positive');
}

function excercise7 () {
    let num1 = prompt('Enter a number: ');
    let num2 = prompt('Enter a number: ');
    alert(num2 + ' ' + num1);
}

function excercise8 () {
    let arrayNumber = new Array(5);
    for (let i=0; i < 5; i++){
        arrayNumber[i] = prompt('Enter a number:');
    }
    alert(arrayNumber.reverse());
}

function excercise9 () {
    let arrayNumber = new Array(5);
    let number;
    let count = 0;
    number = prompt('Enter the number you want to find:');
    for (let i=0; i < 5; i++){
        arrayNumber[i] = prompt('Enter a number:');
        if (arrayNumber[i]==number) {
            count+=1;
        }
    }
    alert(number + ' appear ' + count + ' time');
}