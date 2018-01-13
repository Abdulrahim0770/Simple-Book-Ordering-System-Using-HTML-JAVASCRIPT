xhtmlPrice = 19.99;
phpPrice = 86.00;
jqueryPrice = 55.00;

function GetBookQuantities() {
  xhtmlQuantity = document.getElementById("book_1").value;
  phpQuantity = document.getElementById("book_2").value;
  jqueryQuantity = document.getElementById("book_3").value;

  if( xhtmlQuantity === "" || phpQuantity === "" || jqueryQuantity === "") {
    window.alert("One or more input fields is missing!");
    return;
  }

  WriteOutput(xhtmlQuantity, phpQuantity, jqueryQuantity);

}

function WriteOutput(xhtmlQuantity, phpQuantity,jqueryQuantity) {
  
    xhtmlTotalCost = Number(xhtmlQuantity * xhtmlPrice).toFixed(2);
    phpTotalCost = Number(phpQuantity * phpPrice).toFixed(2);
    jqueryTotalCost = Number(jqueryQuantity * jqueryPrice).toFixed(2);

  
    xhtmlOutput = "Basic XHTML (Quantity = " + xhtmlQuantity + "): " + xhtmlTotalCost;
  
    phpOutput = "Intro to PHP (Quantity = " + phpQuantity + "): " + phpTotalCost;
  
    jqueryOutput = "Advanced jQuery (Quantity = " + jqueryQuantity + "): " + jqueryTotalCost;

    totalCost = (parseFloat(xhtmlTotalCost) + parseFloat(phpTotalCost) + parseFloat(jqueryTotalCost));
  
    totalOutput = "Total Cost: " + Number(totalCost).toFixed(2);

    textOutput = xhtmlOutput + "<br>" + phpOutput + "<br>" + jqueryOutput + "<br><br>" + totalOutput;


    document.getElementById("output").innerHTML = textOutput;

}
