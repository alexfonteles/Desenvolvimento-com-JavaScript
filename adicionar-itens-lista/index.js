const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaTexto');
const botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaSuspensa = document.querySelector('#listaSuspensa');

botaoAdicionar.addEventListener('click', function() {
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = '';
    listaTarefas.appendChild(adicionarTarefa(textoDaTarefa));
    exibeOcultaListaSuspensa();
});

function adicionarTarefa(textoDaTarefa) {
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');
    
    elementoSPAN.setAttribute('id', 'tarefa');
    elementoSPAN.textContent = textoDaTarefa;

    elementoLI.className = 'naoRealizada';
    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(adicionarBotaoRemover());

    elementoSPAN.addEventListener('click', function() {
        if(this.id === 'tarefa') {
            if(this.parentNode.className === 'naoRealizada') {
                this.parentNode.className = 'realizada';
            } else {
                this.parentNode.className = 'naoRealizada';
            }
        }
    });

    return elementoLI;
}

function adicionarBotaoRemover() {
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = " ✖"
    botaoRemover.className = 'raemover'

    botaoRemover.addEventListener('click', function() {
        listaTarefas.removeChild(this.parentNode);
        exibeOcultaListaSuspensa();
    });

    return botaoRemover;
}

function exibeOcultaListaSuspensa() {
    const elementoSPAN = document.querySelector('#tarefa');
    if(elementoSPAN === null){
        listaSuspensa.setAttribute('hidden','hidden');
    } else{
        listaSuspensa.removeAttribute('hidden');
    }
};

listaSuspensa.addEventListener('change', function() {
    if(listaSuspensa.selectedIndex === 1 || listaSuspensa.selectedIndex === 2) {
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
        for(tarefa of vetorTarefas){
            tarefa.dispatchEvent(new Event('click'));
        } 
    } else if (listaSuspensa.selectedIndex === 3) {
        const vetorTarefas = listaTarefas.querySelectorAll('.remover');
        for(tarefa of vetorTarefas){
            tarefa.dispatchEvent(new Event('click'));
        }
    }
});