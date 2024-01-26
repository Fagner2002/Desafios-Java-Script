let enviar = document.getElementById('enviar');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');

enviar.addEventListener('click', function() {
    // console(peso.value / altura.value);
    console.log(altura.value);
    console.log(typeof(altura.value));
    console.log(peso.value / altura.value);
    console.log((peso.value / altura.value) ** 2);
})