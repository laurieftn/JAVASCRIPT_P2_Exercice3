document.getElementById("img1").onclick = growImage; // active l'agrandissement de l'image avec un clic //

function growImage(){ // définition de la fonction //
    var img = document.getElementById("img1"); // reprend l'image définie en HTML //
    img.style.width = 500 + "px"; // redimensionne l'image //
}