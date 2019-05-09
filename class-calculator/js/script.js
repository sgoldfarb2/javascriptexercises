"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

let answer = 0;
let ourNumbers = []
let ourOperands = []


// adding click handlers to number buttons

var calcInput = document.body.addEventListener('click', function (event) {
    let ourInput = event.target.textContent
    switch (ourInput) {
        case '1':
            ourNumbers.push(parseFloat(ourInput))
            input.innerText = 1
            break;
        case '2':
            ourNumbers.push(parseFloat(ourInput))
            input.innerText = 2
            break;
        case '3':
            ourNumbers.push(parseFloat(ourInput))
            input.innerText = 3
            break;
        case '4':
            ourNumbers.push(parseFloat(ourInput))
            input.innerText = 4
            break;
        case '5':
            ourNumbers.push(parseFloat(ourInput))
            input.innerText = 5
            break;
        case '6':
            ourNumbers.push(parseFloat(ourInput))
            input.innerText = 6
            break;
        case '7':
            ourNumbers.push(parseFloat(ourInput))
            input.innerText = 7
            break;
        case '8':
            ourNumbers.push(parseFloat(ourInput))
            input.innerText = 8
            break;
        case '9':
            ourNumbers.push(parseInt(ourInput))
            input.innerText = 9
            break;
        case '0':
            input.innerText = 0
        default:
            break;
    }
    console.log(ourNumbers)
}, false)


// adding click handlers to the operation buttons
var operators = document.querySelector('.operators')
operators.addEventListener('click', function (event) {
    console.log(event.target.innerText)
    if (event.target.innerText === '+') {
        // answer = ourNumbers.reduce(function (acc, currentElement) {
        //     return acc + currentElement

        // })
        ourOperands.push('+')
        input.innerText = '+'
        // return answer

    } else if (event.target.innerText === '-') {
        // for (let i = 0; i < ourNumbers.length; i++) {
        //     answer = ourNumbers[i] - ourNumbers[i + 1]
        //     input.innerText = '-'

        //     return answer
        // }
        input.innerText = '-'
        ourOperands.push('-')

    } else if (event.target.innerText === '×') {
        // for (let i = 0; i < ourNumbers.length; i++) {
        //     answer = ourNumbers[i] * ourNumbers[i + 1]
        //     input.innerText = 'x'
        //     return answer
        // }
        input.innerText = '×'
        ourOperands.push('×')
    } else if (event.target.innerText === '÷') {
        // for (let i = 0; i < ourNumbers.length; i++) {
        //     answer = ourNumbers[i] / ourNumbers[i + 1]
        //     input.innerText = '÷'
        //     return answer
        // }
        input.innerText = '÷'
        ourOperands.push('÷')

    }
    console.log(ourOperands)
}, false)
// operators.addEventListener()

// on click of 'equal' button
result.addEventListener('click', function () {
    if (ourOperands[0] === '+') {
        answer = ourNumbers.reduce(function (acc, currentElement) {
            return acc + currentElement
        })
        input.innerText = answer
        return answer
    } else if (ourOperands[0] === '-') {
        for (let i = 0; i < ourNumbers.length; i++) {
            answer = ourNumbers[i] - ourNumbers[i + 1]
            input.innerText = answer
            return answer
        }
    } else if (ourOperands[0] === '×') {
        for (let i = 0; i < ourNumbers.length; i++) {
            answer = ourNumbers[i] * ourNumbers[i + 1]
            input.innerText = answer
            return answer
        }
    } else if (ourOperands[0] === '÷') {
        for (let i = 0; i < ourNumbers.length; i++) {
            answer = ourNumbers[i] / ourNumbers[i + 1]
            input.innerText = answer
            return answer
        }
    }
}, false)

// clearing the input on press of clear
clear.addEventListener('click', function () {
    input.innerText = ""
    ourNumbers = []
    ourOperands = []
}, false)
