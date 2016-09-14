// -----------------------------------------------------------------------------
// Configuration de la documentation
var oConfig = {
    documentation: {
        couleur: 'SteelBlue',
        pattern: 'fond.png',
        font: {
            logo: 'Russo One',
            titre: 'Pontano Sans',
            intro: 'Pontano Sans',
            contenu: 'Pontano Sans',
            code: 'Anonymous Pro'
        }
    },
    projet: {
        nom: 'QS.lib',
        projetUrl: '#',
        liens: {
            1: {url: 'https://github.com/slWsu/QS.lib', icon: 'github'}
        }
    }
};

// -----------------------------------------------------------------------------
// 
var oPages = {
    page1: {
        id: 'page1', // Requis
        titre: 'Présentation', // Requis
        image: {nom: '', alt: 'alt', class: 'imgFull'},
        introduction: {texte: 'Bibliothèque jQuery like, plus efficiente.', icon: 'globe'},
        contenu: {
            image: {nom: 'logo.png', alt: 'alt', class: 'fl'},
            paragraphes: {
                1: 'Initialement créée par mon ami <a href="#">Jean Pierre Decorps</a> QS.lib est une librairie JS en version {BETA} plut&ocirc;t rapide mais inachevée faute de temps. Agréablement surpri par sa syntaxe et ses perfs, je me suis (avec l\'accord de JC) décider a en reprendre son développement.',
                2: 'Pour le moment, cette documentation réflète a 100% ce que propose JP sur son blog via les quatre url suivantes: <a href="http://modernjs.blogspot.fr/2014/08/qlibjs-creation-dune-bibliotheque.html">PART.01</a> - <a href="http://modernjs.blogspot.fr/2014/08/qlibjs-creation-dune-bibliotheque_16.html">PART.02</a> - <a href="http://modernjs.blogspot.fr/2014/08/qlibjs-creation-dune-bibliotheque_26.html">PART.03</a> - <a href="http://modernjs.blogspot.fr/2014/09/qlibjs-creation-dune-bibliotheque.html">PART.04</a>. Le fonctions que j\'ai moi même implémenter ne sont pour le moment pas inclus.',
                3: 'Q.lib.js possède les mêmes méthodes (plus .replaceClass) que jQuery pour gérer les classes CSS, que ce soit au niveau syntaxique, sémantique et fonctionnel, en plus rapide bien sûr.',
                4: 'Q.lib.js sait travailler avec toutes les propriétés associées à un élément : attributs, classes CSS, propriétés booléenne (checked, disabled, ...) et enfin les propriétés CSS classiques.',
                5: 'Q.lib.js gère les events classiques avec la méthode .on() et .off() et les custom events avec .pub() et .sub().',
                6: 'jQuery souffre d\'un handicap majeur dans le cadre des applications mobiles/sites mobiles, à savoir une vitesse d\'exécution très faible en regard des performances natives de Javascript, associée à sa lourdeur. Pour autant, jQuery est largement utilisé par les web-designers, il est incontournable dans beaucoup de frameworks. L\'idée est donc de concevoir une librairie dont l\'utilisation mime au mieux dans sa syntaxe celle de jQuery tout en étant conçue pour être entre 4 et 20 fois plus rapide et beaucoup moins lourde (jQuery 2.1.1: 247Ko et 84Ko minimifiée).'
            }
        },
        documentation: {
            image: {nom: '', alt: 'alt', class: 'imgFull'},
            introduction: {texte: 'Obtenir QS.lib.js.', icon: 'download'},
            step: {
                1: {
                    titre: 'Téléchargement',
                    description: 'QS.lib est disponible sur GitHub a l\'adresse indiqué ci-dessous.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'html', snippet: 'https://github.com/slWsu/QS.lib'}
                },
                2: {
                    titre: 'Installation',
                    description: 'Il suffit de décompresser l\'archive dans votre dossier JS puis d\'importer le fichier QS.lib.js au sein de votre page web, votre HTML devrait ressembler a ceci:',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'html', snippet: '\u003C\u0021DOCTYPE\u0020html\u003E\u000D\u000A\u003Chtml\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u003Chead\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u003C\u0021\u002D\u002D\u0020Appel\u0020de\u0020qs.lib.js\u0020\u002D\u002D\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u003Cscript\u0020src\u003D\u0022\u005FCHEMIN\u005FVERS\u005FQS\u005FLIB\u005F\u002FQS.lib.js\u0022\u003E\u003C\u002Fscript\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u003C\u002Fhead\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u003Cbody\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u003C\u0021\u002D\u002D\u0020Du\u0020html\u0020par\u0020ici...\u0020\u002D\u002D\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u003Cscript\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002F\u002F\u0020Du\u0020javascript\u0020par\u0020la...\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002F\u002F\u0020Des\u0020emmerdes\u0020pour\u0020bient\u0026ocirc\u003Bt\u0020\u0021\u0021\u0021\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u003C\u002Fscript\u003E\u000D\u000A\u0020\u0020\u0020\u0020\u003C\u002Fbody\u003E\u000D\u000A\u003C\u002Fhtml\u003E'},
                },
                3: {
                    titre: 'Test',
                    description: 'On ajoute un peut de HTML et un peut de JS.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: '', snippet: ''},
                    step: {
                        1: {
                            titre: 'Ajout du HTML',
                            description: 'Remplacez dans le code ci-dessus la ligne : &lt;!-- Du html par ici... --&gt; par le code ci-dessous.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: 'http://jsfiddle.net/L_Robin/8U5kE/'},
                            code: {langage: 'html', snippet: '\u003Cp\u0020id\u003D\u0022texte\u0022\u003E\u000D\u000A\u0020\u0020\u0020\u0020Cliquez\u0020pour\u0020changer\u0020la\u0020couleur\u0020du\u0020texte\u0020\u0021\u0020\u003Cbr\u0020\u002F\u003E\u000D\u000A\u0020\u0020\u0020\u0020Si\u0020ce\u0020texte\u0020ne\u0020devient\u0020pas\u0020rouge,\u0020v\u0026eacute\u003Brifiez\u0020le\u0020chemin\u0020PATH\u0020de\u0020qs.lib.js\u0020\u003Cbr\u0020\u002F\u003E\u000D\u000A\u0020\u0020\u0020\u0020Le\u0020code\u0020utilise\u0020un\u0020s\u0026eacute\u003Blecteur\u0020:\u0020\u0024\u005F.id\u0020et\u0020deux\u0020m\u0026eacute\u003Bthodes\u0020:\u0020.on\u0028\u0029\u0020et\u0020.css\u0028\u0029\u0020de\u0020qs.lib\u003Cbr\u0020\u002F\u003E\u000D\u000A\u003C\u002Fp\u003E\u000D\u000A\u003Ca\u0020href\u003D\u0022\u0023\u0022\u0020id\u003D\u0022button\u0022\u003EClick\u003C\u002Fa\u003E'}
                        },
                        2: {
                            titre: 'Ajout du JS',
                            description: 'Ajoutez le code ci-dessous entre les balises &lt;script> et &lt;/script>',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: 'http://jsfiddle.net/L_Robin/8U5kE/'},
                            code: {langage: 'javascript', snippet: 'var\u0020s,\u0020ColorTexte\u0020\u003D\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020settings:\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020texte:\u0020\u0024\u005F.id\u0028\u0022texte\u0022\u0029,\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020button:\u0020\u0024\u005F.id\u0028\u0022button\u0022\u0029\u000D\u000A\u0020\u0020\u0020\u0020\u007D,\u000D\u000A\u0020\u0020\u0020\u0020init:\u0020function\u0020\u0028\u0029\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020s\u0020\u003D\u0020this.settings\u003B\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020this.boutonAction\u0028\u0029\u003B\u000D\u000A\u0020\u0020\u0020\u0020\u007D,\u000D\u000A\u0020\u0020\u0020\u0020boutonAction:\u0020function\u0020\u0028\u0029\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020s.button.on\u0028\u0022click\u0022,\u0020function\u0020\u0028\u0029\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020ColorTexte.color\u0028\u0029\u003B\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007D\u0029\u003B\u000D\u000A\u0020\u0020\u0020\u0020\u007D,\u000D\u000A\u0020\u0020\u0020\u0020color:\u0020function\u0020\u0028\u0029\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020s.texte.css\u0028\u0020\u0022color\u0022,\u0020\u0022red\u0022\u0029\u003B\u000D\u000A\u0020\u0020\u0020\u0020\u007D\u000D\u000A\u007D\u003B\u000D\u000A\u000D\u000A\u0028function\u0020\u0028\u0029\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020ColorTexte.init\u0028\u0029\u003B\u000D\u000A\u007D\u0029\u0028\u0029\u003B'}
                        }
                    }
                },
                4: {
                    titre: 'Pour conclure',
                    description: 'Normalement tout devrait fonctionner correctement, si par hasard ce n\'était pas le cas, assurez-vous de bien faire pointer l\'appel de votre script vers le fichier QS.lib.js.<br /> Comme expliquer dans le HTML, le text devrait changer de couleur apres le clic.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: 'http://jsfiddle.net/L_Robin/8U5kE/'},
                    code: {langage: '', snippet: ''}
                }
            }
        }
    },
    page2: {
        id: 'page2', // Requis
        titre: 'Les sélecteurs', // Requis
        image: {nom: '', alt: 'alt', class: 'imgFull'},
        introduction: {texte: '', icon: 'globe'},
        contenu: {
            image: {nom: '', alt: 'alt', class: 'fl'},
            paragraphes: {
                1: 'L\'idée dans Q.lib.js est donc d\'en-capsuler ces différentes méthodes natives de JavaScrip dans des fonctions dédiées uniques et surtout plus performantes.'
            }
        },
        documentation: {
            image: {nom: '', alt: 'alt', class: 'imgFull'},
            introduction: {texte: 'Un titre en guise d\'introduction.', icon: 'globe'},
            step: {
                1: {
                    titre: 'Syntaxe QS.lib',
                    description: 'La syntaxe des sélecteurs de Q.lib est de la forme suivante:',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.selectorFunction("string");'}
                },
                2: {
                    titre: 'ById',
                    description: 'Sélectionner un élément via son ID. <br />',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.id("monId"); // équivalent à document.getElementsById("myid"); ou $("#myid");'}
                },
                3: {
                    titre: 'ByClassName',
                    description: 'Sélectionner un élément via sa CLASS.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.cn("maClass"); // équivalent à document.getElementsByClassName("myClass"); ou $("myClass");'}
                },
                4: {
                    titre: 'ByTagName',
                    description: 'Sélectionner un élément via son nom TAG.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.tn("p"); // équivalent à document.getElementsByTagName("p"); ou $("p");'}
                },
                5: {
                    titre: 'ByName',
                    description: 'Sélectionner un élément via son nom NAME.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.na("test1"); // équivalent à document.getElementsByName("nameValue"); ou $("[name="test1"]");'}
                },
                6: {
                    titre: 'querySelector',
                    description: '...',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.qs("p:first-child"); // équivalent à document.querySelector("p:first-child"); ou $("p:first");'}
                },
                7: {
                    titre: 'querySelectorAll',
                    description: '...',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.qa("[data-sample]"); // équivalent à document.querySelectorAll("[data-sample]"); ou $("[data-sample]");'}
                }
            }
        }
    },
    page3: {
        id: 'page3', // Requis
        titre: 'Les méthodes', // Requis
        image: {nom: '', alt: 'alt', class: 'imgFull'},
        introduction: {texte: '', icon: 'globe'},
        contenu: {
            image: {nom: '', alt: 'alt', class: 'fl'},
            paragraphes: {
                1: 'Q.lib.js sait travailler avec toutes les propriétés associées à un élément : attributs, classes CSS, propriétés booléenne (checked, disabled, ...) et enfin les propriétés CSS classiques.'
            }
        },
        documentation: {
            image: {nom: '', alt: 'alt', class: 'imgFull'},
            introduction: {texte: 'Les différentes méthodes.', icon: 'globe'},
            step: {
                1: {
                    titre: '.addClass();',
                    description: 'Cette méthode permet d\'ajouter une ou plusieurs classes à un élément ou une liste d\'éléments sélectionnés.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.id("myId").addClass("top", "active");'}
                },
                2: {
                    titre: '.hasClass();',
                    description: 'Cette méthode renvoie true si l\'élément possède la classe recherchée, sinon renvoie false. Si le sélecteur est une liste d\'éléments, elle renvoie true si au moins un élément possède la classe recherchée',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.id("myid").hasClass("top");'}
                },
                3: {
                    titre: '.removeClass();',
                    description: 'Cette méthode permet de supprimer une ou plusieurs classes à un élément ou une liste d\'éléments sélectionnés.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.tn("p").removeClass("top", "active");'}
                },
                4: {
                    titre: '.replaceClass();',
                    description: 'Cette méthode permet de remplacer une classe par une autre d\'un élément ou d\'une liste d\'éléments sélectionnés.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.id("myid").replaceClass("old", "new");'}
                },
                5: {
                    titre: '.toggleClass();',
                    description: 'Ajoute ou supprime une ou plusieurs classes d\'un élément ou d\'une liste d\'éléments sélectionnés selon la présence ou non de la ou des classes dans le ou les éléments sélectionnés ou de la valeur du second. Les second paramètres optionels [switch] pour jQuery et [force] pour Q.lib.js fonctionnent de manière identique:true force l\'ajout, false force la suppression.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '\u0024\u005F.tn\u0028\u0022p\u0022\u0029.toggleClass\u0028\u0022highlight\u0020blue\u0022\u0029\u003B\u000D\u000A\u000D\u000A\u002F\u002F\u0020Alternative\u000D\u000A\u0024\u005F.id\u0028\u0022myid\u0022\u0029.removeClass\u0028\u0022old\u0022\u0029.addClass\u0028\u0022new\u0022\u0029\u003B'}
                },
                6: {
                    titre: '.attr();',
                    description: 'Lire et définir les attributs d\'un élément',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: '', snippet: ''},
                    step: {
                        1: {
                            titre: '.attr(attributeName);',
                            description: 'Lit la valeur du premier élément dans l\'ensemble des éléments sélectionnés.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: 'http://jsfiddle.net/L_Robin/8U5kE/'},
                            code: {langage: 'javascript', snippet: 'var title = $_.tn( "em" ).attr( "title" );'}
                        },
                        2: {
                            titre: '.attr(attributeName, value);',
                            description: 'Définit la valeur d\'un attribut de l\'ensemble des éléments sélectionnés.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: 'http://jsfiddle.net/L_Robin/8U5kE/'},
                            code: {langage: 'javascript', snippet: '$_.id( "photo1" ).attr( "title", "My first picture" );'}
                        },
                        3: {
                            titre: '.attr(attributes);',
                            description: 'Définit la valeur de plusieurs attributs de l\'ensemble des éléments sélectionnés (passage d\'un objet clé/valeur).',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: 'http://jsfiddle.net/L_Robin/8U5kE/'},
                            code: {langage: 'javascript', snippet: 'var title = $_.tn( "em" ).attr( "title" );'}
                        }
                    }
                },
                7: {
                    titre: '.prop();',
                    description: 'Lire et définir les attributs d\'un élément',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: '', snippet: ''},
                    step: {
                        1: {
                            titre: '.prop(propertyName)',
                            description: 'Lit la valeur de la propriété du premier élément dans l\'ensemble des éléments sélectionnés.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: ''},
                            code: {langage: 'javascript', snippet: 'var title = $_.id( "cb1" ).prop( "checked" );'}
                        },
                        2: {
                            titre: '.prop(propertyName, value);',
                            description: 'Définit la valeur d\'une propriété de l\'ensemble des éléments sélectionnés.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: ''},
                            code: {langage: 'javascript', snippet: '$_.na( "cb" ).prop( "checked", true );'}
                        },
                        3: {
                            titre: '.prop(properties);',
                            description: 'Définit la valeur de plusieurs propriétés de l\'ensemble des éléments sélectionnés (passage d\'un objet clé/valeur).',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: ''},
                            code: {langage: 'javascript', snippet: '$_.na( "cb" ).prop({checked:true, disabled:true});'}
                        }
                    }
                },
                8: {
                    titre: '.html();',
                    description: 'Obtenir le contenu HTML du premier élément de l\'ensemble d\'éléments appariés ou définir le contenu HTML de chaque élément identifié.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: 'var body = $_.id("body").html();'}
                }
            }
        }
    },
    page4: {
        id: 'page4', // Requis
        titre: 'Les évènements', // Requis
        image: {nom: '', alt: 'alt', class: 'imgFull'},
        introduction: {texte: 'Les évènements QS.lib', icon: 'globe'},
        contenu: {
            image: {nom: '', alt: 'alt', class: 'fl'},
            paragraphes: {
                1: 'Q.lib.js sait gérer les évènements, cependant certaines formes compactes n\'ont pas été codées .',
                2: 'Est-il vraiment utile de passer un objet en premier argument de on() par exemple, est-ce vraiment utilisé, quoi qu\'il en soit il et du fait que les méthodes soit chainables, il est parfaitement possible de transposer sous une d\'autres formes. ',
                3: 'Les références vers les fonctions callback nommées sont stockées en interne dans la queue eventQ, l\'indice du tableau lui est stocké dans un attribut data-eventname-fonctioname du node produisant l\'event.'
            }
        },
        documentation: {
            image: {nom: '', alt: 'alt', class: 'imgFull'},
            introduction: {texte: 'Les différentes méthodes.', icon: 'globe'},
            step: {
                1: {
                    titre: '.on();',
                    description: '.on() permet non seulement de faire du traitement d\'event élément par élément, mais aussi de faire de la délégation d\'event et du custom events.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: '', snippet: ''},
                    step: {
                        1: {
                            titre: '.on(eventtype, handler(){})',
                            description: 'Associe un handler à un évènement.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: ''},
                            code: {langage: 'javascript', snippet: '\u0024\u005F.id\u0028\u0022test\u0022\u0029.on\u0028\u0022click\u0022,\u0020function\u0028\u0029\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020this.toggleClass\u0028\u0022active\u0022\u0029\u003B\u000D\u000A\u007D\u0029\u003B'}
                        },
                        2: {
                            titre: '.on(eventtype, data, handler); ',
                            description: 'Associe un handler à un évènement. L\'objet data est accessible dans event.data.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: ''},
                            code: {langage: 'javascript', snippet: '$_.id( "photo1" ).on("click", {"album":"Hollydays 2014"}, displayLegend);'}
                        },
                        3: {
                            titre: '.on(eventtype, selector, handler); ',
                            description: 'Délègue la gestion de l\'event à l\'élément sélectionné. Le handler n\'est appelé que si l\'élément qui l\'a produit appartient aux éléments renvoyés par selector.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: ''},
                            code: {langage: 'javascript', snippet: '$_.id( "menu1" ).on("click", ".menu1item", changePage);'}
                        },
                        4: {
                            titre: '.on(eventtype, selector, data, handler); ',
                            description: 'Délègue la gestion de l\'event à l\'élément sélectionné. Le handler n\'est appelé que si l\'élément qui l\'a produit appartient aux éléments renvoyés par selector. L\'objet data est accessible dans event.data.',
                            image: {nom: '', alt: 'alt', class: 'imgFull'},
                            demo: {site: 'jsfiddle', url: ''},
                            code: {langage: 'javascript', snippet: '\u0024\u005F.id\u0028\u0022menu1\u0022\u0029.on\u0028\u0022click\u0022,\u0020\u0022.menu1item\u0022,\u0020\u007B\u0022message\u0022:\u0022changePage\u0022\u007D,\u0020function\u0028e\u0029\u0020\u007B\u000D\u000A\u0020\u0020\u0020\u0020console.log\u0028e.data\u0029\u003B\u000D\u000A\u0029\u003B'}
                        }
                    }
                },
                2: {
                    titre: '.off();',
                    description: 'Supprime le handler associé à un évènement.<br /> Si le handler est une fonction anonyme on ne peut pas supprimer le listener.<br /> .off(eventtype, handler);',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.id( "menu1" ).off("click", changePage);'}
                }
            }
        }
    },
    page5: {
        id: 'page5', // Requis
        titre: 'Le jSon', // Requis
        image: {nom: '', alt: 'alt', class: 'imgFull'},
        introduction: {texte: 'Les jSon QS.lib', icon: 'globe'},
        contenu: {
            image: {nom: '', alt: 'alt', class: 'fl'},
            paragraphes: {
                1: 'Q.lib.js possède aussi des fonctions pour jSon.'
            }
        },
        documentation: {
            image: {nom: '', alt: 'alt', class: 'imgFull'},
            introduction: {texte: 'Les différentes méthodes.', icon: 'globe'},
            step: {
                1: {
                    titre: '.getJSON()',
                    description: '.getJSON() permet de récupérer des données sous un format jSon. <br />Prends en parametre  n\'importe quelle url ave ou sans vers un serveur qui renvoie des données au format json',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: 'javascript', snippet: '$_.getJSON(url, function (data) { console.log(data); });'}
                }
            }
        }
    },
    page6: {
        id: 'page6', // Requis
        titre: 'Quelques plugins', // Requis
        image: {nom: '', alt: 'alt', class: 'imgFull'},
        introduction: {texte: 'Les évènements QS.lib', icon: 'globe'},
        contenu: {
            image: {nom: '', alt: 'alt', class: 'fl'},
            paragraphes: {
                1: 'Q.lib.js sait gérer les évènements, cependant certaines formes compactes n\'ont pas été codées .'
            }
        },
        documentation: {
            image: {nom: '', alt: 'alt', class: 'imgFull'},
            introduction: {texte: 'Les différentes méthodes.', icon: 'globe'},
            step: {
                1: {
                    titre: 'Plugin N°1',
                    description: '.on() permet non seulement de faire du traitement d\'event élément par élément, mais aussi de faire de la délégation d\'event et du custom events.',
                    image: {nom: '', alt: 'alt', class: 'imgFull'},
                    demo: {site: 'jsfiddle', url: ''},
                    code: {langage: '', snippet: ''}
                }
            }
        }
    }

};

