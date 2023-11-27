function traingle(){
    var base = Number (prompt("Enter base value"))
    var height = Number (prompt("Enter height value"))
    var answer = 1/2 * base * height
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("displayResult").innerHTML = converted
}
function square(){
    var base = Number (prompt("Enter base value"))
    var answer = base**2
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("displayResult2").innerHTML = converted 
}
function Quadilateral(){
    var base = Number (prompt("Enter base value"))
    var height = Number (prompt("Enter height value"))
    var answer = base * height
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("displayResult3").innerHTML = converted
}
function Rhombus(){
    var p = Number (prompt("Enter diagonal value"))
    var q = Number (prompt("Enter diagonal value"))
    var answer = p*q/2
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("displayResult4").innerHTML = converted
}
function Trapezium(){
    var a = Number (prompt("Enter base value"))
    var b = Number (prompt("Enter base value"))
    var h = Number (prompt("Enter height value"))
    var answer = 1/2*(a+b)*h
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("displayResult5").innerHTML = converted
}
function parallelogram(){
    var base = Number (prompt("Enter base value"))
    var height = Number (prompt("Enter height value"))
    var answer = base * height
    var converted = answer.toFixed(2) + "cm²"
    document.getElementById("displayResult6").innerHTML = converted
}
function BMI(){
    var  weight = Number (prompt("Enter weight value"))
    var height = Number (prompt("Enter height value"))
    var answer = weight * height
    var converted = answer.toFixed(2)+ "kg/m²"
    document.getElementById("displayResult7").innerHTML = converted
}