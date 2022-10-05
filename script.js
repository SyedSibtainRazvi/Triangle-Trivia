// Angles of Triangles
var angles = document.querySelectorAll('.angle-input')
var anglesButton = document.querySelector('#btn-angles')
var anglesMessage = document.querySelector('#message')

function checkAngleValid(angle) {
    if (angle.value <= 0) {
        anglesMessage.innerText = 'Ohh no! Triangles always have angles greater than 0°'
        return false;
    } else if (isNaN(angle.value)) {
        anglesMessage.innerText = 'Please enter a valid numeric value, not text!'
        return false;
    }
    return true;
}
function calculateAngleSum() {
    var sumAngles = 0;
    var angleValid = null;
    for (let angle of angles) {
        angleValid = checkAngleValid(angle);
        if (angleValid === false) {
            return
        }
        sumAngles += Number(angle.value);
    }
    if (sumAngles === 180) {
        anglesMessage.innerText = 'Yes! Its a triangle!'
    } else {
        var difference = (sumAngles - 180)
        if (difference > 0) {
            anglesMessage.innerText = 'Nope! Its not a triangle!'
        } else {
            anglesMessage.innerText = 'Ohh no! Its not a triangle! The total sum of all angles is short'
        }
    }
}

if (anglesButton) {
    anglesButton.addEventListener('click', calculateAngleSum)
}


// Quiz Form
var form = document.querySelector('#quiz-form');
var answerButton = document.querySelector('#btn-answer');
var scoreOutput = document.querySelector('#score-div');

const rightAnswers = ["90", "Equilateral", "Acute", "Scalene", "35", "Isosceles", "10", "One", "Three", "12"]

function calculateScore() {

    var formResults = new FormData(form);
    let index = 0;
    let score = 0;
    for (let selection of formResults.values()) {
        if (selection === rightAnswers[index]) {
            score++;
        }
        index++;
    }
    if (score < 4) {
        scoreOutput.innerText = 'Uh oh! Your score is ' + score + '. Try again!'
    } else if (score < 7) {
        scoreOutput.innerText = 'Great! Your score is ' + score
    } else {
        scoreOutput.innerText = 'You are a champ! Your score is ' + score
    }

};

if (answerButton) {
    answerButton.addEventListener('click', calculateScore)
}

// Calculate Hypotenuse

var baseInput = document.querySelector('#base-input');
var heightInput = document.querySelector('#height-input');
var hypoButton = document.querySelector('#btn-hypo');
var hypoMessage = document.querySelector('#hypo-message');

function checkValidSide(sidename, side, container) {
    if (side <= 0) {
        container.innerText = 'Enter ' + sidename + ' length greater than 0'
        return false;
    } else if (isNaN(side)) {
        container.innerText = 'Error: you have entered text!'
        return false;
    }
    return true;
}

function rounded(num) {
    return Math.round(num * 100) / 100
}

function calculateHypo() {
    var base = baseInput.value
    var validBase = checkValidSide('Base', base, hypoMessage);
    var height = heightInput.value
    var validHeight = checkValidSide('Height', height, hypoMessage)
    if (validBase === false && validHeight === false) {
        hypoMessage.innerText = 'Enter sides greater than 0'

    }
    else if (validBase === true && validHeight === true) {
        var hypo = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
        var hypo = rounded(hypo);
        hypoMessage.innerText = 'The length of hypotenuse is ' + hypo + ' units'
    }
}

if (hypoButton) {
    hypoButton.addEventListener('click', calculateHypo)
}

// calculate Area 

var areaButton = document.querySelector('#btn-area');
var messageArea = document.querySelector('#area-message');
var sides = document.querySelectorAll('.side-input');

function checkTriangleValidity(a, b, c) {
    if (((a + b) > c) && ((c + b) > a) && ((a + c) > b)) {
        return true;
    }
    return false;
}
function calculateArea() {
    for (let side of sides) {
        var validSide = checkValidSide('side', side.value, messageArea)
        if (validSide === false) {
            return
        }
    }
    var a = Number(sides[0].value)
    var b = Number(sides[1].value)
    var c = Number(sides[2].value)
    var trianglevalid = checkTriangleValidity(a, b, c)
    if (trianglevalid === false) {
        messageArea.innerText = 'Incorrect lengths of triangle. Sum of 2 sides is always greater than third.'
        return
    }
    else {
        var s = (a + b + c) / 2
        var area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
        var area = rounded(area)
        messageArea.innerText = 'The area of triangle is ' + area + ' units.'

    }

}

if (areaButton) {
    areaButton.addEventListener('click', calculateArea)
}
