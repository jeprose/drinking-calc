"use strict";
let inputs:any;
window.addEventListener('DOMContentLoaded',()=>{
    inputs = {
        liquidBox: (<HTMLInputElement>document.getElementById("amount")) ,
        percentageBox:(<HTMLInputElement>document.getElementById("percentage")),
        ounces: (<HTMLInputElement>document.getElementById("ounces")),
        milliliters: (<HTMLInputElement>document.getElementById("milliliters")),
    }
    let key: keyof typeof inputs;
    for (key in inputs){
        let field: HTMLInputElement = inputs[key];  
        field.addEventListener("input",evaluate);
    }
});

function evaluate(this: HTMLElement){
    let percentage :number = Number(inputs.percentageBox.value);
    let amount : number = Number(inputs.liquidBox.value);
    if(isNaN(amount) || inputs.liquidBox.value === ""){
        inputs.liquidBox.setCustomValidity("Not a number");
        setParagraphText(NaN);
        return;
    }
    if(isNaN(percentage) || inputs.percentageBox.value === "" ){
        inputs.percentageBox.setCustomValidity("Not a number");
        setParagraphText(NaN);
        return;
    }
    if(inputs.ounces.checked){
        let value = Number(percentage)*Number(amount)/0.6/100;
        setParagraphText(value);
        return;
    }
    else{
        let value = Number(percentage)*Number(amount)/17.7441/100;
        setParagraphText(value);
        return;
    }

}
function setParagraphText(number: number){
    let paragraph = document.getElementById("alc-sentence");
    if(!paragraph) return;
    if(isNaN(number)){
        paragraph.textContent = "";
        return;
    }
    paragraph.textContent = `Your alcoholic beverage is ${parseFloat(number.toFixed(3))} standard drinks.`
}