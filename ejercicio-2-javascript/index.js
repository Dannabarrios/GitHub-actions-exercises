const fecha = new Date();
const dia = fecha.toLocaleDateString('es-CO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

console.log("=== Accion JavaScript ejecutada ===");
console.log(`Fecha de ejecucion: ${dia}`);
console.log(`Repositorio: ${process.env.GITHUB_REPOSITORY}`);
console.log(`Ejecutado por: ${process.env.GITHUB_ACTOR}`);
console.log("===================================");
