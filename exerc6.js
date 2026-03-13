function vogal(){
    let letra = prompt("Digite uma letra");

    letra = letra.toLowerCase(); 

    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        console.log("O valor é uma vogal");
    }else{
        console.log("O valor é uma consoante");
    }
}