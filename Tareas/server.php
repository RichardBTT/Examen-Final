<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "tareas";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Funciones para manejar las operaciones CRUD
function createTask($title, $description) {
    global $conn;
    $sql = "INSERT INTO tasks (title, description, status, created_at) VALUES (?, ?, 0, NOW())";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $title, $description);
    return $stmt->execute();
}

function getTasks() {
    global $conn;
    $sql = "SELECT id, title, description, status, created_at FROM tasks";
    $result = $conn->query($sql);
    return json_encode($result->fetch_all(MYSQLI_ASSOC));
}

function updateTask($id, $title, $description) {
    global $conn;
    $sql = "UPDATE tasks SET title = ?, description = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $title, $description, $id);
    return $stmt->execute();
}

function deleteTask($id) {
    global $conn;
    $sql = "DELETE FROM tasks WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);
    return $stmt->execute();
}

// Manejo de solicitudes
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        echo createTask($data['title'], $data['description']) ? json_encode(['message' => 'Tarea creada exitosamente']) : json_encode(['error' => 'Error al crear tarea']);
        break;
    case 'GET':
        echo getTasks();
        break;
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        echo updateTask($data['id'], $data['title'], $data['description']) ? json_encode(['message' => 'Tarea actualizada exitosamente']) : json_encode(['error' => 'Error al actualizar tarea']);
        break;
    case 'DELETE':
        $data = json_decode(file_get_contents('php://input'), true);
        echo deleteTask($data['id']) ? json_encode(['message' => 'Tarea eliminada exitosamente']) : json_encode(['error' => 'Error al eliminar tarea']);
        break;
}
?>

