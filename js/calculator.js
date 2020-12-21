"use strict"
class Calculator{
    constructor(firstNumerDisplay, secondNumerDisplay){
        this.firstNumerDisplay = firstNumerDisplay
        this.secondNumerDisplay = secondNumerDisplay
        this.clear();
    }

    clear(){
        this.firstOperand = ''
        this.secondOperand = ''
        this.operation = undefined
    }

    appendNumber(number){
        if(number === '.' && this.firstOperand.includes('.'))return
        this.firstOperand = this.firstOperand.toString() + number.toString()
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
    }
}



const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const clear = document.querySelector('[data-clear]');
const equals = document.querySelector('[data-equals]');
const firstNumerDisplay = document.querySelector('[data-first-number]');
const secondNumerDisplay = document.querySelector('[data-second-number]');
const operandisplay = document.querySelector('[data-display-oper]');

const calculator = new Calculator(firstNumerDisplay,secondNumerDisplay);

number.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})



// number.forEach(button=>{
//     button.addEventListener('click',()=>{
//         console.log(button.textContent)
//         firstNumer.textContent = button.textContent
//     })
// })
//
// var operator = operation.forEach(button=>{
//     button.addEventListener('click',()=>{
//         opdisplay.textContent = button.textContent
//     })
// })
//
// function math(){
//     number.forEach(button=>{
//         button.addEventListener('click',()=>{
//             console.log(button.textContent)
//             firstNumer.textContent = button.textContent
//         })
//     })
//
//     operation.forEach(button=>{
//         button.addEventListener('click',()=>{
//             opdisplay.textContent = button.textContent
//         })
//     })
//
//     number.forEach(button=>{
//         button.addEventListener('click',()=>{
//             console.log(button.textContent)
//             secondNumer.textContent = button.textContent
//         })
//     })
// }
// math()
