// n1 > n2 (n1 maior que n2)
// n1 >= n2 (n1 maior ou igual n2)
// n1 < n2 (n1 menor que n2)
// n1 <= n2 (n1 menor ou igual n2)

// n1 != n2 (n1 é diferente de n2)
// n1 !== n2 (estritamente diferente)
// 2 != "2"; false
// 2 !== "2"; true

// n1 == n2 (igual)  
// n1 === n2 (estritamente igual)
// 1 == "1"; true
// 1 == 1; true;
// 1 === "1"; false -> porque o tipo do valor é diferente, um é STRING (texto) integer (numero inteiro)
// 1 === 1; true

//null -> não existe
//undefined -> não foi definido

// += é a mesma coisa que fazer (resultadoSoma = resultadoSoma + n1);

function somar(n1, n2, n3) {
    // Se n1 não é undefined então faça...
    var resultadoSoma = 0;

    if(n1 !== undefined){
        resultadoSoma += n1;
        console.log("Condição n1");
    }

    if(n2 !== undefined){
        resultadoSoma += n2;
        console.log("Condição n2");
    }
    
    if(n3){
        resultadoSoma += n3;
        console.log("Condição n3");
    }
    console.log(resultadoSoma)
}


somar(11, 22);
