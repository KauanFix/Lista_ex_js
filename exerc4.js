function bubble(){

    let vetor = [];
    let aux;

for(i = 0; i < 4; i++){
    vetor[i] = parseInt(prompt("Digite um número:"));
}
    for(i = 0; i < 4; i++){
        for (j = 0; j < 3; j++){
            if (vetor[j] < vetor[j+1]){
                aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
        }
    }
    alert("Os números em ordem decrescente: " + vetor[0] + " " + vetor[1] + " " + vetor[2] + " " + vetor[3]);
}