// je cherche l'élément avec l'ID "iconDeBulle"
var iconDeBulle = document.getElementById("iconDeBulle");

// je vérifie si l'élément iconDeBulle existe
if (iconDeBulle) {

    // Crée un nouvel élément div qui servira à afficher le tooltip
    var tooltip = document.createElement("div");

    tooltip.className = "tooltip";
    // j'insère du contenu HTML dans le tooltip, incluant un lien pour "En savoir plus"
    tooltip.innerHTML = "bulle de dialogue pour teste ! <br> <a href='#'>En savoir plus</a>";
    // Ajoute le tooltip dans  l'élément de iconDeBulle ?
    iconDeBulle.appendChild(tooltip);

    // je declare une variable pour gérer le temps que doit faire le tooltip si la souris fais juste un passage dessus
    var hideTimeout;

    // j'ajoute un écouteur d'événement sur l'icône iconDeBulle
    iconDeBulle.addEventListener("mouseenter", function () {
        // Si la souris entre dans l'icône, j'annule le délai de masquage du tooltip
        clearTimeout(hideTimeout);
        //  visibilité du tooltip pour le rendre visible
        tooltip.style.opacity = "1";
        tooltip.style.visibility = "visible";
    });

    // Ajoute un écouteur d'événement sur le tooltip lui-même pour garder le tooltip visible
    // lorsque la souris survole le tooltip
    tooltip.addEventListener("mouseenter", function () {
        // Annule le délai de disparition si la souris survole le tooltip
        clearTimeout(hideTimeout);
    });

    // Ajoute un écouteur d'événement sur l'icône (événement 'mouseleave')
    iconDeBulle.addEventListener("mouseleave", function () {
        // Si la souris quitte l'icône, commence un délai avant de masquer le tooltip
        hideTimeout = setTimeout(function () {
            // pour rendre le tooltip invisible après une 1 seconde
            tooltip.style.opacity = "0";
            tooltip.style.visibility = "hidden";
        }, 1000); // Le tooltip restera visible pendant 1 seconde avant de disparaître
    });

    // j'ajoute un écouteur d'événement sur le tooltip pour masquer le tooltip
    // une fois que la souris quitte le tooltip
    tooltip.addEventListener("mouseleave", function () {
        // Après avoir quitté le tooltip, le delai commence pour etre masquer
        hideTimeout = setTimeout(function () {
            // Rend le tooltip invisible après 1 seconde
            tooltip.style.opacity = "0";
            tooltip.style.visibility = "hidden";
        }, 1000); // temps de disparition après 1 seconde
    });

} else {
    // Si l'élément iconDeBulle n'existe pas, l'erreur s affiche dans la console
    console.error("iconDeBulle n'existe pas.");
}

