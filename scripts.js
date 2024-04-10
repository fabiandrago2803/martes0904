function validacion()
{
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var vehiculo = document.getElementById("vehiculo").checked;
    var email = document.getElementById("E-mail").value;
    //validacion de que el mail este completo
alert(nombre + " " + apellido);

    if (nombre == "" || apellido == "" || email == "") {
      alert ("Todos los campos son obligatorios");
      //return false;
} else {
  //alert('Los datos ingresados son correctos');
  //return true;

  console.log(validateemail)
  if(validateemail())
{
  alert('Los datos ingresados son correctos');
}
else
{
alert('el mail no esta correcto')
}
}
if(vehiculo.checked)
{
  alert('Los datos ingresados son correctos');
  }
  else
  {
    alert('Debe seleccionar una ocpion en el campo Vehiculo');
  }

}


function funcion1() {
    //Toma el valor del input con el id="num" y lo guarda en la variable x
    let x = document.getElementById("num").value;
    // chequea el valor ingesado
    let text;
    if (isNaN(x) || x < 1 || x > 10) // tengo tres condiciones con que una sea verdadera entra al if
    {     // isNaN(x) pregunta si no es un nro
      text = "Ingreso no valido";
    }
    else
    {
      text = "Ingreso valido";
    }
  
  
    x = x+1
    document.getElementById("demo").innerHTML = text;
    document.getElementById("numero").innerHTML = x;
  }
  

