function calcularPrecos() {
    const idade = parseInt(document.getElementById('idade').value);
    const imc = parseFloat(document.getElementById('imc').value);
    
    if (isNaN(idade) || isNaN(imc)) {
      document.getElementById('resultado').innerHTML = 'Por favor, preencha a idade e o IMC corretamente.';
      return;
    }
    
    // Operadora A
    const precoBasicoA = 100 + (idade * 10 * (imc / 10));
    const precoStandardA = (150 + (idade * 15)) * (imc / 10);
    const precoPremiumA = (200 - (imc * 10) + (idade * 20)) * (imc / 10);
    
    document.getElementById('precoBasico').textContent = precoBasicoA.toFixed(2);
    document.getElementById('precoStandard').textContent = precoStandardA.toFixed(2);
    document.getElementById('precoPremium').textContent = precoPremiumA.toFixed(2);
  
    // Operadora B
    let fatorComorbidadeB = 1;
  
    if (imc < 18.5) {
      fatorComorbidadeB = 10; // Abaixo do peso
    } else if (imc < 24.9) {
      fatorComorbidadeB = 1; // Normal
    } else if (imc < 29.9) {
      fatorComorbidadeB = 6; // Sobrepeso
    } else if (imc < 34.9) {
      fatorComorbidadeB = 10; // Obesidade
    } else if (imc < 39.9) {
      fatorComorbidadeB = 20; // Obesidade mórbida grave
    } else {
      fatorComorbidadeB = 30; // Obesidade mórbida muito grave
    }
  
    const precoBasicoB = 100 + (fatorComorbidadeB * 10 * (imc / 10));
    const precoStandardB = (150 + (fatorComorbidadeB * 15)) * (imc / 10);
    const precoPremiumB = (200 - (imc * 10) + (fatorComorbidadeB * 20)) * (imc / 10);
    
    document.getElementById('precoBasicoB').textContent = precoBasicoB.toFixed(2);
    document.getElementById('precoStandardB').textContent = precoStandardB.toFixed(2);
    document.getElementById('precoPremiumB').textContent = precoPremiumB.toFixed(2);
  }
  // Recuperar informações do localStorage e preencher os campos na tela principal
document.getElementById('nome').value = localStorage.getItem('username');
document.getElementById('idade').value = localStorage.getItem('idade');
document.getElementById('imc').value = localStorage.getItem('imc');

  