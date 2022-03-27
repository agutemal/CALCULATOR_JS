window.addEventListener('load',()=>{
    
    let resultado=document.getElementById('resultado');
    let botones=document.getElementsByClassName('boton');
    let botonesArray=Array.from(botones);
    botonesArray.forEach(boton => {
        boton.addEventListener('click',()=>{
            console.log(boton.innerHTML);
            calculadora(boton,resultado);
        })
    })
})
function calculadora(botones,resultado){
    
    if (botones.innerHTML=='C') {
        resultado.innerHTML=0;
    }else if (botones.innerHTML=='=') {
        resultado.innerHTML=eval(resultado.innerHTML);
    }else if(resultado.innerHTML==0 && restricciones(botones)){
        resultado.innerHTML=0;

    }
    else{
        if (resultado.innerHTML==0) {
            resultado.innerHTML='';
            resultado.innerHTML+=botones.innerHTML;
        }else{
            resultado.innerHTML+=botones.innerHTML;
        }
        
    }
    
}

function restricciones(botones){
    let varRespuesta=false;
    let arraybotones=['-','+','*','/'];
    arraybotones.forEach(element => {
        if (element==botones.innerHTML) {
            varRespuesta=true;
        }  
    });
    return varRespuesta;
    
}
