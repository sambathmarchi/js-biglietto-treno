let nome = document.getElementById("nome");
let kilometri = document.getElementById("kilometri");
let genera = document.getElementById("genera");
let eta = document.getElementById("eta");
let prezzoPerKm = 0.21
let annulla = document.getElementById("annulla");








    
    genera.addEventListener("click", function(){
    let km =parseInt(kilometri.value);
    let prezzoTotale = (km * prezzoPerKm);
    let etaValore = eta.value;
    
    console.log("nome a = ", nome.value);
    console.log("eta = ", etaValore);  
   
    if (etaValore == "senior") {
        (prezzoTotale *= 0.6);
        console.log("prezzo totale if = ", prezzoTotale);
        document.getElementById("costo").innerHTML = prezzoTotale.toFixed(2);
        document.getElementById("codice").innerHTML = "933223";
        document.getElementById("carrozza").innerHTML = "9";
        document.getElementById("offerta").innerHTML = "Biglietto " + etaValore;
        document.getElementById("nomePasseggero").innerHTML = nome.value;


    }
    
    
    else if (etaValore == "minorenne") {

    (prezzoTotale *= 0.8);
    console.log("prezzo totale 2if = ", prezzoTotale);
    document.getElementById("costo").innerHTML = prezzoTotale.toFixed(2);
    document.getElementById("codice").innerHTML = "994443";
    document.getElementById("carrozza").innerHTML = "6";
    document.getElementById("offerta").innerHTML = "Biglietto " + etaValore;
    document.getElementById("nomePasseggero").innerHTML = nome.value;
}
    

else if (etaValore == "standard") {

    (prezzoPerKm * km) ;
    console.log("prezzo totale 3if = ", prezzoTotale);
    document.getElementById("costo").innerHTML = prezzoTotale.toFixed(2);
    document.getElementById("codice").innerHTML = "992223";
    document.getElementById("carrozza").innerHTML = "5";
    document.getElementById("offerta").innerHTML = "Biglietto " + etaValore;
    document.getElementById("nomePasseggero").innerHTML = nome.value;
}


})
    
  annulla.addEventListener("click", function(){
    if (kilometri.value !=null || nome.value !=null) {
        kilometri.value = null;
        nome.value =null;
        document.getElementById("costo").innerHTML = null;
        document.getElementById("codice").innerHTML = null;
        document.getElementById("carrozza").innerHTML = null;
        document.getElementById("offerta").innerHTML =  null;
        document.getElementById("nomePasseggero").innerHTML = null;
    }
       
})