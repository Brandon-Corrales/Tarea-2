// MiniRouter.scala
import com.sun.net.httpserver.{HttpExchange, HttpHandler, HttpServer}
import java.net.InetSocketAddress
import java.nio.charset.StandardCharsets

object MiniRouter {
  def main(args: Array[String]): Unit = {
    val port = 8080
    val server = HttpServer.create(new InetSocketAddress(port), 0)

    // / -> {"msg":"Hola desde Scala"}
    server.createContext("/", exchange => {
      if (exchange.getRequestURI.getPath == "/") {
        json(exchange, """{"msg":"Hola desde Scala"}""", 200)
      } else {
        notFound(exchange, exchange.getRequestURI.getPath)
      }
    })

    // /tasks -> lista JSON
    server.createContext("/tasks", exchange => {
      val body =
        """[{"id":1,"title":"Demo","done":false}]"""
      json(exchange, body, 200)
    })

    server.setExecutor(null) // default executor
    server.start()
    println(s"Servidor Scala escuchando en http://localhost:$port")
    // Mantener vivo el hilo principal
    Thread.currentThread().join()
  }

  private def json(ex: HttpExchange, body: String, code: Int): Unit = {
    val bytes = body.getBytes(StandardCharsets.UTF_8)
    ex.getResponseHeaders.add("Content-Type", "application/json; charset=utf-8")
    ex.sendResponseHeaders(code, bytes.length)
    val os = ex.getResponseBody
    os.write(bytes)
    os.close()
  }

  private def notFound(ex: HttpExchange, path: String): Unit =
    json(ex, s"""{"error":"Ruta no encontrada: $path"}""", 404)
}
