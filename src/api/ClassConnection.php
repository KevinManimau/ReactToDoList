<?php
abstract class ClassConnection{
    protected function connectDB()
    {
        try{
            $con = new PDO("mysql:host=localhost;dbname=react","root","");
            return $con;
        }catch (PDOException $e){
            return $e->getMessage();
        }
    }
}
?>