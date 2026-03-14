function picole(){
     let cod = prompt("Digite o código do sabor");

     let sabor;
     let preco;

    cod = cod.toLowerCase(); 

    if (cod === "a"){
        sabor = "Chocolate";
        preco = "R$1,50";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
    if (cod === "b"){
        sabor = "Morango";
        preco = "R$2,50";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
    if (cod === "c"){
        sabor = "Creme";
        preco = "R$2,50";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
    if (cod === "d"){
        sabor = "Manga";
        preco = "R$3,20";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
    if (cod === "e"){
        sabor = "Melancia";
        preco = "R$3,40";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
    if (cod === "f"){
        sabor = "Vanilla Ice";
        preco = "R$3,00";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
    if (cod === "g"){
        sabor = "Céu Azul";
        preco = "R$3,60";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
    if (cod === "h"){
        sabor = "Brownie";
        preco = "R$4,00";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
    if (cod === "i"){
        sabor = "Hawaiano";
        preco = "R$5,00";
        alert("Seu sabor é: " + sabor + " e o preço é: " + preco);
        return;
    }
}
