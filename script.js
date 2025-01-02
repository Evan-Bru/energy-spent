//obter valores
const Potencia = document.getElementById("potencia");
const Horas = document.getElementById("horas");
const Dias = document.getElementById("dias");
const calculateButton = document.getElementById("calculate");
const resultDiv = document.getElementById("result");

// Adicionando um ouvinte de evento de clique ao botão "Calculate"
calculateButton.addEventListener("click", function() {
    // Obtendo os valores dos campos de entrada e convertendo para números
    const potencia = parseFloat(Potencia.value); 
    const horas = parseFloat(Horas.value);      
    const dias = parseFloat(Dias.value);       

    // Verificando se os valores são válidos
    if (!isNaN(potencia) && !isNaN(horas) && !isNaN(dias)) {
        // Realizando o cálculo
        const consumo = (potencia * horas * dias) / 1000;
        // Exibindo o resultado em um alerta
        alert(`Consumption: ${consumo} kWh`);
        
    } else {
        // Exibindo uma mensagem de erro se os valores forem inválidos
        alert("Invalid input. Please enter valid numbers.");
    }       
});

//Consumo (em kWh/mês) = (Potência do PC x horas de uso por dia x quantidade de dias)/1.000


/*
        // Exibindo o resultado
        resultDiv.textContent = `Consumption: ${consumo} kWh`;
    } else {
        // Exibindo uma mensagem de erro se os valores forem inválidos
        resultDiv.textContent = "Invalid input. Please enter valid numbers.";
    }
*/



