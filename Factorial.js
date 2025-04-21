function calcularFactorial() {
    const input = document.getElementById("numeroInput");
    const valor = Number(input.value);

    if (!isNaN(valor) && Number.isInteger(valor) && valor >= 0) {
      let factorial = 1;
      for (let i = 1; i <= valor; i++) {
        factorial *= i;
      }

      document.getElementById("resultado").textContent = `Resultado: el factorial del número ${valor} es: ${factorial}`;
      console.log(`El factorial de ${valor} es: ${factorial}`);
    } else {
      alert("Por favor, ingresa un número válido (entero y positivo).");
      input.value = "";
      input.focus();
    }

  }


