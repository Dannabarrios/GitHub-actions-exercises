 
const core = require('@actions/core');

try {
  const nombre = core.getInput('nombre') || 'Mundo';
  console.log(`Hola ${nombre} desde una accion JavaScript!`);
  core.setOutput('mensaje', `Hola ${nombre}`);
} catch (error) {
  core.setFailed(error.message);
}