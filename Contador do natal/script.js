const natal = new Date(2025, 11, 25, 0, 0, 0);

function pad(n){
    return String(n).padStart(2, ('0'));
}



function atualizarcontador(){
    const agora = new Date().getTime();
    const resultado = natal - agora;

    if(resultado < 0 ){
    document.getElementById('contador').innerHTML = "Já chegou o natal ou já passou hohohoho"
    clearInterval(intervalo) 
    return
}



const msPorSegundo = 1000;

const msPorMinuto = msPorSegundo * 60;

const msPorHora = msPorMinuto * 60;

const msPorDia = msPorHora * 24;

const dias = Math.floor(resultado / msPorDia);

const horas = Math.floor((resultado % msPorDia) / msPorHora);

const minutos = Math.floor((resultado % msPorHora) / msPorMinuto);

const segundos = Math.floor((resultado % msPorMinuto) / msPorSegundo);

document.getElementById('dias').textContent = dias;

document.getElementById('horas').textContent = pad(horas);

document.getElementById('minutos').textContent = pad(minutos);

document.getElementById('segundos').textContent = pad(segundos);
}







atualizarcontador();
const intervalo = setInterval(atualizarcontador, 1000);