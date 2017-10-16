// get input number
const num = prompt('Please enter a num between 2 and 10: ');

if (num >= 2 && num <= 10) {
    // if number is valid
    task1.innerHTML = 'Your input number is ' + num;
    task2.innerHTML = 'The number of times to divide the number ' + num
    + ' by 2 to get a value less than one millionth is ' + countMillionth(num);
    task3.innerHTML = drawDiagram(num);
    document.getElementById("task2").style.visibility = "visible";
    document.getElementById("task3").style.visibility = "visible";
} else { 
    // if number is invalid
    task1Error.innerHTML = 'Your input is ' + num + 
    '. The valid input number is between 2 and 10. Please reload this page and try again. ';
}

function countMillionth(num) {
    let count = 0;
    while (num > 1.0e-6) {
        num = num / 2;
        count += 1;
    }
    return count;
}

function drawDiagram(num){
    let text = "";
    for (i = num; i > 0; i--) {
        for (j = i; j > 0; j--) {
            text +=  "*" ;
        }
        text += "<br>";
    }
    return text;
}