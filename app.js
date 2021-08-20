
/*
function getProductValue(productID, price, increase) {
    const product = document.getElementById(productID + '-value')
    let productNumber = product.value
    const productValue = parseFloat(productNumber)
    if (increase == true) {
        productNumber = productValue + 1
    } else if (productValue > 0) {
        productNumber = productValue - 1

    }
    product.value = productNumber

    const phoneAmount = document.getElementById(productID + 'Amount')
    phoneAmount.innerText = productNumber * price

    totalCalculation()
}

// total Calculation
function getInputValue(input) {
    const productAmount = document.getElementById(input + '-value')
    const productAmountText = parseInt(productAmount.value)
    return productAmountText
}
function totalCalculation() {
    const phoneTotal = getInputValue('phone') * 1219
    const caseTotal = getInputValue('case') * 59
    const subTotal = phoneTotal + caseTotal
    const Tax = subTotal / 10
    const totalPrice = subTotal + Tax

    document.getElementById('subTotal-amount').innerText = subTotal
    document.getElementById('subTotal-Tax').innerText = Tax
    document.getElementById('total-price').innerText = totalPrice

}


// phone button
document.getElementById('phonePlus-btn').addEventListener('click', function () {
    getProductValue('phone', 1219, true)
})

document.getElementById('phoneMinus-btn').addEventListener('click', function () {
    getProductValue('phone', 1219, false)
})
// case-button
document.getElementById('casePlus-btn').addEventListener('click', function () {
    getProductValue('case', 59, true)
})

document.getElementById('caseMinus-btn').addEventListener('click', function () {
    getProductValue('case', 59, false)
})
*/

/*
phoneMinus-btn
phone-value
phonePlus-btn
phoneAmount

caseMinus-btn
case-value
casePlus-btn
caseAmount

subTotal-amount
subTotal-Tax
total-price
*/
function getInputValue(Input, price, increase) {
    const productInput = document.getElementById(Input + '-value')
    let productValue = productInput.value
    const productInputInt = parseFloat(productValue)
    if (increase == true) {
        productValue = productInputInt + 1
    } else if (productInputInt > 0) {
        productValue = productInputInt - 1
    }
    productInput.value = productValue

    const amount = document.getElementById(Input + 'Amount')
    amount.innerText = productValue * price
    totalCalculation()
}
// sub total function
function getValue(product) {
    const productValue = document.getElementById(product + '-value')
    const productValueInt = parseInt(productValue.value)
    return productValueInt

}
function totalCalculation() {
    const phoneTotal = getValue('phone') * 1219
    const caseTotal = getValue('case') * 59
    const subTotal = phoneTotal + caseTotal
    const Tax = subTotal / 10
    const totalPrice = subTotal + Tax

    document.getElementById('subTotal-amount').innerText = subTotal
    document.getElementById('subTotal-Tax').innerText = Tax
    document.getElementById('total-price').innerText = totalPrice

}

// phone plus minus click button
document.getElementById('phoneMinus-btn').addEventListener('click', function () {
    getInputValue('phone', 1219, false)
})
document.getElementById('phonePlus-btn').addEventListener('click', function () {
    getInputValue('phone', 1219, true)
})
// case plus minus click button
document.getElementById('caseMinus-btn').addEventListener('click', function () {
    getInputValue('case', 59, false)
})
document.getElementById('casePlus-btn').addEventListener('click', function () {
    getInputValue('case', 59, true)
})