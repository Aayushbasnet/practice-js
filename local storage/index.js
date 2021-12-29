class Calculator {
    constructor(prevTextElement, currTextElement) {
        this.prevTextElement = prevTextElement;     // show previous operand in top display
        this.currTextElement = currTextElement;     // show current operand in top display
        this.clear();       // clears display and set values to default when app starts
    }

    // clear the display and set values to default
    clear() {
        this.currOperand = '';      // clearing current value
        this.prevOperand = '';      // clearing previous value
        this.operation = undefined;     //clearing operation (eg. +, -, *, /, etc.)
    }

    delete() {
        this.currOperand = this.currOperand.slice(0,-1);
    }

    appendNumber(number) {
        // to check if string has multiple '.'
        if(number === '.' && this.currOperand.includes('.')){
            return;     // stops from executing further
        }
        this.currOperand += number;     //appending values or number in current operand
    }

    chooseOperation(operation){
        // check current operand is empty and not update ui of previous text element
        if(this.currOperand === ''){
            return;     // stops from executing futher
        }

        // make calculations for two values when second operation is clicked
        if(this.prevOperand !== ''){
            this.compute();
        }

        this.operation = operation;
        this.prevOperand = this.currOperand;
        this.currOperand = '';
    }

    // to add commas in larger numbers
    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)) {
            integerDisplay = '';
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits : 0});
        }
        if(decimalDigits != null){ 
            return `${integerDisplay}.${decimalDigits}`;
        }else{
            return integerDisplay;
        }
    }

    compute() {
        var computation = -1;     //  result of calculations
        const preValue = parseFloat(this.prevOperand);        // parsing string to float
        const currValue = parseFloat(this.currOperand);        // parsing string to float

        // don't equals if either prevOperand or currOperand is empty
        if(isNaN(preValue) || isNaN(currValue)){
            return;
        }

        
        //computing values based on operations
        switch(this.operation){
            case '+':
                computation = preValue + currValue;
                break;
            
            case '-':
                computation = preValue - currValue;
                break;
            
            case '*':
                computation = preValue * currValue;
                break;
            
            case '÷':
                computation = preValue / currValue;
                break;
            
            default:
                return 'invalid';     
        }
        this.currOperand = computation;
        this.operation = undefined;
        this.prevOperand = '';
    }

    updateDisplay() {
        this.currTextElement.innerText = this.getDisplayNumber(this.currOperand);      // updating ui in current text element
        // console.log(this.getDisplayNumber(this.currOperand));
        if(this.operation != null){
            this.prevTextElement.innerText = `${this.getDisplayNumber(this.prevOperand)} ${this.operation}`;
        }else{
            this.prevTextElement.innerText = '';
        }


    }
}


const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const allClearBtn = document.querySelector('[data-all-clear]');
const prevTextElement = document.querySelector('[data-previous-operand]');
const currTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(prevTextElement, currTextElement);

// clicking number buttons
numberBtn.forEach(number => {
    number.addEventListener('click', () =>{
        calculator.appendNumber(number.innerText);
        calculator.updateDisplay();
    })
});

// clicking operation buttons
operationBtn.forEach(number => {
    number.addEventListener('click', () =>{
        calculator.chooseOperation(number.innerText);
        calculator.updateDisplay();
    })
});

// clicking equals button
equalsBtn.addEventListener('click', () =>{
    calculator.compute();
    calculator.updateDisplay();
});

// clicking clear button
allClearBtn.addEventListener('click', () =>{
    calculator.clear();
    // console.log("clear");
    calculator.updateDisplay();
});

// clicking delete button
deleteBtn.addEventListener('click', () =>{
    calculator.delete();
    calculator.updateDisplay();
});