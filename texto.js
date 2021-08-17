    var texto = "Mensaje: ";
            var edad = prompt("Por favor, escriba su edad");


            if (edad < 18) {
                texto += "Pagas boleto de menor de edad "
            }   else if (edad >= 18 && edad <= 50) {
                texto += "Pagas boleto de adulto"
            }   else if (edad >= 50 && edad <= 65) {
                texto += "Pagas boleto de adulto mayor"
            }   else if (edad >= 66) {
                texto += "Pagas boleto de viejito";
            }
            else {
                texto += "Hubo un error, favor de verificar el codigo"
            }

            alert(texto)


            var preferenciaHora = prompt("Prefieres el dia o la noche?")
            var textoPreferenciaHora = ""

            if (preferenciaHora == "día" || preferenciaHora == "Día" || preferenciaHora == "dia" || preferenciaHora == "Dia" || preferenciaHora == "DIA" || preferenciaHora == "DÍA") {
                textoPreferenciaHora += "Te gusta despertarte temprano";
            } else if (preferenciaHora == "noche") {
                textoPreferenciaHora += "Te gusta despetarte tarde"
            } else {
                textoPreferenciaHora += "Respuesta no reconocida"
            }

            alert(textoPreferenciaHora)    
    
    
    
    
    //let edad = 50;
            //let texto = "Mensaje: ";

            //let genero = "Avion"

            //if (edad < 18 && genero == "Masculino") {
                //texto += "Pagas boleto de menor de edad - Masculino"
            //}   else if (edad < 18 && genero == "Femenino") {
                //texto += "Pagas boleto de menor de edad - Femenino"
            //}   else if (edad >= 18 && edad <= 50) {
                //texto += "Pagas boleto de adulto"
            //}   else if (edad >= 50 && edad <= 65) {
                //texto += "Pagas boleto de adulto mayor"
            //}   else if (edad >= 66) {
                //texto += "Pagas boleto de viejito";
            //}
            //else {
                //texto += "Todo lo demas fallo"
            //}

            //console.log(texto)
    
    
    
    
    
    //var usuario = "Memo";
                //var password = "abcxyz"

                //var usuarioValido = "Memo"
                //var passwordValido = "abcxyz"

                //if(usuario == usuarioValido || password == passwordValido) {//true && true ==>
                    //console.log("Este SI un usuario valido");
                //} else {
                    //console.log("Este No es un usuario valido");
                //}

                //if (true) {
                    //console.log(1);
                //} else {
                    //console.log(2);
                //}

    //var a = 10
    //var b = 20

    //x = b
    //consolole.log("x = b:", x)
    //console.log("valor de x:", x)
    //console.log("x == b", x == b) // verdadero

    // Operadores logicos
    // && Y ==>
    // || O ==>

        //var s = 1
        //var d =
        //var
        //var
            
            
            
            
            
            
            //var a = 5;
            //var b = 3 * 2;
            //var c = 9 / 3;
            //var d = a * 5;
            //var e = c * b;

            //console.log("var a", a); // 5
            //console.log("var b", b); // 6
            //console.log("var c", c); // 3
            //console.log("var d", d); // 10
            //console.log("var e", e); // 18
            //console.log("var f", f); // 23

            // Operadores de asignacion
            //var x = 100;
            //x += 20; // x = x + 20 // 100 + 20;
            //console.log("Operador de asignacion de suma ", x) // x = 120

            //x -= 100; // x = x - 10
            //console.log("Operador de asignacion de resta ", x); // x = 20

            //x *= 2; // x = x * 2
            //console.log("Operador de asignacion de multiplicacion ", x); // x = 40
            
            //var y = 50;
            //y /= 5; // 

            //console(x); // 40
            //console(y) // 10
            
            
            
            //var EjercicioRepaso = false; // booleano // Camel
            
            
            // numero
            // de texto
            // booleano -- falso y verdadero
            // de objetos -- multiples valores*
            //var primer_numero = 22;
            //var segundo_numero = 7;

            //console.log(primer_numero + segundo_numero)

            //var primera_palabra = "Taza";
            //var segunda_palabra = "Verde";

            //console.log(primera_palabra + " " + segunda_palabra)

            //var variable_falsa = false;
            //var variable_verdadera = true;

            //console.log(variable_falsa);
            //console.log(variable_verdadera);

            //var primera_palabra_de_mi_variable;
            
            //const VARIABLE_CONSTANTE = 5; 

            
            
            
            
            
            
            
            
            
            
            // const -- constante // por ejemplo valor de PI / nombre del autor
            /*const mi_nombre = "Lalo";/*

            //var let
            /*let nombre_de_mi_gata = "Mochi"; /*
            /*nombre_de_mi_gata = "Pekas";/*
            
            
            //alert("Una prueba, mi nombre es " + mi_nombre);
            //alert("El nombre de mi gata es " + nombre_de_mi_gata);

            /*console.log("Una prueba, mi nombre es " + mi_nombre);/*
            /*console.log("El nombre de mi gata es " + nombre_de_mi_gata);/*



           
           
           
           
            //La variable num representa un numero
            //var num = 5;
            //var a = "hola";
            
            //num = 6
            //num = "adios"


            //var primer_nombre = "Ricardo"; // Creando
            //let primer_apellido = "Medina";
            //const valor_PI = 3.1416;



            //primer_apellido = "Alarcon"; // Medina -> Alarcon
            //primer_nombre = "Juan"; // Ricardo -> Juan*/

            //primer_nombre = "Alejandro25"; // Ricardo -> Juan -> Alejandro

            //alert("Mi nombre es " + primer_nombre + " " + primer_apellido);
            //console.log("Mi nombre es " + primer_nombre + " " + primer_apellido);