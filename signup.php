<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "awareness";

try {
    
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
       
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        
        $sql = $conn->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");

        
        $sql->bindParam(':name', $name);
        $sql->bindParam(':email', $email);
        $sql->bindParam(':password', $hashed_password);

        
        $sql->execute();

        
        echo "
        <html>
        <head>
            <meta http-equiv='refresh' content='3;url=login.html'>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f5f5f5;
                    font-family: Arial, sans-serif;
                }
                .message-box {
                    text-align: center;
                    background-color: #fff;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                }
                .message-box h2 {
                    color: #4CAF50;
                    margin-bottom: 10px;
                }
                .message-box p {
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <div class='message-box'>
                <h2>Signup Successful!</h2>
                <p>Redirecting to the login page in a few seconds...</p>
            </div>
        </body>
        </html>";
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}


$conn = null;
?>
