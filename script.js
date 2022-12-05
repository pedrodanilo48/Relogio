let elementoDigital = document.querySelector(".digital");
let sElemento = document.querySelector(".p_s");
let mElemento = document.querySelector(".p_m");
let hElemento = document.querySelector(".p_h");
function atualizarRelogio(){
    let agora = new Date();
    let hora = agora.getHours();
    let minuto = agora.getMinutes();
    let segundo = agora.getSeconds();

    elementoDigital.innerHTML = `${consertarZero(hora)}:${consertarZero(minuto)}:${consertarZero(segundo)}`;

    let sGrau = ((360/60)*segundo)-90;
    let mGrau = ((360/60)*minuto)-90;
    let hGrau = ((360/12)*hora)-90;

    sElemento.style.transform = `rotate(${sGrau}deg)`;
    mElemento.style.transform = `rotate(${mGrau}deg)`;
    hElemento.style.transform = `rotate(${hGrau}deg)`;
}
function consertarZero(tempo){
    return tempo < 10 ? `0${tempo}`:tempo;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();