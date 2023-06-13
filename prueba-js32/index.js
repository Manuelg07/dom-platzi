
console.log("Platzi");


function generarImagen() {
    var divImage = document.createElement('div');
    divImage.id = 'image';
    divImage.className = 'p-4';
  
    var img = new Image(); // Usar la clase Image en lugar de createElement('img')
    img.className = 'mx-auto';
    img.width = '320px';
    img.alt = '';
  
    img.onload = function() {
        // La imagen se ha cargado correctamente
        divImage.appendChild(img);
        var imageContainer = document.getElementById('image-container');
        imageContainer.appendChild(divImage);
    };
  
    img.onerror = function() {
        // Ocurrió un error al cargar la imagen
        console.log('Error al cargar la imagen.');
    };
  
    img.src = 'https://randomfox.ca/images/' + obtenerNumeroAleatorio() + '.jpg';
}

function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 122) + 1;
}
