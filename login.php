<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "awareness";

try {
    
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $email = $_POST['email'];
        $password = $_POST['password'];

        
        $sql = $conn->prepare("SELECT * FROM users WHERE email = :email");
        $sql->bindParam(':email', $email);
        $sql->execute();
        $user = $sql->fetch(PDO::FETCH_ASSOC);

        
        if ($user && password_verify($password, $user['password'])) {
            
            $message = "Login successful! Welcome, " . htmlspecialchars($user['name']) . ". Redirecting to home page...";
            echo "<script>
                    alert('$message');
                    window.location.href = 'index.html'; 
                  </script>";
        } else {
            
            echo "<script>alert('Invalid email or password!');</script>";
        }
    }
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}


$conn = null;
?>
