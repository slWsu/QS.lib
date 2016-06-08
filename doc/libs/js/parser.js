/* global oPages, oConfig */

// -----------------------------------------------------------------------------
// Construction du menu haut
var sNavHaut = '<ul id="menuHaut">';
for (var i in oPages) {
    var oLien = oPages[i];
    sNavHaut += '<li class="bouton_gauche"><a href="#' + oLien['id'] + '">' + oLien['titre'] + '</a></li>';
}
sNavHaut += '</ul>';

// -----------------------------------------------------------------------------
// Construction du menu gauche
var sNavGauche = '<ul id="menuGauche">';
for (var i in oPages) {
    var oLien = oPages[i];
    sNavGauche += '<li><a href="#' + oLien['id'] + '">' + oLien['titre'] + '</a></li>';
}
sNavGauche += '</ul>';

// -----------------------------------------------------------------------------
// Construction du header
var sHeader = '';
if (oConfig['projet']) {
    sHeader += '<span class="fr" style="margin:30px 25px 0 0;">';
    if (oConfig['projet']['liens'][1]['url']) {
        var oProjet = oConfig['projet']['liens'];
        for (var pr in oProjet) {
            sHeader += '<a href="' + oProjet[pr]['url'] + '" target="_blank" class="liens hover"><i class="fa fa-' + oProjet[pr]['icon'] + '"></i></a> &nbsp;&nbsp;';
        }
    }
    sHeader += '</span>';
    sHeader += '<h1 id="logo">' + oConfig['projet']['nom'] + '</h1> ';
}

// -----------------------------------------------------------------------------
// Construction de corp
var sTxt = '';
for (var p in oPages) {
    var oPage = oPages[p];
    sTxt += '<div class="page" data-cible="' + oPage['id'] + '">';
    // On traite le titre de la page
    sTxt += '<h1 class="pageTitre">' + oPage['titre'] + '</h1>';

    // On traite la banniere
    if (oPage['image']['nom']) {
        var sImg = oPage['image'];
        sTxt += '<img src="libs/images/' + sImg['nom'] + '" alt="' + sImg['alt'] + '" class="' + sImg['class'] + '" />';
    }
    // On traite l'introduction
    if (oPage['introduction']['texte']) {
        var sIcon = '';
        if (oPage['introduction']['icon']) {
            sIcon = '<i class="fa fa-' + oPage['introduction']['icon'] + '"></i> ';
        }
        sTxt += '<h2 class="intro"> ' + sIcon + oPage['introduction']['texte'] + '</h2>';
    }
    if (oPage['contenu']['image']['nom'] || oPage['contenu']['paragraphes'][1]) {
        sTxt += '<div class="introStep cf">';
        if (oPage['contenu']['image']['nom']) {
            sTxt += '<img src="libs/images/' + oPage['contenu']['image']['nom'] + '" alt="' + oPage['contenu']['image']['alt'] + '" class="' + oPage['contenu']['image']['class'] + '"/>';
        }
        if (oPage['contenu']['paragraphes']) {
            var oParagraphe = oPage['contenu']['paragraphes'];
            for (var j in oParagraphe) {
                sTxt += '<p>' + oParagraphe[j] + '</p>';
            }
        }
        sTxt += '</div>';
    }
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    if (oPage['documentation']) {
        var oDocumentation = oPage['documentation'];

        if (oDocumentation['introduction']['texte']) {
            var sIcon = '';
            if (oDocumentation['introduction']['icon']) {
                sIcon = '<i class="fa fa-' + oDocumentation['introduction']['icon'] + '"></i> ';
            }
            sTxt += '<h2 class="intro"> ' + sIcon + oDocumentation['introduction']['texte'] + '</h2>';
        }

        if (oDocumentation['image']['nom']) {
            sTxt += '<img src="libs/images/banniere.png" alt="..." class="imgFull" style="margin-top:20px;" />';
        }
        // On attaque les steps
        if (oPage['documentation']['step'][1]['titre']) {
            var oStepN1 = oPage['documentation']['step'], n1 = 1;

            for (var s1 in oStepN1) {
                sTxt += '<div class="step_n1">';

                var icon = '';
                if (oStepN1[s1]['step']) {
                    icon = 'tags';
                } else {
                    icon = 'tag';
                }

                if (oStepN1[s1]['titre']) {
                    sTxt += '<h3 class="titre step"><i class="fa fa-' + icon + '"></i> ' + n1 + ' <span class="mini_i">' + oStepN1[s1]['titre'] + '</span></h3>';
                }
                if (oStepN1[s1]['description']) {
                    sTxt += '<p>' + oStepN1[s1]['description'] + '</p>';
                }
                if (oStepN1[s1]['image']['nom']) {
                    sTxt += '<img src="libs/images/banniere.png" alt="..." class="imgFull" />';
                }
                // On traite le code snippet du step
                if (oStepN1[s1]['code']['langage']) {
                    var l1 = oStepN1[s1]['code']['snippet'].indexOf('<');
                    while (l1 >= 0) {
                        oStepN1[s1]['code']['snippet'] = oStepN1[s1]['code']['snippet'].replace('<', '&lt;');
                        l1 = oStepN1[s1]['code']['snippet'].indexOf('<');
                    }
                    sTxt += '<pre><code class="' + oStepN1[s1]['code']['langage'] + '">' + oStepN1[s1]['code']['snippet'] + '</code></pre>';
                }
                var oStepN2 = oStepN1[s1]['step'], n2 = 1;
                for (var s2 in oStepN2) {
                    sTxt += '<div class="step_n2">';

                    var icon = '';
                    if (oStepN2[s2]['step']) {
                        icon = 'tags';
                    } else {
                        icon = 'tag';
                    }

                    if (oStepN2[s2]['titre']) {
                        sTxt += '<h3 class="titre"><span class="mini"><i class="fa fa-' + icon + '"></i> ' + n1 + '.' + n2 + ' ' + oStepN2[s2]['titre'] + '</span></h3>';
                    }
                    if (oStepN2[s2]['description']) {
                        sTxt += '<p class="stepDescription">' + oStepN2[s2]['description'] + '</p>';
                    }
                    if (oStepN2[s2]['image']['nom']) {
                        sTxt += '<img src="libs/images/banniere.png" alt="..." class="imgFull" />';
                    }
                    // On traite le code snippet du step
                    if (oStepN2[s2]['code']['langage']) {
                        var l2 = oStepN2[s2]['code']['snippet'].indexOf('<');
                        while (l2 >= 0) {
                            oStepN2[s2]['code']['snippet'] = oStepN2[s2]['code']['snippet'].replace('<', '&lt;');
                            l2 = oStepN2[s2]['code']['snippet'].indexOf('<');
                        }
                        sTxt += '<pre><code class="' + oStepN2[s2]['code']['langage'] + '">' + oStepN2[s2]['code']['snippet'] + '</code></pre>';
                    }
                    var oStepN3 = oStepN2[s2]['step'], n3 = 1;
                    for (var s3 in oStepN3) {
                        sTxt += '<div class="step_n3">';
                        if (oStepN3[s3]['titre']) {
                            sTxt += '<h4 class="titre"><span class="mini"><i class="fa fa-tag"></i> ' + n1 + '.' + n2 + '.' + n3 + ' ' + oStepN3[s3]['titre'] + '</span></h4>';
                        }
                        if (oStepN3[s3]['description']) {
                            sTxt += '<p class="stepDescription">' + oStepN3[s3]['description'] + '</p>';
                        }
                        if (oStepN3[s3]['image']['nom']) {
                            sTxt += '<img src="libs/images/banniere.png" alt="..." class="imgFull" />';
                        }
                        // On traite le code snippet du step
                        if (oStepN3[s3]['code']['langage']) {
                            var l = oStepN3[s3]['code']['snippet'].indexOf('<');
                            while (l >= 0) {
                                oStepN3[s3]['code']['snippet'] = oStepN3[s3]['code']['snippet'].replace('<', '&lt;');
                                l = oStepN3[s3]['code']['snippet'].indexOf('<');
                            }
                            sTxt += '<pre><code class="' + oStepN3[s3]['code']['langage'] + '">' + oStepN3[s3]['code']['snippet'] + '</code></pre>';
                        }
                        sTxt += '</div>';
                        n3++;
                    }
                    sTxt += '</div>';
                    n2++;
                }
                sTxt += '</div>';
                n1++;
            }
        }
    }
    sTxt += '</div>';
}

// -----------------------------------------------------------------------------
// 
var oFooter = {
    copyright: 'Copyright 2015 &copy; slWsu',
    credits: {
        1: {site: 'Highlight', url: 'https://highlightjs.org/'},
        2: {site: 'Font Awesome', url: 'http://fortawesome.github.io/Font-Awesome/'}
    }
};
console.log(oFooter['credits'].length);

var sFooter = '';
sFooter += '<h4>';
sFooter += oFooter['copyright'];
sFooter += ' <span class="fr mini">Crédits : ';

var sep = '';
for (var cr in oFooter['credits']) {
    var ttt = 1;
    if (ttt < oFooter['credits'].length) {
        sep = '- ';
    }
    sFooter += '<a href="'
            + oFooter['credits'][cr]['url']
            + '" target="_blank">'
            + oFooter['credits'][cr]['site']
            + '</a> '
            + sep;
}

sFooter += ' </span>';
sFooter += '</h4>';
