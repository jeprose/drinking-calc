"use strict";
var inputs;
window.addEventListener('DOMContentLoaded', function () {
    inputs = {
        liquidBox: document.getElementById("amount"),
        percentageBox: document.getElementById("percentage"),
        ounces: document.getElementById("ounces"),
        milliliters: document.getElementById("milliliters")
    };
    var key;
    for (key in inputs) {
        var field = inputs[key];
        field.addEventListener("input", evaluate);
    }
});
function evaluate() {
    var percentage = Number(inputs.percentageBox.value);
    var amount = Number(inputs.liquidBox.value);
    if (isNaN(amount) || inputs.liquidBox.value === "") {
        inputs.liquidBox.setCustomValidity("Not a number");
        setParagraphText(NaN);
        return;
    }
    if (isNaN(percentage) || inputs.percentageBox.value === "") {
        inputs.percentageBox.setCustomValidity("Not a number");
        setParagraphText(NaN);
        return;
    }
    if (inputs.ounces.checked) {
        var value = Number(percentage) * Number(amount) / 0.6 / 100;
        setParagraphText(value);
        return;
    }
    else {
        var value = Number(percentage) * Number(amount) / 17.7441 / 100;
        setParagraphText(value);
        return;
    }
}
function setParagraphText(number) {
    var paragraph = document.getElementById("alc-sentence");
    if (!paragraph)
        return;
    if (isNaN(number)) {
        paragraph.textContent = "";
        return;
    }
    paragraph.textContent = "Your alcoholic beverage is ".concat(parseFloat(number.toFixed(3)), " standard drinks.");
}
