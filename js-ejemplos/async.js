// Promesas + async/await (simula una operación de I/O con retardo)

// Define una función que recibe un id y regresa una Promesa
const fakeDb = (id) =>
  // Crea una Promesa manualmente; quien la “resuelve” es la función resolve
  new Promise((resolve) =>
    // Simula que “tarda” 300 ms (como si fuera una consulta a BD o API)
    setTimeout(
      // Cuando pasa el tiempo, resolvemos la promesa con el texto "Fila <id>"
      () => resolve(`Fila ${id}`),
      // Cantidad de milisegundos a esperar
      300
    )
  );

// Declara una función asíncrona (permite usar 'await' dentro)
async function main() {
  // Espera a que se resuelva fakeDb(1); 'a' tendrá "Fila 1"
  const a = await fakeDb(1);

  // Espera a que se resuelva fakeDb(2); 'b' tendrá "Fila 2"
  const b = await fakeDb(2);

  // Imprime: "Fila 1 + Fila 2"
  console.log(`${a} + ${b}`);
}

// Llama/ejecuta la función main
main();
