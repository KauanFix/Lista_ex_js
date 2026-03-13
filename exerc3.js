function balanco(){

    let bruto = 0;
    let gasto = 0;
    

    for(i = 1; i <= 12; i++){
        bruto += parseFloat(prompt("Digite o ganho bruto do mes " + i));
        gasto += parseFloat(prompt("Digite o gasto do mês " + i));
    }

    alert("O ganho total da empresa no ano foi: " + bruto);
    alert("O gasto anual da empresa foi: " + gasto);

    let saldo = bruto - gasto;
    
    if(saldo > 0){
        alert("A empresa lucrou R$" + saldo);
    }else{
        saldo = saldo * -1;
        alert("A empresa teve prejuízo de R$" + saldo );
    }
}