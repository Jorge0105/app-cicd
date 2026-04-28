function hello() {
  return "Hola Mundo 🚀";
}

if (require.main === module) {
  console.log(hello());
}

module.exports = hello;
