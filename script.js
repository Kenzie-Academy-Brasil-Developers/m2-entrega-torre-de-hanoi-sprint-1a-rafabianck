function reiniciarJogo() {
    window.location.reload();
}

function validarSeJogoAcabou(torre) {
    if (torre.className != "tower 1" && torre.childElementCount == 4) {
        swal("Victory!", "You won the game!", "success");
    }
}

var primeiroClique = undefined;
function registraColuna(event) {
    if (primeiroClique == undefined) {
        if (event.currentTarget.childElementCount > 0) {
            primeiroClique = event.currentTarget.className;
            console.log(event.currentTarget.lastElementChild);
            event.currentTarget.lastElementChild.style.backgroundColor = "pink";
        }
    }
    else {
        if (event.currentTarget.childElementCount < 4) {
            if (event.currentTarget.lastElementChild == undefined || document.getElementsByClassName(primeiroClique)[0].lastElementChild.clientWidth < event.currentTarget.lastElementChild.clientWidth) {
                event.currentTarget.appendChild(document.getElementsByClassName(primeiroClique)[0].lastElementChild);
                validarSeJogoAcabou(event.currentTarget);
            }
            primeiroClique = undefined;
            event.currentTarget.lastElementChild.style.backgroundColor = "#2E8DDB";
        }
    }
}
function adicionaListener(elemento) {
    for (let i = 0; i < elemento.length; i++) {
        elemento[i].addEventListener('click', registraColuna, false);
    }
}
document.addEventListener("DOMContentLoaded", function () { adicionaListener(document.getElementsByClassName('tower')) }, false);