var numberButton = document.querySelectorAll('[js-number-button')
var operationButton = document.querySelectorAll('[js-operation-button')
var equal = document.querySelector('[js-equal-button')
var allClear = document.querySelector('[js-clear-button]')
var previousNumber = document.querySelector('[js-previous-number]')
var currentNumber = document.querySelector('[js-current-number]')

class Calculator {
    constructor(previousNumber, currentNumber){
        this.previousNumber = previousNumber
        this.currentNumber = currentNumber
        this.clearOutput()
    }
    displayOutput(number) {
        this.currentNum = this.currentNum.toString() + number.toString()
    }
    updateDisplay() {
        this.currentNumber.innerText = this.currentNum
        this.previousNumber.innerText = this.previousNum
    }
    setOperand(operation) {
        this.operation = operation
        this.previousNum = this.currentNum
        this.currentNum = ''
    }
    computation() {
        var compute
        var prev = parseFloat(this.previousNum)
        var current = parseFloat(this.currentNum)
        switch (this.operation) {
            case '+':
                compute = prev + current
                break
            case '-':
                compute = prev - current
                break
            case 'x':
                compute = prev * current
                break
            case '/':
                compute = prev / current
                break
            default:
                return
        }
        this.currentNum = compute
        this.previousNum = ''
    }
    clearOutput() {
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
        calculator.clearOutput()
        calculator.updateDisplay()
})
operationButton.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.setOperand(button.innerText)
        calculator.updateDisplay()
    })
})
equal.addEventListener('click' , button => {
    calculator.computation()
    calculator.updateDisplay()
})