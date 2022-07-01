//Escondidos
$(".comienzo").hide();
$(".pregunta1").hide();
$(".pregunta2").hide();
$(".pregunta3").hide();
$(".pregunta4").hide();
$(".pregunta5").hide();
$(".descripciones").hide();
$(".resultado").hide();
$(".reiniciar").hide();
//Fin-escondidos

//Variables
let respuestaUno
let respuestaDos
let respuestaTres
let respuestaCuatro
let respuestaCinco
let contador=0;
let deku=0;
let shoto=0;
let bakugo=0;
let shiga=0;
//Fin-variables

//Funciones
$(".ds").click(function() {
    $(".comienzo").show();
    $(".descubre").hide();
    console.log("listo")
});
$(".img").click(function() {
    $(".pregunta1").show();
    $(".comienzo").hide();
});

$(".top").click(function(){
    let hayerror = false
    respuestaUno = $(".respuesta1").val()
    console.log(respuestaUno)

    if(respuestaUno === "Doy lo mejor de mi, sin rendirme."){
        deku = deku + 1
    }else if(respuestaUno === "Lucho contra mi contrincante e incluso lucho contra mí para utilizar mi poder."){
        shoto= shoto + 1
    }else if(respuestaUno === "No me va a ganar nadie porque soy el mejor."){
        bakugo = bakugo + 1
    }else if(respuestaUno === "Analizo como ataca mi contrincante y defenderme hasta ver su patrón y poder atacar yo"){
        shiga = shiga + 1
    }else{
        alert("Tu respuesta no coincide con las opciones.")
        hayerror = true
    }

    if(hayerror === false){
        $(".pregunta2").show();
        $(".pregunta1").hide();
        $(".respuesta1").val("");
    }
    
});
$(".tup").click(function() {
    let hayerror = false
    respuestaDos = $(".respuesta2").val()
    console.log(respuestaDos)

    if(respuestaDos === "Simpatía"){
        deku = deku + 1
    }else if(respuestaDos === "Valentía"){
        shoto= shoto + 1
    }else if(respuestaDos === "Fuerza"){
        bakugo = bakugo + 1
    }else if(respuestaDos === "Solitario"){
        shiga = shiga + 1
    }else{
        alert("Tu respuesta no coincide con las opciones.")
        hayerror = true
    }

    if(hayerror === false){
        $(".pregunta3").show();
        $(".pregunta2").hide();
        $(".respuesta2").val("");
    }
});
$(".tia").click(function() {
    hayerror =false 
    respuestaTres = $(".respuesta3").val()
    console.log(respuestaTres)

    if(respuestaTres === "Trata de rescatar la gente en peligro"){
        deku = deku + 1
    }else if(respuestaTres === "Trata de buscar ayuda"){
        shoto= shoto + 1
    }else if(respuestaTres === "Trata de apagar el incendio antes de rescatar a alguien"){
        bakugo = bakugo + 1 
    }else if(respuestaTres === "No hace nada"){
        shiga = shiga + 1
    }else{
        alert("Tu respuesta no coincide con las opciones.")
        hayerror = true
    }

    if(hayerror === false){
        $(".pregunta4").show();
        $(".pregunta3").hide();
        $(".respuesta3").val("");
    }
});
$(".tap").click(function() {
    hayerror = false
    respuestaCuatro = $(".respuesta4").val()
    console.log(respuestaCuatro)

    if(respuestaCuatro === "Inteligencia"){
        deku = deku + 1
    }else if(respuestaCuatro === "táctica"){
        shoto= shoto + 1
    }else if(respuestaCuatro === "Versatilidad"){
        bakugo = bakugo + 1
    }else if(respuestaCuatro === "Confianza"){
        shiga = shiga + 1
    }else{
        alert("Tu respuesta no coincide con las opciones.")
        hayerror = true
    }
    if(hayerror === false){
        $(".pregunta5").show();
        $(".pregunta4").hide();
        $(".respuesta4").val("");
    }
});
$(".tep").click(function() {
    hayerror = false
    respuestaCinco = $(".respuesta5").val()
    console.log(respuestaCinco)
    
    if(respuestaCinco === "5"){
        deku = deku + 1
    }else if(respuestaCinco === "4"){
        shoto= shoto + 1
    }else if(respuestaCinco === "3"){
        bakugo = bakugo + 1
    }else if(respuestaCinco === "1"){
        shiga = shiga + 1
    }else{
        alert("Tu respuesta no coincide con las opciones.");
        hayerror = true
    }
   

   console.log(deku +"deku")
   console.log(bakugo + "bakugo")
   console.log(shoto + "shoto")
   console.log(shiga +"shiga")
   if(hayerror === false) {
    $(".pregunta5").hide();
    $(".reiniciar").show();
    $(".respuesta5").val("");
    if(deku > bakugo && deku > shoto && deku > shiga){
        $(".d").show();
        $(".b").hide();
        $(".s").hide();
        $(".sh").hide();
    }else if(bakugo > deku && bakugo > shoto && bakugo > shiga){
        $(".b").show();
        $(".d").hide();
        $(".s").hide();
        $(".sh").hide();
    }else if(shoto > deku && shoto > bakugo && shoto > shiga){
        $(".s").show();        
        $(".b").hide();
        $(".d").hide();
        $(".sh").hide();
    }else if(shiga > deku && shiga > bakugo && shiga > shoto){
        $(".sh").show();
        $(".b").hide();
        $(".s").hide();
        $(".d").hide();
    }
   }
});
$(".reiniciar").click(function() {
    $(".descubre").show();
    $(".reiniciar").hide();
    $(".descripciones").hide();
    contador= contador+1;
    console.log("tus veces realizadas el test-> " +contador)
$(".veces").text("tus veces realizadas el test-> " +contador)
});
//Fin-funciones
