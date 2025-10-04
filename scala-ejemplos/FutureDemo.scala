//> using scala 2.13.14
import scala.concurrent.{Future, ExecutionContext}
import scala.util.{Success, Failure}

object FutureDemo extends App {
  implicit val ec: ExecutionContext = ExecutionContext.global
  def dbCall(id: Int): Future[String] =
    Future { Thread.sleep(300); s"Resultado($id)" }

  val f1 = dbCall(1)
  val f2 = dbCall(2)
  val combinado = for { a <- f1; b <- f2 } yield s"$a + $b"

  combinado.onComplete {
    case Success(v) => println(s"Completó: $v")
    case Failure(e) => println(s"Error: ${e.getMessage}")
  }
  Thread.sleep(700)
}
