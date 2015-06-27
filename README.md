# QS.lib
Bibliothèque jQuery like, plus efficiente.


## En gros
QS.lib.js est une librairie JavaScript ou les méthodes natives sont en-capsulées
dans des fonctions dédiées uniques afin de garder des performances similaires.

La syntaxe des sélecteurs de QS.lib est de la forme:
```javascript
$_.fonctionSelecteur("string");
```


## Les sélecteurs
$_.tn();
```javascript
$_.tn("p"); // équivalent à document.getElementsByTagName("p"); ou $("p");
```
$_.id();
```javascript
$_.id("myId"); // équivalent à document.getElementsById("#myid"); ou $("#myid");
```
$_.cn();
```javascript
$_.cn("myClass"); // équivalent à document.getElementsByClassName("myClass"); ou $("myClass")
```
$_.na();
```javascript
$_.na("test1"); // équivalent à document.getElementsByName("nameValue"); ou $("[name='test1']");
```
$_.qa();
```javascript
$_.qa("[data-sample]"); // équivalent à document.querySelectorAll("[data-sample]"); ou $("[data-sample]");
```
$_.qs();
```javascript
$_.qs("p:first-child"); // équivalent à document.querySelector("p:first-child"); ou $("p:first");
```


## Les méthodes
.addClass();
```
$_.id("myId").addClass("top", "active");
```
.hasClass();
```
$_.id("myid").hasClass("top");
```
.removeClass();
```
$_.tn("p").removeClass("top", "active");
```
.replaceClass();
```
$_.id("myid").replaceClass("old", "new");
```
.toggleClass();
```
$_.tn("p").toggleClass("highlight blue");
// Alternative
$_.id("myid").removeClass("old").addClass("new");
```
.attr();
```
var title = $_.tn( "em" ).attr( "title" );
```
.prop();
```
var title = $_.id( "cb1" ).prop( "checked" );
```
.css();
```
var color = $_.id( "mydiv" ).css( "background-color" );
```
.html();
```
var color = $_.id( "mydiv" ).html( "Hello !!!" );
```


## Les évènements
.on();
```
$_.id("test").on("click", function() {
    this.toggleClass("active");
});
```
.off();
```
$_.id( "menu1" ).off("click", changePage);
```


## Installation
Décompressez l'archive sur votre site la ou ça vous chante et importez QS.lib.js 
le dans votre template, ex: 

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Appel de qs.lib.js -->
        <script src="_CHEMIN_VERS_QS_LIB_/qs.lib.js"></script>
    </head>
    <body>
        <!-- Du html par ici... -->
        <script>
            // Du javascript par la...
            // Des emmerdes pour bientôt !!!
        </script>
    </body>
</html>
```


## Faire un tests
Copier et coller ce code dans une page web puis corrigez le chemin vers qs.lib et faite le test.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Coloration d'un texte avec qs.lib.js</title>

        <!-- Appel qs.lib -->
        <script src="_CHEMIN_VERS_QS_LIB_/QS.lib.js"></script>
    </head>
    <body>
        <p id="texte">
            Cliquez pour changer la couleur du texte ! <br />
            Si ce texte ne devient pas rouge, vérifiez le chemin PATH de qs.lib.js <br />
            Le code utilise un sélecteur : $_.id et deux méthodes : .on() et .css() de qs.lib<br />
        </p>
        <a href="#" id="button">Click</a>
        
        <script>
            var s, ColorTexte = {
                settings: {
                    texte: $_.id("texte"),
                    button: $_.id("button")
                },
                init: function () {
                    s = this.settings;
                    this.boutonAction();
                },
                boutonAction: function () {
                    s.button.on("click", function () {
                        ColorTexte.color();
                    });
                },
                color: function () {
                    s.texte.css( "color", "red");
                }
            };

            (function () {
                ColorTexte.init();
            })();
        </script>
    </body>
</html>
```


## Version
 - Courante Béta 0.1


## Auteur
Créer par [Jean Pierre Decorps] (http://modernjs.blogspot.fr/).


## Licence
QS.lib est distribuée sous licence GNU, voir fichier LICENSE.md
