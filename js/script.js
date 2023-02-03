function somar() {
    let resultado = 0
    const x = Number(document.getElementById("x").value);
    const y = Number(document.getElementById("y").value);

    resultado = x + y
    // alert('O resultado é: ' + resultado)
    document.getElementById("resultado").innerHTML = 'O resultado é: ' +  resultado

}