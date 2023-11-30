function main(x) {
    var somatorio = [];

    // Valida se é número inteiro positivo
    if (!Number.isInteger(x) || x < 0) {
        console.log("Try again");
    }

    // Percorre todos os numeros entre 1 e o número escolhido
    // adiciona os números divisíveis por 3 e 5 no array de somatório
    for (var i = 1; i < x; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somatorio.push(i);
        }
    }

    // Somar todos os valores inferiores ao número passado.
    var somatorio = somatorio.filter((num) => num < x);
    var result = somatorio.reduce((a, b) => a + b);

    // Returns
    console.log(
        "Números inferiores ao passado divisíveis por 3 e 5:",
        somatorio,
        "Resultado:",
        result
    );
}

main(10);
main(11);