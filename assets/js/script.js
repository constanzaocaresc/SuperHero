$(document).ready(function () {
    
    let btnBuscar=$("#btn-buscar");
    let msjError=$("#msj-error");
    let formu=$("form-consulta");
    
    
    //Comprobando que la informacion ingresada sea solo un numero
    $("#btn-buscar").on("click", function(event){
        event.preventDefault();

        //rescato el dato ingresado
        let numHero=$("#num-hero").val();
        let expReg=/^[0-9]+$/;  //Establesco la expresion regular
        ;
        
        if (expReg.test(numHero)){
            console.log('Coincide');
            $("i.fa-solid.fa-check.fa-lg").css("display", "inline");
            $("#msj-error").css("display", "none");
        }else {
            console.log('No Coincide');
            $("#msj-error").css("display", "inline");
            $("i.fa-solid.fa-check.fa-lg").css("display", "none");
        }
    });


    






































});