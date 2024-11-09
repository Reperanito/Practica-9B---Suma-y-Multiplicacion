var valores = [];
var result_num;
var result_txt;
var r;

function RealizarProcedimiento(){
    result_txt = "";
    result_num = 1;
    var n = document.getElementById('Numero').nodeValue;

    if(n>=1 && n<=10){
        factorial(n);
        document.getElementById("Operacion").innerHTML = n + "!=" + r + "=" + result_num.toString();
    } 
    else{
        alert("Insertar un numero entre 1 y 10");
    }
}

function factorial(num){
    for(i=1; i<=num; i++){
        valores.push(i);
        result_num *= i;
        result_txt += i.toString() + " x ";
    }
    r = result_txt.substring(0, resul.length-2);
}
