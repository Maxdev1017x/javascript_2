function imc(valorPeso, valorAltura) {
    const peso = valorPeso;
    const altura = valorAltura;

    const resultadoImc = peso / (altura * altura);
    console.log(`Seu imc é ${resultadoImc}`);
}

imc(84, 1.87);

// `` template string
// Para resolver a questão do resultado com muitos números, poderiamos usar o toFixed
