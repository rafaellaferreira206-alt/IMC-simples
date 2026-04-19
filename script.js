function classificacaoIMC() {
  var peso = Number(window.document.getElementById("txtpeso").value);
  var altura = Number(window.document.getElementById("txtaltura").value);
  var txtimc = window.document.getElementById("txtimc");
  var txtclassificacao = window.document.getElementById("txtclassificacao");
  var classificacao = "";

  var imc = peso / (altura * altura);

  if (imc < 25) {
    classificacao = "Você está no peso ideal!";
  } else {
    classificacao = "Você não está no peso ideal!";
  }

  txtimc.value = imc.toFixed(2);
  txtclassificacao.value = classificacao;
}