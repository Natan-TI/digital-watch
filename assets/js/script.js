const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mm = dateToday.getMinutes();
    let ss = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;

    horas.textContent = hr;
    minutos.textContent = mm;
    segundos.textContent = ss;
})

