document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Adiciona tarefa ao clicar no botão
    addTaskBtn.addEventListener('click', addTask);

    // Permite adicionar a tarefa pressionando a tecla "Enter"
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value;

        // Valida se o input está em branco ou só tem espaços
        if (taskText.trim() === '') {
            alert('A tarefa não pode estar vazia. Por favor, insira um texto.');
            return;
        }

        // Criação do item da lista 
        const li = document.createElement('li');

        // Checkbox para controle de status 
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        // marcar/desmarcar a tarefa
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        // O texto é inserido em um span estático e sem botão de exclusão
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = taskText;

        // Monta o elemento na tela 
        li.appendChild(span);
        taskList.appendChild(li);

        // Limpa o campo de texto para a próxima inserção
        taskInput.value = '';
        taskInput.focus();
    }
});
