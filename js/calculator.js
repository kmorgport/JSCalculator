"use strict"
const number = document.querySelectorAll('[data-number]');
const operation = document.querySelectorAll('[data-operation]');
const clear = document.querySelector('[data-clear]');
const equals = document.querySelector('[data-equals]');
const firstNumer = document.querySelector('[data-first-number]');
const secondNumer = document.querySelector('[data-second-number]');
const opdisplay = document.querySelector('[data-display-oper]');

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

function math(){
    let first = number.forEach(button=>{
        button.addEventListener('click',()=>{
            console.log(button.textContent)
            firstNumer.textContent = button.textContent
        })
    })

    let op = operation.forEach(button=>{
        button.addEventListener('click',()=>{
            opdisplay.textContent = button.textContent
        })
    })

    let second = number.forEach(button=>{
        button.addEventListener('click',()=>{
            console.log(button.textContent)
            secondNumer.textContent = button.textContent
        })
    })
}
math()
