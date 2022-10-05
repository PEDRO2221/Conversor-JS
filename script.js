//Calculador de notas
var nota1 = 10;
var nota2 = 4;
var nota3 = 5;
var nota4 = 10;
media = (nota1 + nota2 + nota3 + nota4) / 4;
if (media > 7) {
  console.log('Aprovado');
  console.log(media);
} else {
  console.log('Reprovado');
  console.log(media);
}

//Conversor de Moedas
function Converter() {
  var val = document.getElementById('valor').value;
  var valor = val * 5.16;
  var result = 'Seu valor em Reais é ' + valor.toFixed(2) + ' R$';
  var valorGeral = document.getElementById('valorConvertido');
  valorGeral.innerHTML = result;
}
function Converter2() {
  var val = document.getElementById('valor').value;
  var valor = val * 0.19;
  var result = 'Seu valor em Dolar é ' + valor.toFixed(2) + ' R$';
  var valorGeral = document.getElementById('valorConvertido');
  valorGeral.innerHTML = result;
}
