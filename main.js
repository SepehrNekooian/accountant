let Contador= 0
let Resultado = document.getElementsByTagName('p')[0]

function Adicionar()
{
    Contador++

    Resultado.innerHTML = `Contador = ${Contador}`

}

function Remover()
{
    Contador--

    Resultado.innerHTML = `Contador = ${Contador}`
}