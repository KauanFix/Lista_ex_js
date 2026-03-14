function folha_pagamento_des_var(){
    let nome = prompt("Digite seu nome");
    let sal_bruto = prompt("Digite seu salário");
    let sal_liq;
    let desc;
    
    if (sal_bruto <= 1000){
        desc = (sal_bruto * 0.08);
        //8% descontados
        sal_liq = sal_bruto - desc;
    }else if (sal_bruto <= 1500){
        desc = (sal_bruto * 0.085);
        //8,5% descontados
        sal_liq = sal_bruto - desc;
    }else{
        desc = (sal_bruto * 0.09);
        //9% descontados
        sal_liq = sal_bruto - desc;
    }

    alert("O mês ao fim chegou e você receberá seu salário Sr(a). " + nome);
    alert("Seu salário bruto é de: R$" + sal_bruto);
    alert("O INSS rou-... descontou R$" + desc + " de seu salário");
    alert("Você receberá R$" + sal_liq );
}