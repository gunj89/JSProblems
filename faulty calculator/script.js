let x = parseInt(prompt("enter a number"));
let y = parseInt(prompt("enter second number"));
let z = prompt("enter a sign for +,-,*,/");
let randomNum = Math.floor(Math.random() * 100) + 1;

if (randomNum < 10) {
    if (z == "+") {
        console.log(x - y);
        document.getElementById("space").innerHTML = `tu to gaya beteee ${x - y}`;
    }
    if (z == "-") {
        console.log(x + y);
        document.getElementById("space").innerHTML = `tu to gaya beteee ${x + y}`;
    }
    if (z == "*") {
        console.log(x / y);
        document.getElementById("space").innerHTML = `tu to gaya beteee ${x / y}`;
    }
    if (z == "/") {
        console.log(x * y);
        document.getElementById("space").innerHTML = `tu to gaya beteee ${x * y}`;
    }
}

else {
    if (z == "+") {
        console.log(x + y);
        document.getElementById("space").innerHTML = `answer is ${x + y}`;
    }
    if (z == "-") {
        console.log(x - y);
        document.getElementById("space").innerHTML = `answer is ${x - y}`;
    }
    if (z == "*") {
        console.log(x * y);
        document.getElementById("space").innerHTML = `answer is ${x * y}`;
    }
    if (z == "/") {
        console.log(x / y);
        document.getElementById("space").innerHTML = `answer is ${x / y}`;
    }
}