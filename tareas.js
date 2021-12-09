let fs = require('fs');

module.exports = moduloTareas = {
    leerJSON : () => {
        let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(listaDeTareas);
    },
    escribirJSON : (titulo, estado) => {
        let nuevaTarea = {
            titulo : titulo,
            estado : estado = 'pendiente'
        }
        let tareasAnteriores = moduloTareas.leerJSON();
        tareasAnteriores.push(nuevaTarea);
        moduloTareas.guardarTarea(tareasAnteriores);
    },
    guardarTarea : (arrayDeObjetos) => {
        let nuevoJSON = JSON.stringify(arrayDeObjetos);
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8');
    },
    deshacer : () => {
        let tareas = moduloTareas.leerJSON();
        tareas.pop();
        moduloTareas.guardarTarea(tareas);
    },
    filtrarPorEstado : (estado) => {
        let listaDeTareas = moduloTareas.leerJSON();
        let tareasFiltradas = listaDeTareas.filter(tarea => {
            return tarea.estado.toLowerCase() === estado.toLowerCase();
        })
        return tareasFiltradas;
    }
}