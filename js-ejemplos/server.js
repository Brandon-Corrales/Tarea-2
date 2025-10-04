import http from "node:http";

// Crea el servidor HTTP; recibe una función que maneja cada request
const server = http.createServer((req, res) => {
  
  if (req.url === "/saludo") {
    // Escribe el código 
    res.writeHead(200, { "Content-Type": "application/json" });
    // Envía respuesta en JSON y cierra la conexión
    res.end(JSON.stringify({ msg: "Hola desde Node" }));
  } else if (req.url === "/tasks") {

    // Para /tasks también devolvemos 200 + cabecera JSON
    res.writeHead(200, { "Content-Type": "application/json" });
    // Arreglo de ejemplo JSON
    res.end(JSON.stringify([{ id: 1, title: "Demo", done: false }]));
  } else {
    // Para cualquier otra ruta: 404 (no encontrado)
    res.writeHead(404, { "Content-Type": "application/json" });
    // Mensaje de error 
    res.end(JSON.stringify({ error: `Ruta no encontrada: ${req.url}` }));
  }
});

// El servidor escucha en el puerto 3000;
server.listen(3000, () =>
  console.log("Servidor escuchando en http://localhost:3000")
);
