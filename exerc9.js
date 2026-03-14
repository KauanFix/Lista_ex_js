function ordenacao(){
    let var1 = Math.ceil(Math.random() * 10);
    let var2 = Math.ceil(Math.random() * 10);

    if (var1 > var2){
       console.log(var1 + " " + var2);
    }else{
        console.log(var2 + " " + var1);
    }

    alert("Seu números foram ordenados :)")
}