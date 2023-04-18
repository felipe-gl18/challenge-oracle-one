var textareaValue = document.querySelector("textarea")
var criptoButton = document.querySelector("#criptografar")
var descriptoButton = document.querySelector("#descriptografar")
var copyButton = document.querySelector(".copyButton")
var resultWrited = document.querySelector(".result")

document.querySelector("aside>div").style.display = "block"
document.querySelector(".copyButton").style.display = 'none'
document.querySelector(".result").style.display = 'none'

criptoButton.addEventListener("click", () => {
    let finalResult = criptoTextareaValue()
    writeResultOnAsideElement(finalResult)
    console.log(finalResult)
})

copyButton.addEventListener('click', () => {
    var resultWrited = document.querySelector(".result")
    resultWrited.select()
    document.execCommand("copy")
    alert(resultWrited.value)
})

descriptoButton.addEventListener("click", () => {
    let finalResult = criptoTextareaValue();
    let descripto = descriptoTextareaValue(textareaValue.value)
    writeResultOnAsideElement(descripto)
    console.log(descripto);
})

function criptoTextareaValue() {
    let arrayValue = textareaValue.value.split('')
    arrayValue.forEach((data, index) => {
        if (data == "e") {
            arrayValue[index] = "enter"
        }
        if (data == "i") {
            arrayValue[index] = "imes"
        }
        if (data == "a") {
            arrayValue[index] = "ai"
        }
        if (data == "o") {
            arrayValue[index] = "ober"
        }
        if (data == "u") {
            arrayValue[index] = "ufat"
        }
    })
    return arrayValue.join("")
}

function descriptoTextareaValue(criptovalue) {
    var keys = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    var criptovalue = criptovalue

    for (var i = 0; i < keys.length; i++) {
        if (criptovalue.includes(keys[i][1])) {
            criptovalue = criptovalue.replaceAll(keys[i][1], keys[i][0]);
        }
    }
    return criptovalue;
}

function writeResultOnAsideElement(text) {
    document.querySelector("aside>div").style.display = "none"
    document.querySelector(".copyButton").style.display = 'block'
    document.querySelector(".result").style.display = 'block'
    document.querySelector(".result").value = text
}