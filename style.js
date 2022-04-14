    function Fahren(){
 // Informação de entrada
        let cel = document.getElementById("cel")
        let resultado = document.getElementById("resultado")

// variavel
        var celsius = Number(cel.value)

// Processo
        operação = (celsius * 1.8) + 32

//Informação de saída
        resultado.innerHTML = operação

        if(celsius == 0){
            resultado.innerHTML = 32
        }
    }