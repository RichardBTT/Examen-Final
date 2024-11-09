document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.querySelector('.task-list');
    const taskForm = document.getElementById('task-form');

    // Función para agregar una nueva tarea
    function addTask(title, description) {
        fetch('server.php', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Tarea creada exitosamente') {
                listTasks(); // Listar tareas después de agregar
            } else {
                alert('Error al crear tarea');
            }
        });
    }

    // Función para listar tareas
    function listTasks() {
        fetch('server.php')
        .then(response => response.json())
        .then(tasks => {
            taskList.innerHTML = ''; // Limpiar la lista antes de agregar
            tasks.forEach(task => displayTask(task));
        });
    }

    // Función para actualizar una tarea
    function updateTask(id, title, description) {
        fetch('server.php', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, title, description })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Tarea actualizada exitosamente') {
                listTasks(); // Listar tareas después de actualizar
            } else {
                alert('Error al actualizar tarea');
            }
        });
    }

    // Función para eliminar una tarea
    function deleteTask(id) {
        if (confirm('¿Estás seguro de eliminar esta tarea?')) {
            fetch('server.php', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Tarea eliminada exitosamente') {
                    listTasks(); // Listar tareas después de eliminar
                } else {
                    alert('Error al eliminar tarea');
                }
            });
        }
    }

    // Función para mostrar una tarea en la lista
    function displayTask(task) {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.id = `task-${task.id}`;
        taskItem.innerHTML = `
            <p>${task.title}</p>
            <p>${task.description}</p>
            <button onclick="updateTask(${task.id}, prompt('Nuevo título', '${task.title}'), prompt('Nueva descripción', '${task.description}'))">Actualizar</button>
            <button onclick="deleteTask(${task.id})">Eliminar</button>
        `;
        taskList.appendChild(taskItem);
    }

    // Event listener para el formulario de agregar tarea
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;

        if (title && description) {
            addTask(title, description);
            document.getElementById('task-title').value = '';
            document.getElementById('task-description').value = '';
        } else {
            alert('Por favor, ingrese título y descripción');
        }
    });

    // Cargar tareas al cargar la página
    listTasks();
});

