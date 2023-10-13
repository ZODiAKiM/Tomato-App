//Answer logic
const addAns = document.querySelector('.addAnswer').value
const subAns = document.querySelector('.subAnswer').value
const divAns = document.querySelector('.divAnswer').value
const mulAns = document.querySelector('.mulAnswer').value
const remAns = document.querySelector('.remAnswer').value
const addAns2 = document.querySelector('.addAnswer2').value
const addSubmit = document.querySelector('.addSubmission')
const subSubmit = document.querySelector('.subSubmission')
const divSubmit = document.querySelector('.divSubmission')
const mulSubmit = document.querySelector('.mulSubmission')
const remSubmit = document.querySelector('.remSubmission')
const addSubmit2 = document.querySelector('.addSubmission2')
const inputs = document.querySelectorAll('input')
const btnClear = document.querySelectorAll('.clearButton')
const submits = document.querySelectorAll('.submits')

//Clear all fields
const clearFields = btnClear.forEach(btn => btn.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = ''

    })
    submits.forEach(submit => {
        submit.innerText = ''
        window.location.reload()
    })
}))

window.onload = clearFields



//addition submission handler
document.querySelector('.addButton').addEventListener('click', (e) => {
        if (addAns === ''  || addAns !== '2') {
            addSubmit.innerText = 'Wrong Answer. Please input a valid number and use the calculator'
            addSubmit.style.color = 'crimson'
        } else {
            addSubmit.innerText = 'Congratulations. Try the next challenge'
            addSubmit.style.color = 'green'
        }        
})



//subraction submission handler
document.querySelector('.subButton').addEventListener('click', (e) => {

    if(subAns === '' || subAns !== '6') {
        subSubmit.innerText = 'Wrong Answer. Please input a valid number and use the calculator'
        subSubmit.style.color = 'crimson'
    } else {
        subSubmit.innerText = 'Congratulations. Try the next challenge '
        subSubmit.style.color = 'green'
    }
})


//division submission handler
document.querySelector('.divButton').addEventListener('click', (e) => {

    if(divAns ==! '6' || divAns === '') {
        divSubmit.innerText = 'Wrong Answer. Please input a valid number and use the calculator'
        divSubmit.style.color = 'crimson'
    } else {
        divSubmit.innerText = 'Congratulations. Try the next challenge '
        divSubmit.style.color = 'green'
    }
})

//multiplication submission handler
document.querySelector('.mulButton').addEventListener('click', (e) => {

    if(mulAns ==! '3' || mulAns === '') {
        mulSubmit.innerText = 'Wrong Answer. Please input a valid number and use the calculator'
        mulSubmit.style.color = 'crimson'
    } else {
        mulSubmit.innerText = 'Congratulations. Try the next challenge '
        mulSubmit.style.color = 'green'
    }  
})


//remainder submission handler
document.querySelector('.remButton').addEventListener('click', (e) => {

    if(remAns ==! '2' || remAns === '') {
        remSubmit.innerText = 'Wrong Answer. Please input a valid number and use the calculator'
        remSubmit.style.color = 'crimson'
    } else {
        remSubmit.innerText = 'Congratulations. Try the next challenge '
        remSubmit.style.color = 'green'
    }  
})

//addition submission handler
document.querySelector('.addButton2').addEventListener('click', (e) => {
    if (addAns2 === ''  || addAns !== '2') {
        addSubmit2.innerText = 'Wrong Answer. Please input a valid number and use the calculator'
        addSubmit2.style.color = 'crimson'
    } else {
        addSubmit2.innerText = 'Congratulations. Try the next challenge'
        addSubmit2.style.color = 'green'
    }        
})

//Calculator logic
const display1 = document.querySelector('.display-1')
const display2 = document.querySelector('.display-2')
const tempResult = document.querySelector('.temp-result')
const number = document.querySelectorAll('.number')
const operation = document.querySelectorAll('.operation')
const equal = document.querySelector('.equal')
const clearAll = document.querySelector('.all-clear')
const clearText = document.querySelector('.last-entity-clear')
const img = document.querySelector('.img')

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;


number.forEach(num => {
    num.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true
        } else if (e.target.innerText === '.' && haveDot) {
            return 
        }
        dis2Num += e.target.innerText
        display2.innerText = dis2Num
    })
})

operation.forEach(op => {
    op.addEventListener('click', (e) => {
        if(!dis2Num) result
        haveDot = false 
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation) {
            mathOperation()
        } else {
            result = parseFloat(dis2Num)
        }
        clearVar(operationName)
        lastOperation = operationName
    })
})

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' '
    display1.innerText = dis1Num
    display2.innerText = ''
    dis2Num = ''
    tempResult.innerText = result
}

function mathOperation() {
    if(lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(dis2Num)
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num)
    }  else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num)
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num)
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num)
    }
}

equal.addEventListener('click', (e) => {
    if(!dis1Num || !dis2Num) return;
    haveDot = false;
    mathOperation()
    clearVar()
    display2.innerText = result
    tempResult.innerText = ''
    dis2Num = result
    dis1Num = ''
})

clearAll.addEventListener('click', (e) => {
    display1.innerHTML = ''
    display2.innerHTML = ''
    dis1Num = ''
    dis2Num = ''
    result = ''
    tempResult.innerHTML = ''
})

clearText.addEventListener('click', (e) => {
    display2.innerText = ''
    dis2Num = ''
})
