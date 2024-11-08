window.onload=() =>{
    function toUpperCase(){
        //let element=document.getElementById("texto");
        //element.value= element.value.toUpperCase();

        let texto=document.getElementById("texto").value;
        document.getElementById("texto").value=texto.toUpperCase();
    }
    function toUpperCasePropioElemento(element)
    {
        //let texto=element.value;
        //element.value=texto.toUpperCase();
        
        element.value=element.value.toUpperCase();
    }


    let elemento=document.getElementById("texto");

    //Manera avanzada pero chapucera
    /*
    elemento.addEventListener("keyup", function() {
        toUpperCase();
    }); */
    /*el metodo(addEventListener) tiene dos parametros, el evento(keyup) y la funcion de 
    Listener ( function() ) . Lo que hay dentro es lo que hacer 
    cuando eso ocurra ( toUpperCase() )*/
    
    /*
    elemento.addEventListener("keyup", function(event) {
        event.target.value=event.target.value.toUpperCase();
    });
    //target es donde se ha producido el evento
    */
    
    elemento.addEventListener("keyup", (event) => { //como el de arriba pero con una landa
        event.target.value=event.target.value.toUpperCase();
    });
}
/*Para que lo haga cuando se cargue la pagina (el window onload), y es una landa. 
Es el evento onload de ventana, cuando se produzca el evento  onload de ventana haz esto*/
