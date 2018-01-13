var dom=null;

function GetElementAmpersand() {
    
        dom = document.getElementById("Input");
    
        Input.addEventListener("blur",ConvertAmpersands,false);
    
}

function ConvertAmpersands() {
    
    var NewText = " and ";
    var NewString = "";
    var inputstring= dom.value;
    var Outputstring = inputstring.replace(/&/g, NewText);

    Output = document.getElementById("Output");
    Output.value = Outputstring;
    
    
    
    
}

window.addEventListener("load", GetElementAmpersand, false);