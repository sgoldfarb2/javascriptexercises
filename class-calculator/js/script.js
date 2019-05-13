"use strict";

const input = document.getElementById('input'), // input/output button
    number = document.querySelectorAll('.numbers div'), // number buttons
    operator = document.querySelectorAll('.operators div'), // operator buttons
    result = document.getElementById('result'), // equal button
    clear = document.getElementById('clear'); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

let answer = 0;
let nums = []
let ourNumbers = []
let ourOperands = []


// adding click handlers to number buttons
var leftPanel = document.querySelector('.leftPanel')
leftPanel.addEventListener('click', function (event) {
    let ourInput = event.target.textContent
    if (ourInput === "C") {
        answer = 0
        nums = []
        ourNumbers = []
        ourOperands = []
    } else {
        nums.push(ourInput)
        input.textContent = nums.join('')
        console.log(nums)
    }
}, false)



// adding click handlers to the operation buttons
var operators = document.querySelector('.operators')
operators.addEventListener('click', function (event) {
    console.log(event.target.innerText)
    if (event.target.innerText === '+') {

        ourNumbers.push(parseFloat(nums.join('')))
        nums = []

        ourOperands.push('+')
        input.innerText = '+'


    } else if (event.target.innerText === '-') {

        ourNumbers.push(parseFloat(nums.join('')))
        nums = []

        input.innerText = '-'
        ourOperands.push('-')

    } else if (event.target.innerText === '×') {

        ourNumbers.push(parseFloat(nums.join('')))
        nums = []

        input.innerText = '×'
        ourOperands.push('×')
    } else if (event.target.innerText === '÷') {

        ourNumbers.push(parseFloat(nums.join('')))
        nums = []

        input.innerText = '÷'
        ourOperands.push('÷')

    }

}, false)


// on click of 'equal' button
result.addEventListener('click', function () {
    if (ourOperands[0] === '+') {
        ourNumbers.push(parseFloat(nums.join('')))
        nums = []
        answer = ourNumbers.reduce(function (acc, currentElement) {
            return acc + currentElement
        })
        input.innerText = answer
        ourNumbers = []
        return answer
    } else if (ourOperands[0] === '-') {
        ourNumbers.push(parseFloat(nums.join('')))
        nums = []
        for (let i = 0; i < ourNumbers.length; i++) {
            answer = ourNumbers[i] - ourNumbers[i + 1]
            input.innerText = answer
            // ourNumbers = []
            return answer
        }
    } else if (ourOperands[0] === '×') {
        ourNumbers.push(parseFloat(nums.join('')))
        nums = []
        for (let i = 0; i < ourNumbers.length; i++) {
            answer = ourNumbers[i] * ourNumbers[i + 1]
            input.innerText = answer
            ourNumbers = []
            return answer
        }
    } else if (ourOperands[0] === '÷') {
        ourNumbers.push(parseFloat(nums.join('')))
        nums = []
        for (let i = 0; i < ourNumbers.length; i++) {
            answer = ourNumbers[i] / ourNumbers[i + 1]
            input.innerText = answer
            ourNumbers = []
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
