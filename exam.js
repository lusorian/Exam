function encontrarNumero() {
    var arregloInput = document.getElementById("arreglo");
    var posicionInput = document.getElementById("posicion");
    var resultadoElement = document.getElementById("resultado1");
    var resultadoErrorElement = document.getElementById("resultado2");

    var arreglo = arregloInput.value.split(" ");
    var posicion = parseInt(posicionInput.value);

    if (!/^[1-9]\d*$/.test(posicionInput.value)) {
      resultadoErrorElement.textContent = "Ingresa un número positivo entero.";
      resultadoElement.textContent = "";
      return;
    }

    if (posicion > arreglo.length) {
        resultadoErrorElement.textContent = "La posición es mayor que el tamaño del arreglo.";
        resultadoElement.textContent = "";
        return;
    }

    var maximo = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < posicion; i++) {
        var elemento = parseInt(arreglo[i]);
        if (elemento > maximo) {
            maximo = elemento;
        }
    }
    resultadoErrorElement.textContent = "";
    resultadoElement.textContent = "El elemento más grande hasta la posición " + posicion + " es: " + maximo;
}
