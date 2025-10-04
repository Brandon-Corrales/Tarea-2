// Definimos una case class llamada Task.
// Tiene 3 atributos: id (número), title (título de la tarea) y done (si está hecha o no).
// Es inmutable y podemos usar copy() para clonar cambiando solo un campo.

final case class Task(id: Int, title: String, done: Boolean)

// Definimos un objeto ejecutable, ejecuta como el método main.

object Funcional extends App {

// Creamos una base inmutable Vector con 3 tareas iniciales.
// Cada tarea usa la instancia de la case class Task.

  val tasks = Vector(
    Task(1, "Leer consigna", true),
    Task(2, "Escribir ejemplo", false),
    Task(3, "Probar código", false)
  )

// Recorremos la lista con map
  
  val updated = tasks.map(t => if (t.id % 2 == 0) t.copy(done = true) else t)

  // - Si el id es par (t.id % 2 == 0), usamos copy() para marcarla como hecha (done = true).

  // El resultado es un nuevo Vector con las tareas transformadas.


  // Contamos cuántas tareas en la lista actualizada tienen done = true.

  val doneCount = updated.count(_.done)

 // Imprimimos en consola la lista transformada.

  println(updated)
  
  // Imprimimos el número de tareas que están marcadas como hechas.

  println(doneCount)
}
