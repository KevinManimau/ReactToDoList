<?php
include("ClassConnection.php");

class ClassUser extends ClassConnection{
    public function getAllUser(){
        $BFetch=$this->connectDB()->prepare("SELECT * FROM user");
        $BFetch->execute();

        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch['id'],
                "username"=>$Fetch['username'],
                "email"=>$Fetch['email'],
                "password"=>$Fetch['password']
            ];
            $I++;
        }
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}
?>