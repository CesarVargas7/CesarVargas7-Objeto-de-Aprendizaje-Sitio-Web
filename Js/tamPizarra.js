var contenedor = document.getElementById("contPizarra");
var wiPizarra = contenedor.clientWidth;
var heiPizarra = contenedor.clientHeight;
document.getElementById('contPizarra').innerHTML = `<canvas id="pizarra" width="${wiPizarra-2}px" height="${heiPizarra-2}"></canvas>`;