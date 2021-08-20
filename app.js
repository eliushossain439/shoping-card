

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


