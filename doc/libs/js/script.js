/* global $_, */

// -----------------------------------------------------------------------------
// 
window.addEventListener('load', function () {
    var attenteChargement = $_.id('attenteChargement');
    document.body.removeChild(attenteChargement);
});
var page = $_.cn('page');

// -----------------------------------------------------------------------------
// 
window.location.hash = 'page1';
document.querySelector('.page[data-cible="' + location.hash.replace("#", '') + '"]').style.display = 'block';


// -----------------------------------------------------------------------------
//
window.addEventListener('hashchange', function () {
    for (var i = 0; i < page.length; i++) {
        page[i].style.display = 'none';
    }
    document.querySelector('.page[data-cible="' + location.hash.replace("#", '') + '"]').style.display = 'block';

});


// -----------------------------------------------------------------------------
//
function changeHighlight(chemin) {
    document.getElementById('pagestyle').setAttribute('href', chemin);
}
