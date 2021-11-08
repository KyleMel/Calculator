var equal = document.querySelector('[ja-equal-button')
var allClear = document.querySelector('[js-clear-button]')
var numberButton = document.querySelectorAll('[js-number-button')
var previousNumber = document.querySelector('[js-previous-number]')
var currentNumber = document.querySelector('[js-current-number]')

class Calculator {
    constructor(previousNumber, currentNumber){
        this.previousNumber = previousNumber
        this.currentNumber = currentNumber
        this.clear()
    }
    displayOutput(number) {
        this.currentNum = this.currentNum.toString() + number.toString()
    }
    updateDisplay() {
        this.currentNumber.innerText = this.currentNum
    }
    clearOutput() {

    }
    /* Computation() {
        switch (number) {
            case '+':
                break
            case '-':
                break
            case '*':
                break
            case '/':
                break
            default:
                return
        }
    } */
    clear() {
        this.currentNum = ''
        this.previousNum = ''
    }
}

const calculator = new Calculator(previousNumber, currentNumber)
numberButton.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.displayOutput(button.innerText)
        calculator.updateDisplay()
    })
})
allClear.addEventListener('click' , button => {
        calculator.clear()
        calculator.updateDisplay()
})