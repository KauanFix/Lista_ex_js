function Par_impar(){
    let num = parseInt(prompt("Digite um número:"));
    if (num%2 == 0){
        alert("Seu número é par");
    }else{
        alert("Seu número é ímpar");
    }
    num ++;
    console.log("valor final: " + num);
}