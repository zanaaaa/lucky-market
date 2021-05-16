<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "", "reactform");
$query = "insert into userfeedback (name,email, feedback, phone, message, website)
values(
'" . $_POST['name'] . "',
'" . $_POST['email'] . "',
'" . $_POST['phone'] . "',
'" . $_POST['message'] . "',
'" . $_POST['website'] . "'
)";
$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}
?>