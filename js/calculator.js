"use strict"
class Calculator{
    //creates calculator object
    constructor(firstNumerDisplay, secondNumerDisplay){
        this.firstNumerDisplay = firstNumerDisplay
        this.secondNumerDisplay = secondNumerDisplay
        //function to clear the calculator
        this.clear();
    }

    clear(){
        //will set display and values to empty strings
        this.firstOperand = ''
        this.secondOperand = ''
        this.operation = undefined
    }

    appendNumber(number){
        //prevents a period from being just a decimal, prevents more than one decimal
        if(number === '.' && this.secondOperand.includes('.'))return
        //sets the calculator (this.) firstOperand to a string plus
        this.secondOperand = this.secondOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        if(this.secondOperand === '')return
        if(this.firstOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.firstOperand = this.secondOperand
        this.secondOperand =  ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.firstOperand)
        const current = parseFloat(this.secondOperand)
        if (isNaN(prev)||isNaN(current))return
        switch (this.operation){
            case '+':
                computation = prev+current
                break
            case '-':
                computation = prev-current
                break
            case '*':
                computation = prev*current
                break
            case '/':
                computation = prev/current
                break
            default:
                break
        }
        this.secondOperand = computation
        this.operation = undefined
        this.firstOperand = ''
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        } else{
            integerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }

    updateDisplay(){
        this.secondNumerDisplay.innerText = this.getDisplayNumber(this.secondOperand)
        if (this.operation  != null){
            this.firstNumerDisplay.innerText = `${this.getDisplayNumber(this.firstOperand)} ${this.operation}`
        } else{
            this.firstNumerDisplay.innerText = ''
        }
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

operation.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equals.addEventListener('click', button=>{
    calculator.compute()
    calculator.updateDisplay()
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
