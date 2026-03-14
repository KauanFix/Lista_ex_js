function duas_var(){
    let var1 = Math.ceil(Math.random() * 10);
    let var2 = Math.ceil(Math.random() * 10);
    let dif;

    alert("O primeiro número é: " + var1);
    alert("O segundo número é: " + var2);

    if (var1 > var2){
        dif = var1 - var2;
    }else{
        dif = var2 - var1;
    }
    alert("A diferença entre os números é de: " + dif);

    let result = ((var1 * 2) + (var2 * 3));
    alert("O dobro da primeira somado ao triplo da segunda é: " + result);

    result = var1 * var2;
    alert("As variáveis multiplicadas resultam em: " + result);
}