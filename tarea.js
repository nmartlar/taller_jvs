function esBisiesto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function mayorDeDos(n1, n2) {
    return (n1 > n2) ? n1 : n2;
}

function convertirMinutos(minutos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas} horas y ${minutosRestantes} minutos`;
}

function estaEnRango(numero, inicio, fin) {
    return numero >= inicio && numero <= fin;
}


function calcularPrecioFinal(precioInicial, descuento) {
    return precioInicial - (precioInicial * (descuento / 100));
}


function puedeVotar(edad) {
    return edad >= 18;
}


function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
