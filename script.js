// Esto agrega a la pantalla elvalor del botón de la calculadora que toquemos
function enter(valor){
    document.getElementById('pantalla').value += valor;
}

// Esta acción calcula lo que hay en pantalla y muestra el resultado
function result(){
    const resultadoPantalla = document.getElementById('pantalla').value;
    const resultadoTotal = eval(resultadoPantalla);
    document.getElementById('pantalla').value = resultadoTotal;
}

// Esta acción vacía la pantalla
function deletAll(){
    document.getElementById('pantalla').value = '';
}
