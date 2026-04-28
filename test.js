const hello = require('./app');

if (hello() !== "Hola Mundo 🚀") {
  throw new Error("Test falló");
}

console.log("Test pasó ✅");
