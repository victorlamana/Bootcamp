function soma(n1,n2){
    return n1+n2;
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}


function google(){
    window.open("http://www.google.com");
    window.location.href = "http://www.google.com";
}

function mouseover(element){
    //document.getElementById("mouse move").innerHTML = " passou o mouse" ;
    element.innerHTML = " passou o mouse "
    //alert("trocar texto");
}

function backmouseover(element){
    //document.getElementById("mouse move").innerHTML = "passe o mouse";
    element.innerHTML = " passe o mouse "

}

function load (){
    alert("pagina carregada")
}

function funcaoChange (element){
    console.log(element.value)
}

/*
var validar;
function validaIdade(idade){
   //local da função 
   validar;
    if (idade >= 18){
        validar = true
    }else{
        validar=false
    }
    return validar;
}

*/

/*
var idade = prompt("Qual sua idade?")
console.log(validaIdade(idade))
alert(validaIdade(idade))

alert(soma(5,10));*/