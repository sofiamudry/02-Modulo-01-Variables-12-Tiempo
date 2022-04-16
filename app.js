console.log('tiempo');

alert('Tiempo de viaje');

const distancia = prompt ('Ingrese la distancia del recorrido en km');
const pie = (distancia/5);
const bici = (distancia/10);
const auto = (distancia/80);

alert(`LLegará al destino:
  A pie en ${pie} horas.
  En bici en ${bici} horas.
  o en auto en ${auto} horas.`);