
// function mostrarAlerta() {
//     const divAlerta = document.getElementById(`alerta`)
//     divAlerta.classList.add(`mostrar`)
// }

// function fecharAlerta() {
//     const divAlerta = document.getElementById (`alerta`)
//     divAlerta.classList.remove(`mostrar`)
// }

// const btnMostrar = document.getElementById(`mostrar`)
// const btnFechar = document.getElementById(`fechar`)

// btnMostrar.addEventListener('click')

let i = 1
function mostrarAlerta() {
    if (i == 1) {
        document.getElementById(`mensagem`).innerHTML = "Você clicou " + i++ + " vez.";
    }
    else {
        document.getElementById(`mensagem`).innerHTML = "Você clicou " + i++ + " vezes. ";
    }

    const divAlerta = document.getElementById(`alerta`)
    divAlerta.classList.add(`mostrar`)
}

function fecharAlerta() {
    i = 1
    const divAlerta = document.getElementById(`alerta`)
    divAlerta.classList.remove(`mostrar`)
}

const buttonMostrar = document.getElementById(`btn-mostrar`)
const buttonFechar = document.getElementById(`btn-fechar`)

buttonMostrar.addEventListener('click', mostrarAlerta)
buttonFechar.addEventListener('click', fecharAlerta)



