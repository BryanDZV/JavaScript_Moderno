// Hoisting
// JavaScript trabaja en 2 fases:
// 1) Creacion: registra funciones y variables de las variables no se registra el valor interior.
// 2) Ejecucion: corre el codigo linea por linea.

// Function Declaration:
// Se puede llamar antes de declararla porque se registra completa
// desde la fase de creacion.
sumar();

function sumar() {
  console.log(2 + 2);
}

// Function Expression (asignada a const):
// NO se puede llamar antes de declararla.
// Con const/let existe la "Temporal Dead Zone" (TDZ).
try {
  sumar2(); // Error esperado
} catch (error) {
  console.log("Error esperado al llamar sumar2 antes de declararla:");
  console.log(error.message);
}

const sumar2 = function () {
  console.log(3 + 3);
};

// Ahora si funciona, porque ya fue inicializada.
sumar2();

// Resumen:
// - Function declaration: si puede invocarse antes.
// - Function expression con const/let: se invoca despues de asignarla.
