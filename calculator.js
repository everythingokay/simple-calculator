var value1 = document.getElementById('value1')
var value2 = document.getElementById('value2')
var add = document.getElementById('button-add')
var subtract = document.getElementById('button-subtract')
var multiply = document.getElementById('button-multiply')
var divide = document.getElementById('button-divide')
var clear = document.getElementById('button-clear')
var result = document.getElementById('result')

add.addEventListener("click", function() {
    result.innerHTML = parseInt(value1.value) + parseInt(value2.value)
})

subtract.addEventListener("click", function() {
    result.innerHTML = parseInt(value1.value) - parseInt(value2.value)
})

multiply.addEventListener("click", function() {
    result.innerHTML = parseInt(value1.value) * parseInt(value2.value)
})

divide.addEventListener("click", function() {
    result.innerHTML = parseInt(value1.value) / parseInt(value2.value)
})

clear.addEventListener("click", function() {
    result.innerHTML = ' '; 
    value1.value = ' ';
    value2.value = ' ';
})