 
const nombre = process.env.INPUT_NOMBRE || 'Mundo';
console.log(`Hola ${nombre} desde una accion JavaScript!`);
console.log(`::set-output name=mensaje::Hola ${nombre}`);
