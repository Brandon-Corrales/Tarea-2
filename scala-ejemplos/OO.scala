//> using scala 2.13.14
trait Greeter { def greet(name: String): String }
final class SimpleGreeter extends Greeter { def greet(name: String) = s"Hola, $name!" }

object OO extends App {
  val g: Greeter = new SimpleGreeter()
  println(g.greet("Grupo 4"))
}
