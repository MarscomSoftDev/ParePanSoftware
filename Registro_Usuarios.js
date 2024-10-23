function mostrarImagen(event) {
  // Obtener el archivo seleccionado por el usuario
  var archivo = event.target.files[0];
  var salida_Imagen = document.getElementById("icono");

  // Cambiar la fuente del icono por la imagen seleccionada
  salida_Imagen.src = URL.createObjectURL(archivo);
  salida_Imagen.onload = function () {
    URL.revokeObjectURL(salida_Imagen.src); // Liberar la memoria
  };

  // Ajustar el tamaño de la imagen para que ocupe todo el círculo
  salida_Imagen.style.width = "100%";
  salida_Imagen.style.height = "100%";
  salida_Imagen.style.objectFit = "cover"; // Asegura que la imagen se ajuste dentro del círculo
}
