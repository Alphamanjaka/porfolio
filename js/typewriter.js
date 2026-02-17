/**
 * Démarre un effet de machine à écrire sur un élément HTML.
 * @param {HTMLElement} element L'élément sur lequel appliquer l'effet.
 * @param {number} [speed=100] La vitesse de frappe en millisecondes.
 */
function startTypewriter(element, speed = 100) {
    if (!element) return;

    const text = element.getAttribute('data-text');
    if (!text) return;

    element.innerHTML = '';
    element.classList.add('typing');
    element.style.visibility = 'visible'; // Rendre visible avant de taper

    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Garde le curseur clignotant à la fin
        }
    }
    type();
}