/*Name this external file gallery.js*/

function upDate(previewPic) {
    console.log("Evento upDate disparado");
    console.log("Alt text:", previewPic.alt);
    console.log("Source:", previewPic.src);
    
    // Cambia la URL de la imagen de fondo del div con el id "image"
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Cambia el texto del div con el id "image"
    document.getElementById("image").innerText = previewPic.alt;
}

   
function unDo() {
    console.log("Evento unDo disparado");
    
    // Revertir la URL de la imagen de fondo del div con el id "image" a la original (vacío)
    document.getElementById("image").style.backgroundImage = "url('')";
    
    // Revertir el texto del div con el id "image" al original
    document.getElementById("image").innerText = "Hover over an image below to display here.";
}
