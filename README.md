# Sistema de Gestión de Tareas

Este proyecto es una aplicación web básica para la gestión de tareas. Permite a los usuarios crear, listar, actualizar y eliminar tareas. La aplicación está construida utilizando HTML, CSS, JavaScript y PHP, y se conecta a una base de datos MySQL.

## Requisitos

- XAMPP o cualquier servidor local con soporte PHP y MySQL
- Navegador web (Chrome, Firefox, etc.)

## Instalación

1. **Clona o descarga este repositorio** en tu máquina local.
2. **Inicia XAMPP** y asegúrate de que Apache y MySQL estén ejecutándose.
3. **Importa la base de datos**:
    - Abre phpMyAdmin (generalmente accesible desde `http://localhost/phpmyadmin`).
    - Crea una nueva base de datos llamada `tareas`.
    - Importa el archivo SQL incluido (`tareas.sql`) en la base de datos `tareas`.
4. **Ubica los archivos del proyecto** en el directorio `htdocs` de XAMPP:
    - Mueve la carpeta del proyecto a `C:/xampp/htdocs/Tareas` (o el equivalente en tu sistema).

## Ejecución

1. **Accede a la aplicación** desde tu navegador web:
    - Navega a `http://localhost/Tareas/index.html`.
2. **Interacción con la aplicación**:
    - Añade, actualiza, y elimina tareas utilizando la interfaz de usuario.

## Estructura del Proyecto

- `index.html`: Página principal de la aplicación.
- `script.js`: Lógica del lado del cliente para manejar las interacciones con la API.
- `server.php`: Lógica del lado del servidor para manejar las operaciones CRUD.
- `tareas.sql`: Archivo SQL para crear la base de datos y las tablas necesarias.

## Pruebas

Para probar la funcionalidad de la aplicación:

1. **Añadir Tarea**: Completa los campos "Titulo de la tarea" y "Descripción de la tarea", y haz clic en "Add Task". La tarea debería aparecer en la lista de tareas.
2. **Actualizar Tarea**: Haz clic en "Actualizar" en una tarea existente, modifica los campos en los cuadros de diálogo y confirma. La tarea debería actualizarse con los nuevos valores.
3. **Eliminar Tarea**: Haz clic en "Eliminar" en una tarea existente. La tarea debería desaparecer de la lista después de la confirmación.

## Notas

- Asegúrate de que el archivo `server.php` tiene los permisos correctos para ser accesible desde el servidor web.
- Si encuentras algún problema con CORS, verifica que estás accediendo a la aplicación a través de `http://localhost`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor, realiza un fork del repositorio y crea un pull request con tus cambios.

---

¡Espero que esto te sea útil! Si necesitas más asistencia, aquí estoy para ayudarte. 🚀
