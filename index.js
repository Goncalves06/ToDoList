function addTarefa() {

    const tarefa = document.getElementById("caixaTexto").value;

    if(tarefa === "") {
        alert("Insira a terefa");
        return;
    }

    const novaTarefa = document.createElement('div');

    const txtTarefa = document.createElement('span');
    txtTarefa.textContent = tarefa;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(txtTarefa);

    document.getElementById("listaTarefas").appendChild(novaTarefa);

            
    document.getElementById("caixaTexto").value = "";

}

function rmvTarefa() {
    
    const listaTarefas = document.getElementById("listaTarefas");
    
    
    const tarefas = listaTarefas.getElementsByTagName("div");
    
    
    for (let i = tarefas.length - 1; i >= 0; i--) {
        const tarefa = tarefas[i];
        const checkbox = tarefa.querySelector('input[type="checkbox"]'); 
        
        
        if (checkbox.checked) {
            listaTarefas.removeChild(tarefa);
        }
    }
}
