var james = [10, 8.5, 7, 3, 9]

function media(aluno) {
    var soma = 0
    for (var contador = 0; contador < aluno.length; contador++) {
        soma = soma + aluno[contador]
    }
    return soma / aluno.length
}

var botaoAdicionaNota = document.querySelector('#botaoAdicionar')
var nota = document.querySelector('[name="nota"]')

botaoAdicionaNota.addEventListener('click', function(eventoDoFormulario) {
    eventoDoFormulario.preventDefault()
    james.push(parseInt(nota.value))
    console.log('Nota adicionada')
})


var resultado = document.querySelector('#resultado')
var botaoCalculaMedia = document.querySelector('#botaoCalculaMedia')
botaoCalculaMedia.addEventListener('click', function() {
    resultado.innerHTML = media(james)
})