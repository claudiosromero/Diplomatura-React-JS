function cambiarColor(color) {
    document.querySelector('body').style.background = color;
}

function reset(color){
    document.querySelector('body').style.background = color
}


// var mensaje = document.getElementById('mensaje');
// var contador = document.getElementById('contador');

// mensaje.addEventListener('input', function(e) {
//     var target = e.target;
//     var longitudMax = target.getAttribute('maxlength');
//     var longitudAct = target.value.length;
//     contador.innerHTML = `${longitudAct}/${longitudMax}`;
// }); 