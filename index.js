
class converter{
    constructor(inputcurrency, outputcurrency, inputValue, outputValue){
        this.inputcurrency = inputcurrency;
        this.outputcurrency = outputcurrency;
        this.inputValue = inputValue;
        this.outputValue = outputValue;
    }
    convertValue(){
       if(this.inputcurrency === "euro"){
            if(this.outputcurrency ==="dollar"){
                displayOutput(this.inputValue, this.outputValue, 1.01);
            }
            if(this.outputcurrency ==="Kroon"){
                displayOutput(this.inputValue, this.outputValue, 7.45);
            }
            if(this.outputcurrency ==="roebel"){
                displayOutput(this.inputValue, this.outputValue, 57.48);
            }
       }
       if(this.inputcurrency === "dollar"){
            if(this.outputcurrency ==="euro"){
                displayOutput(this.inputValue, this.outputValue, -1.01);
            }
            if(this.outputcurrency ==="Kroon"){
                displayOutput(this.inputValue, this.outputValue, 7.38);
            }
            if(this.outputcurrency ==="roebel"){
                displayOutput(this.inputValue, this.outputValue, 57);
            }
       }
       if(this.inputcurrency === "roebel"){
            if(this.outputcurrency ==="euro"){
                displayOutput(this.inputValue, this.outputValue, -0.017);
            }
            if(this.outputcurrency ==="Kroon"){
                displayOutput(this.inputValue, this.outputValue, -0.13);
            }
            if(this.outputcurrency ==="dollar"){
                displayOutput(this.inputValue, this.outputValue, -0.018);
            }
       }
    }
    
}

function displayOutput(inputValue, outputValue, koers){
    const convertedNumber = inputValue * koers;
    outputValue.value = convertedNumber;
}
document.querySelector("button").addEventListener('click', () => {

    const inputcurrency = document.querySelector('#inputcurrencyid').value;
    const outputcurrency = document.querySelector('#outputcurrencyid').value;
    const inputValue = document.querySelector('#userinputvalue').value;
    const outputValue = document.querySelector('#useroutputvalue');
    let converting = new converter(inputcurrency,outputcurrency,inputValue,outputValue);
    converting.convertValue();
});

document.querySelector('#inputcurrencyid').addEventListener('change', () => {
    decideCurrency('#inputcurrencyid','#inputspan');
});

document.querySelector('#outputcurrencyid').addEventListener('change', () => {
    decideCurrency('#outputcurrencyid','#outputspan');
});

function changeSpanInnerhtml(tag,currency){
    document.querySelector(tag).innerHTML = currency;
}

function decideCurrency(selector1, selector2){
    const inputcurrency = document.querySelector(selector1).value;
    if(inputcurrency === "euro"){
        changeSpanInnerhtml(selector2,"€");
    } else if (inputcurrency === "dollar"){
        changeSpanInnerhtml(selector2,"$");
    } else if (inputcurrency === "roebel"){
        changeSpanInnerhtml(selector2,"₽");
    } else {
        changeSpanInnerhtml(selector2,"kr.");
    }
}