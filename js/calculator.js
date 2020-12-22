"use strict"
class Calculator{
    //creates calculator object
    //firstNumerDisplay, SecondNumerDisplay allow the button values to appear in the actual display
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
    //the (number) will be the value of the key you strike
    appendNumber(number){
        //prevents a period from being just a decimal, prevents more than one decimal
        if(number === '.' && this.secondOperand.includes('.'))return
        //sets the calculator (this.) secondOperand to a string plus number
        this.secondOperand = this.secondOperand.toString() + number.toString()
    }
    //operation is the value of operation key
    chooseOperation(operation){
        //if leftmost number is empty end function
        if(this.secondOperand === '')return
        //if rightmost number is not empty, run computation
        if(this.firstOperand !== ''){
            this.compute()
        }
        //calculator's operation = the value of the operator key value
        this.operation = operation
        //the leftmost display becomes the value of the rightmost display
        this.firstOperand = this.secondOperand
        //the right most display becomes an empty string (so a new number may be input)
        this.secondOperand =  ''
    }

    compute(){
        let computation
        //leftmost value of the left most number is parsed and put into a variable
        const prev = parseFloat(this.firstOperand)
        //right most value is parsed and stored
        const current = parseFloat(this.secondOperand)
        //checks to ensure both are numbers or just returns
        if (isNaN(prev)||isNaN(current))return
        //its.....its just some math.....
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
        //right most value becomes the number you just computed (so it can be displayed)
        this.secondOperand = computation
        //the calculator.operation property is set to undefined
        this.operation = undefined
        //the leftmost value is set to an empty string
        this.firstOperand = ''
    }
    //the work horse function (imo)
    getDisplayNumber(number){
        //stores the value your button passes
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

equals.addEventListener('click', ()=>{
    calculator.compute()
    calculator.updateDisplay()
})

clear.addEventListener('click', ()=>{
    calculator.clear()
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
