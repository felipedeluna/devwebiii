// Seleciona os elementos do DOM
var buttonMinus = document.getElementById("button-minus");
var buttonPlus = document.getElementById("button-plus");
var inputTicket = document.getElementById("input-ticket");

// Adiciona um evento de clique ao botão de menos
buttonMinus.addEventListener("click", function() {
  // Obtém o valor atual do campo de entrada
  var value = parseInt(inputTicket.value);
  // Verifica se o valor é maior que o mínimo
  if (value > inputTicket.min) {
    // Subtrai um do valor
    value--;
    // Atualiza o campo de entrada com o novo valor
    inputTicket.value = value;
  }
});

// Adiciona um evento de clique ao botão de mais
buttonPlus.addEventListener("click", function() {
  // Obtém o valor atual do campo de entrada
  var value = parseInt(inputTicket.value);
  // Verifica se o valor é menor que o máximo
  if (value < inputTicket.max) {
    // Adiciona um ao valor
    value++;
    // Atualiza o campo de entrada com o novo valor
    inputTicket.value = value;
  }
});

