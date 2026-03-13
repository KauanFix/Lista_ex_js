// console.log("Hello Word");

// let nome = "Daniel Felipe Sehnem";
// console.log(nome)

// const pi = 3.14159265358979
// console.log(pi)

// let n1 = 1;
// let n2 = 2;

// console.log(n1 + n2);

// function ola(){
//     console.log("Olá, " + nome);
// }

// function somar(n3,n4){
//     console.log(n3 + n4);
// }

// somar(1, 22);
// ola();

function somatoria(){
    let soma = 0;
    let continuar = true;

    while (continuar){
        let numero = parseFloat(prompt("Digite um número (ou 0 para sair): "));

        

        if (isNaN(numero)){
            alert("Por favor, digite um número existente");
        }else{
            soma += numero;
        }
        if (numero == 0){
            continuar = false;
            return;
        }

        continuar = confirm("Deseja somar mais um número?????");
    }
    alert ("A soma dos numerais é: " + soma);
}