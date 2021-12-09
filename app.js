let moduloTareas = require('./tareas');
let process = require('process');
let comando = process.argv[2];

switch(comando) {
    case 'listar' :
        let tareas = moduloTareas.leerJSON();
        if (tareas.length === 0) {
            console.log('Tu lista de tareas está vacía.');
        }else{
            tareas.forEach(function(tareas){
                return console.log(tareas);
            })
        }
        break;
    case 'crear' :
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.escribirJSON(titulo, estado);
        console.log('La tarea fue agregada con éxito!');
        break;
    case 'filtrar' :
        let filtrar = process.argv[3];
        let listaFiltrada = moduloTareas.filtrarPorEstado(filtrar);
        for(let i = 0; i < listaFiltrada.length-1; i++){
            console.log(listaFiltrada[i].titulo);
        }
        break;
    case undefined :
        console.log('Atención - debes pasar una acción');
        break;
    default : 
        console.log('No entiendo que quieres hacer');
}