function CalcularIMC() {
  let inputI = document.querySelector("#idade");
  let inputA = document.querySelector("#altura");
  let inputM = document.querySelector("#massa");
  let spanIMC = document.querySelector("#IMC");
  let idade = parseInt(inputI.value);
  let altura = parseFloat(inputA.value);
  let massa = parseFloat(inputM.value);
  let IMC;
  
 if (idade <= 20 || idade >= 60) {
   IMC = "Os dados fornecidos estão fora do intevalo permitido!"
 } else {
   IMC = massa/altura**2
 }
  spanIMC.innerHTML = `<u><h2>Seu IMC é: ${IMC.toFixed(2)}</h2></u>`;
}