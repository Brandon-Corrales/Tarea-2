# Tarea-2
Ejemplos programados de la **Tarea de Investigación 2** en **JavaScript (Node.js)** y **Scala**.  

Este repositorio contiene implementaciones prácticas en dos paradigmas de programación distintos:  
- **JavaScript (Node.js):** programación funcional, orientada a objetos, asincronía y un mini servidor HTTP.  
- **Scala:** ejemplos de estilo funcional, orientación a objetos, concurrencia con *Futures* y un mini enrutador con *pattern matching*.  

---

## 📂 Estructura del proyecto

```
Tarea-2/
  js-ejemplos/
    async.js
    funcional.js
    oo.js
    server.js
    package.json
  scala-ejemplos/
    Funcional.scala
    OO.scala
    FutureDemo.scala
    MiniRouter.scala
```

---

## ⚙️ Requisitos previos

- **Node.js 18 o superior** (para los ejemplos en `js-ejemplos`)  
  👉 Descargar: https://nodejs.org/

- **Scala CLI** (para ejecutar directamente los `.scala`)  
  👉 Descargar: https://scala-cli.virtuslab.org/install

---

## ▶️ Ejemplos en **JavaScript**

1. Abrir terminal en la carpeta `js-ejemplos`:
   ```bash
   cd js-ejemplos
   ```

2. Ejecutar los ejemplos:
   ```bash
   node funcional.js   # Ejemplo funcional con inmutabilidad y map
   node oo.js          # Ejemplo orientado a objetos con clases
   node async.js       # Ejemplo asincrónico con Promesas y async/await
   node server.js      # Inicia servidor HTTP en http://localhost:3000
   ```

### 🌐 Servidor HTTP (`server.js`)

- Ruta `GET /saludo` → devuelve:
  ```json
  {"msg":"Hola desde Node"}
  ```

- Ruta `GET /tasks` → devuelve:
  ```json
  [{"id":1,"title":"Demo","done":false}]
  ```

📌 Nota: El `package.json` incluye `"type": "module"`, por lo que es necesario Node.js versión 18 o superior.

---

## ▶️ Ejemplos en **Scala**

1. Abrir terminal en la carpeta `scala-ejemplos`:
   ```bash
   cd scala-ejemplos
   ```

2. Ejecutar cada archivo con `scala-cli`:
   ```bash
   scala-cli run Funcional.scala
   scala-cli run OO.scala
   scala-cli run FutureDemo.scala
   scala-cli run MiniRouter.scala
   ```

### 📖 Explicación de cada archivo

- **Funcional.scala** → uso de inmutabilidad, `map`, `copy`, conteo de tareas completadas.  
- **OO.scala** → ejemplo de clases y traits (orientación a objetos).  
- **FutureDemo.scala** → concurrencia y asincronía con `Future`.  
- **MiniRouter.scala** → patrón de routing simple usando *pattern matching*.  

---

## 👩‍🏫 Instrucciones rápidas después de clonar

```bash
# Clonar el repositorio
git clone https://github.com/Brandon-Corrales/Tarea-2.git
cd Tarea-2

# Ejecutar ejemplos en JS
cd js-ejemplos
node funcional.js

# Ejecutar ejemplos en Scala
cd ../scala-ejemplos
scala-cli run Funcional.scala
```

---

## 📝 Notas importantes

- Este repositorio incluye un archivo **.gitignore** que descarta:
  - Archivos de compilación de Scala (`.class`, `.tasty`, `.scala-build`, `.metals`, `.bloop`, `.bsp`)  
  - Dependencias de Node (`node_modules/`, `dist/`, `build/`)  
  - Archivos de configuración de IDE (`.vscode/`, `.idea/`)  
  - Archivos temporales (`*.log`, `.DS_Store`, `.env`)  

- De esta forma, solo se sube **el código fuente necesario** para compilar y ejecutar.  

- Si tras compilar aparecen carpetas como `.scala-build` o `.metals`, son generadas automáticamente por el entorno; no es necesario subirlas ni borrarlas manualmente.

---

## ✅ Conclusión

Este repositorio sirve como guía práctica para comparar **paradigmas de programación** en dos lenguajes distintos:  
- **JavaScript:** muy usado en desarrollo web y con fuerte soporte para asincronía.  
- **Scala:** combina programación funcional y orientada a objetos, con soporte para concurrencia moderna.  

Ambos conjuntos de ejemplos se pueden correr fácilmente después de clonar, siguiendo las instrucciones incluidas.
