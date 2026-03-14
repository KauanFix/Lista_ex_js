function folha_pagamento(){
    let nome = prompt("Digite seu nome");
    let sal_bruto = prompt("Digite seu salário");
    let sal_liq = (sal_bruto * 0.92);

    alert("O mês ao fim chegou e você receberá seu salário Sr(a). " + nome);
    alert("Seu salário bruto é de: R$" + sal_bruto);
    alert("O INSS descontou R$" + (sal_bruto * 0.08) + " de seu salário");
    alert("Você receberá R$" + sal_liq );

}