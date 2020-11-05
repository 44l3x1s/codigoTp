function comparar(){

	var nombre = document.getElementById("nombre").value;	
	var autor = document.getElementById("autor").value;
	var tipo = document.getElementById("tipo").value;

	for (var i = 0; i < cuadros.length; i++) {
		if(nombre.toUpperCase()==cuadros[i].nombre.toUpperCase() ){
			var area =document.getElementById("area");
			//parseo a JSON
			var descripcion = JSON.stringify(cuadros[i]); 
			//muestro en el textarea
			area.value = descripcion;
		}else{
			var area = document.getElementById("area");
			area.value="No se encontro ningun elemento relacionado";
		}

	}
}
