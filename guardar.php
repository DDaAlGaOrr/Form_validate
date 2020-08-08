<?php
include ("conexion.php");
$nombre = $_POST["nombre"];
$ap_pat = $_POST["ap_pat"];
$ap_mat = $_POST["ap_mat"];
$sexo = $_POST["sexo"];
$num_tel = $_POST["num_tel"];
$fech_naci = $_POST["fech_naci"];
try{

    $cnx = DBcnx();
    $sql = "INSERT INTO `alumnos`(`nombre`, `ap_pat`, `ap_mat`, `sexo`, `num_tel`, `fecha_naci`) VALUES (:nombre,:ap_pat,:ap_mat,:sexo,:num_tel,:fech_naci)";
    $result = $cnx->prepare($sql);
    $result->bindvalue(":nombre",$nombre );
    $result->bindvalue(":ap_pat",$ap_pat);
    $result->bindvalue(":ap_mat",$ap_mat);
    $result->bindvalue(":sexo",$sexo);
    $result->bindvalue(":num_tel",$num_tel); 
    $result->bindvalue(":fech_naci",$fech_naci);
    $result->execute();

    if ($result) {
        echo json_encode("correcto");
    }
    
        
}
catch(Exception $e){
    echo json_encode("error");
}