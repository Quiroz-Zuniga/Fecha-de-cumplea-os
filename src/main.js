const dia = document.getElementById("dia");
const mes = document.getElementById("mes");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const fechahoy = document.querySelector(".date");



boton.addEventListener("click", function() {
    const diaCumple = parseInt(dia.value);
    const mesCumple = parseInt(mes.value);
    diasHastaCumpleaños(diaCumple, mesCumple);
})

fechahoy.textContent = new Date().toLocaleDateString();
function diasHastaCumpleaños(dia, mes) {
    const date = new Date();
    const añoActual = date.getFullYear();
    const cumpleaños = new Date(añoActual, mes - 1, dia);
    if (date > cumpleaños) {
        const proximoAño = añoActual + 1;
        cumpleaños.setFullYear(proximoAño);
    }
  
    const diferenciaDias = Math.ceil((cumpleaños - date) / (1000 * 60 * 60 * 24));
   if (
        date.getDate() === cumpleaños.getDate() &&
        date.getMonth() === cumpleaños.getMonth()
    ) {
        resultado.style.display = "block";
        resultado.textContent = "¡Feliz Cumpleaños!";
        return;
    }else if (diferenciaDias == 1) {
        resultado.style.display = "block";
        resultado.textContent = "!Mañana es tu cumpleaños!";
        return;
    }else if(dia || mes == NaN ){
      resultado.style.display = "block"
      resultado.textContent = "Porfavor ingresa datos validos "
    }
    else{
        resultado.style.display = "block";
        resultado.textContent = `Faltan ${diferenciaDias} días para tu cumpleaños`;
        return;
    }
}

