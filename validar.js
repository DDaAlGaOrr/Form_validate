
var formulario = document.getElementById("formulario")
var error_nombre = document.getElementById("error_nombre")
var err_nom = document.getElementById("err_nom")
var alerta_error = document.getElementById("alerta_error");
var error_ap_pat = document.getElementById("error_ap_pat");
var msgError_ap_pat = document.getElementById("msgError_ap_pat");
var error_ap_mat = document.getElementById("error_ap_mat");
var msgError_ap_mat = document.getElementById("msgError_ap_mat");
var error_sexo = document.getElementById("error_sexo");
var msgError_sexo = document.getElementById("msgError_sexo");
var error_num = document.getElementById("error_num");
var msgError_num = document.getElementById("msgError_num");
var error_fech = document.getElementById("error_fech");
var msgError_fech = document.getElementById("msgError_fech");
var reset = document.getElementById("reset");

reset.addEventListener("click",function(){
     /**Mensajes finales */
     alerta_error.classList.remove("alert","alert-success");
     alerta_error.innerHTML = "";
 
     alerta_error.classList.remove("alert","alert-danger");
     alerta_error.innerHTML = "";
});

formulario.addEventListener("submit",function(e) {
    e.preventDefault();
    var datos = new FormData(formulario)
    
   var nombre = datos.get("nombre")
   var ap_pat = datos.get("ap_pat")
   var ap_mat = datos.get("ap_mat")
   var sexo = datos.get("sexo")
   var num_tel = datos.get("num_tel")
   var fech_naci = datos.get("fech_naci")
   var ciud_act = datos.get("ciud_act")
   var entrar = false

   /* reset de los mensajes*/
   /**nombre */
    error_nombre.classList.remove('is-invalid')
    err_nom.classList.remove('invalid-feedback')
    err_nom.innerHTML = ""
    alerta_error.classList.remove("alert","alert-warning")
    alerta_error.innerHTML = "" 

    /**apellido paterno */
    error_ap_pat.classList.remove('is-invalid')
    msgError_ap_pat.classList.remove('invalid-feedback')
    msgError_ap_pat.innerHTML = ""
    alerta_error.classList.remove("alert","alert-warning")
    alerta_error.innerHTML = ""

    /**Apellido materno */
    error_ap_mat.classList.remove('is-invalid')
    msgError_ap_mat.classList.remove('invalid-feedback')
    msgError_ap_mat.innerHTML = ""
    alerta_error.classList.remove("alert","alert-warning")
    alerta_error.innerHTML = ""

    /**sexo */
    error_sexo.classList.remove('is-invalid')
    msgError_sexo.classList.remove('invalid-feedback')
    msgError_sexo.innerHTML = ""
    alerta_error.classList.remove("alert","alert-warning")
    alerta_error.innerHTML = ""

    /**numero de telefono */
    error_num.classList.remove('is-invalid')
    msgError_num.classList.remove('invalid-feedback')
    msgError_num.innerHTML = ""
    alerta_error.classList.remove("alert","alert-warning")
    alerta_error.innerHTML = ""

    /**fecha de nacimiento */
    error_fech.classList.remove('is-invalid')
    msgError_fech.classList.remove('invalid-feedback')
    msgError_fech.innerHTML = ""
    alerta_error.classList.remove("alert","alert-warning")
    alerta_error.innerHTML = ""
   
    /**Mensajes finales */
    alerta_error.classList.remove("alert","alert-success");
    alerta_error.innerHTML = "";

    alerta_error.classList.remove("alert","alert-danger");
    alerta_error.innerHTML = "";

    /* validar nombre */
    if(nombre === ""){
        error_nombre.classList.add('is-invalid')
        err_nom.classList.add('invalid-feedback')
        err_nom.innerHTML = "Coloca tu nombre"
        alerta_error.classList.add("alert","alert-warning")
        alerta_error.innerHTML = `<p class="alert-heading">no has completado todos los campos</p>`
        entrar = true
    }

    /* validar apellido paterno */
    if(ap_pat === ""){
        error_ap_pat.classList.add('is-invalid')
        msgError_ap_pat.classList.add('invalid-feedback')
        msgError_ap_pat.innerHTML = "Coloca tu apellido paterno"
        alerta_error.classList.add("alert","alert-warning")
        alerta_error.innerHTML = `<p class="alert-heading">no has completado todos los campos</p>`
        entrar = true
    }

    /* validar apellido materno */
    if(ap_mat === ""){
        error_ap_mat.classList.add('is-invalid')
        msgError_ap_mat.classList.add('invalid-feedback')
        msgError_ap_mat.innerHTML = "Coloca tu apellido materno"
        alerta_error.classList.add("alert","alert-warning")
        alerta_error.innerHTML = `<p class="alert-heading">no has completado todos los campos</p>`
        entrar = true
    }

    /* validar sexo */
    if(sexo === ""){
        error_sexo.classList.add('is-invalid')
        msgError_sexo.classList.add('invalid-feedback')
        msgError_sexo.innerHTML = "Elige tu sexo"
        alerta_error.classList.add("alert","alert-warning")
        alerta_error.innerHTML = `<p class="alert-heading">no has completado todos los campos</p>`
        entrar = true
    }
   
    /*Validar numero de telefono*/
    if(num_tel === ""){
        error_num.classList.add('is-invalid')
        msgError_num.classList.add('invalid-feedback')
        msgError_num.innerHTML = "coloca tu numero de telefono"
        alerta_error.classList.add("alert","alert-warning")
        alerta_error.innerHTML = `<p class="alert-heading">no has completado todos los campos</p>`
        entrar = true
    }

    /**validar fecha de nacimiento */
    if(fech_naci === ""){
        error_fech.classList.add('is-invalid')
        msgError_fech.classList.add('invalid-feedback')
        msgError_fech.innerHTML = "coloca tu fecha de nacimiento"
        alerta_error.classList.add("alert","alert-warning")
        alerta_error.innerHTML = `<p class="alert-heading">no has completado todos los campos</p>`
        entrar = true
    }
   
    
    if(!entrar){
        fetch("guardar.php",{
            method:"POST",
            body: datos
        })
    
        .then(res => res.json())
        .then(data =>{ 
            if(data ==="correcto"){
                alerta_error.classList.add("alert","alert-success");
                alerta_error.innerHTML = "Datos guardados correctamente";
            }
            else if(data ==="error"){
                alerta_error.classList.add("alert","alert-danger");
                alerta_error.innerHTML = "No se pudieron guardar los datos";
               
            }
        })
    }
        
    
    

})









