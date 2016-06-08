/* global $_, oConfig */

// -----------------------------------------------------------------------------
// Mise a jour des couleurs du théme

var oBody = $_.id('pattern');
oBody.css('background', '#f3f3f3 url(\'libs/images/patterns/' + oConfig['documentation']['pattern'] + '\')');
oBody.css('font-family', oConfig['documentation']['font']['contenu']);

// Header border-bottom
var oHeader = $_.tn('header');
for (var i = 0; i < oHeader.length; i++) {
    oHeader[i].css('border-bottom', 'none');
}

// Logo font-family
var oLogo = $_.id('logo');
oLogo.css('color', oConfig['documentation']['couleur']);
oLogo.css('font-family', oConfig['documentation']['font']['logo']);

// Logo font-family
var oPageTitre = $_.cn('pageTitre');
oPageTitre.css('color', oConfig['documentation']['couleur']);
oPageTitre.css('font-family', oConfig['documentation']['font']['titre']);

// Footer border-top
var oFooter = $_.tn('footer');
for (var i = 0; i < oFooter.length; i++) {
    oFooter[i].css('border-top', 'none');
}

var sTitre = $_.cn('titre');
for (var i = 0; i < sTitre.length; i++) {
    sTitre[i].style.color = oConfig['documentation']['couleur'];
    sTitre[i].style.fontFamily = oConfig['documentation']['font']['titre'];
}

var sStep = $_.cn("step");
for (var i = 0; i < sStep.length; i++) {
    sStep[i].css('border-bottom', '6px groove ' + oConfig['documentation']['couleur']);
}

var sStepTitrePage = $_.cn("intro");
for (var i = 0; i < sStepTitrePage.length; i++) {
    sStepTitrePage[i].css('background-color', oConfig['documentation']['couleur']);
    sStepTitrePage[i].css('font-family', oConfig['documentation']['font']['intro']);
}

var sStepTitreDocumentation = $_.cn("documentation");
for (var i = 0; i < sStepTitreDocumentation.length; i++) {
    sStepTitreDocumentation[i].css('background-color', oConfig['documentation']['couleur']);
    sStepTitreDocumentation[i].css('font-family', oConfig['documentation']['font']['intro']);
}

var sStepN2 = $_.cn("step_n2");
for (var i = 0; i < sStepN2.length; i++) {
    sStepN2[i].css('border-left', '6px groove ' + oConfig['documentation']['couleur']);
}

var sStepN3 = $_.cn("step_n3");
for (var i = 0; i < sStepN3.length; i++) {
    sStepN3[i].css('border-left', '1px solid ' + oConfig['documentation']['couleur']);
}

var sPre = $_.tn('pre');
for (var i = 0; i < sPre.length; i++) {
    sPre[i].css('border', '1px solid ' + oConfig['documentation']['couleur']);
    sPre[i].css('font-family', oConfig['documentation']['font']['code']);
}

var sHref = $_.tn('a');
for (var i = 0; i < sHref.length; i++) {
    sHref[i].style.color = oConfig['documentation']['couleur'];
}

// Fonts
// http://www.techrepublic.com/blog/web-designer/how-to-use-the-google-webfont-loader/
var oGoogleFont = oConfig['documentation']['font'];
WebFontConfig = {
    google: {
        families: [oGoogleFont['logo'], oGoogleFont['titre'], oGoogleFont['intro'], oGoogleFont['contenu'], oGoogleFont['code']]
    }
};

(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

var oSelect= $_.id('syntaxe');
oSelect.css('margin-top', '0');
oSelect.css('border', 'none');