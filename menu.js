//importar dependencia readline-sync
const interface = require('readline-sync'); //leer datos desde la consola de forma sincrona
// importar moduleOS
const moduleOS = require('./moduleOS');
//declarar variable 
let response = "";
do{
    //Menu
   console.log("Solamente ingresar un numero estre 1 y 4");
   console.log("1. CPU");
   console.log("2. Sistema operativo");
   console.log("3. Host name");
   console.log("4. Salir");
   response = interface.question("Sobre que desea informacion, escribe el numero: ");

   //evaluar si es diferente de 4
   if(response !="4"){

     switch(response){
         //CPU
     case "1":
        console.log(moduleOS.cpu);
       break;

        //sistema operativo
    case "2":
        console.log(moduleOS.sistema);
        break;
    
        //Host name
    case "3":
        console.log(moduleOS.usuario);
        break;

        default:
        break;
     }	
     interface.question("presione enter para continuar");
   }
   //Evaluar si es diferente de 4
}while(response != "4");

