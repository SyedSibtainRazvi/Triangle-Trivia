// Section 1
const angleInput = document.querySelectorAll(".angle-input");
const checkBtn1 = document.querySelector("#check-button1");
const output1 = document.querySelector("#output1");

function sumOfAngles(angle1, angle2, angle3) {
    let sum = angle1 + angle2 + angle3;
    return sum;
}

function checkCorrectTriangle() {
    sum = sumOfAngles(Number(angleInput[0].value), Number(angleInput[1].value), Number(angleInput[2].value));
    if (sum === 180) {
        output1.innerText = "Yayy! It's a Triangle!"
    } else {
        output1.innerText = "Oops! It's not a Triangle!"

    }
}

checkBtn1.addEventListener("click", checkCorrectTriangle);

// Section 2

const quizForm = document.querySelector(".quiz-form");
const checkBtn2 = document.querySelector("#submit-button-quiz");
const output2 = document.querySelector("#output-quiz");

const rightAnswers = ["90", "Equilateral", "Acute", "Scalene", "35", "Isosceles", "10", "One"];

function checkScore() {

    let score = 0;
    let index = 0;
    const formAnswers = new FormData(quizForm);
    for (let value of formAnswers.values()) {
        if (value === rightAnswers[index]) {

            score += 1;
        }
        index = index + 1;
    }
    output2.innerText = "Score is : " + score;
}

checkBtn2.addEventListener("click", checkScore);

// Section 3

const sideInput = document.querySelectorAll(".side-input");
const hypoBtn = document.querySelector("#calculate-hypo");
const showHypo = document.querySelector("#output-hypo");

function sumofSquareOfSides(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypo() {
    const sumOfSquares = sumofSquareOfSides(Number(sideInput[0].value), Number(sideInput[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares);
    showHypo.innerText = "Hypotenuse is: " + hypotenuse;
}

hypoBtn.addEventListener("click", calculateHypo);

// Section 4

const areaInput = document.querySelectorAll(".area-input");
const areaBtn = document.querySelector("#calculate-area");
const showArea = document.querySelector("#output-area");

function productSides(base, height) {
    const productOfSides = base * height;
    return productOfSides;
}

function calculateArea() {
    const productOfSides = productSides(Number(areaInput[0].value), Number(areaInput[1].value));
    const areaOfTriangle = 0.5 * (productOfSides);
    showArea.innerText = "Area of Triangle: " + areaOfTriangle + "cm square";

}

areaBtn.addEventListener("click", calculateArea);