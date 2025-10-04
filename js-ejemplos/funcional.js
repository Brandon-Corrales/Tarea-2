// Función pura + map (no muta el array original)

// Declara una función 'toggleDone' que recibe el arreglo de tareas y un id
const toggleDone = (tasks, id) =>
  // 'map' recorre el arreglo y construye **uno nuevo** con el resultado
  tasks.map(t =>
    // Condicional: si el id coincide con el de la tarea actual...
    (t.id === id
      // ...crea un **nuevo objeto** copiando todas las props de 't' (...t)
      // y reemplaza 'done' por su negación (!t.done) -> alterna true/false
      ? { ...t, done: !t.done }
      // Si no coincide, devuelve la tarea tal cual (sin tocarla)
      : t
    )
  );

// Arreglo inicial de tareas
const tasks = Object.freeze([
  { id: 1, title: "Configurar Node", done: true },
  { id: 2, title: "Escribir ejemplo", done: false }
]);
// Object.freeze “congela” el arreglo (shallow): evita añadir/quitar/reasignar
// elementos directamente. Ojo: no hace un congelado profundo de objetos anidados.

// Ejecuta la función: alterna el campo 'done' de la tarea con id=2
const updated = toggleDone(tasks, 2);

// Muestra el arreglo original (debe permanecer igual → inmutabilidad)
console.log("Original:", tasks);

// Muestra el nuevo arreglo con la tarea #2 modificada
console.log("Actualizado:", updated);
