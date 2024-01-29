// En este archivo se deberán crear 2 funciones para:
// ○ Registrar: Agregar una nueva cita de una atención veterinaria que debe incluir:
// ■ Nombre del animal
// ■ Edad
// ■ Tipo de animal
// ■ Color del animal
// ■ Enfermedad

const fs = require('fs')
let citas = [];
const registrar = (nombre, edad, raza, color, enfermedad) => { 
    let perro = [
        {
            name: nombre,
            old: edad, 
            race: raza, 
            colors: color, 
            disease: enfermedad
        }
    ];
    
    try {
        const contenido = fs.readFileSync('citas.json', 'utf8');
        citas = JSON.parse(contenido);
    } catch (error) {
        console.log('Error al leer el archivo')
    }

    citas.push(perro);

    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log("Nuevo perro registrado:", perro);
};

const leer = fs.readFileSync('citas.json', 'utf8')
console.log(JSON.parse(leer));


module.exports = {registrar, leer}