// Clase con encapsulación (campo privado)
class Counter {
  // Declara un **campo privado** (solo accesible dentro de la clase)
  #value = 0;

  // Método que incrementa el contador en 1
  inc() { this.#value += 1; }

  // Método de lectura: devuelve el valor actual
  value() { return this.#value; }
}

// Crea una instancia de la clase
const c = new Counter();

// Llama dos veces a inc(): el valor pasa de 0 -> 1 -> 2
c.inc(); c.inc();

// Imprime "Valor: 2"
console.log("Valor:", c.value()); // 2
