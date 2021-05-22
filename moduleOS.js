//El os módulo proporciona varios métodos de utilidad relacionados con el sistema operativo
const os = require('os');

//devuelve una matriz de objetos que contienen información sobre cada núcleo lógico de la CPU
let cpu = os.cpus(); 
// devuelve una cadena que identifica la plataforma del sistema operativo
let sistema = os.platform();
//devuelve el nombre de host del sistema operativo como una cadena.
let usuario = os.hostname(); 

//se exporta el modulo
module.exports={
    cpu,
    sistema,
    usuario
}
