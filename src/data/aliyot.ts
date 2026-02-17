export interface Aliyah {
  number: number;
  name: string;
  start: string;
  end: string;
  verses: number;
  summary: string;
}

export interface ParashaWithAliyot {
  parashaId: number;
  aliyot: Aliyah[];
  sefariaUrl: string;
}

// Data for all 54 Parashiot with their 7 Aliyot
// Source: Hebcal Full Kriyah data (https://www.hebcal.com/sedrot/)
export const parashiotAliyot: ParashaWithAliyot[] = [
  {
    parashaId: 1,
    sefariaUrl: "https://www.sefaria.org/Genesis.1.1-6.8",
    aliyot: [
      { number: 1, name: "Rishon", start: "1:1", end: "2:3", verses: 34, summary: "D.ieu crée les cieux et la terre en six jours. Lumière, firmament, terre sèche, végétation, luminaires, animaux marins et oiseaux, animaux terrestres, et enfin l'être humain à Son image." },
      { number: 2, name: "Sheni", start: "2:4", end: "2:19", verses: 16, summary: "Récit détaillé de la création de l'homme à partir de la poussière. D.ieu plante le jardin d'Éden et y place l'homme. Il lui interdit de manger de l'arbre de la connaissance." },
      { number: 3, name: "Shlishi", start: "2:20", end: "3:21", verses: 27, summary: "Adam nomme les animaux. D.ieu crée la femme de sa côte. Le serpent tente Ève, ils mangent du fruit interdit. D.ieu les confronte et prononce les malédictions." },
      { number: 4, name: "Revi'i", start: "3:22", end: "4:18", verses: 21, summary: "Expulsion du jardin d'Éden. Caïn et Abel naissent. Caïn tue Abel par jalousie. D.ieu le maudit mais le marque pour le protéger. Descendance de Caïn." },
      { number: 5, name: "Hamishi", start: "4:19", end: "4:22", verses: 4, summary: "Lémekh prend deux femmes. Ses fils fondent l'élevage nomade, la musique et la métallurgie." },
      { number: 6, name: "Shishi", start: "4:23", end: "5:24", verses: 28, summary: "Lémekh se vante d'avoir tué un homme. Seth naît à Adam. Généalogie d'Adam à Hénoch qui marche avec D.ieu et disparaît." },
      { number: 7, name: "Shvi'i", start: "5:25", end: "6:8", verses: 16, summary: "Suite de la généalogie jusqu'à Noé. Les fils de D.ieu prennent des femmes humaines. D.ieu limite la vie à 120 ans. La méchanceté se répand, D.ieu décide du déluge. Noé trouve grâce." }
    ]
  },
  {
    parashaId: 2,
    sefariaUrl: "https://www.sefaria.org/Genesis.6.9-11.32",
    aliyot: [
      { number: 1, name: "Rishon", start: "6:9", end: "6:22", verses: 14, summary: "Noé est un homme juste. D.ieu annonce le déluge et ordonne à Noé de construire une arche pour sauver sa famille et les animaux." },
      { number: 2, name: "Sheni", start: "7:1", end: "7:16", verses: 16, summary: "D.ieu commande à Noé d'entrer dans l'arche avec les animaux. Les pluies commencent. D.ieu ferme la porte." },
      { number: 3, name: "Shlishi", start: "7:17", end: "8:14", verses: 22, summary: "Le déluge dure quarante jours. Toute chair périt. Les eaux prévalent puis baissent. L'arche se pose sur Ararat. Noé envoie le corbeau et la colombe." },
      { number: 4, name: "Revi'i", start: "8:15", end: "9:7", verses: 15, summary: "Noé sort de l'arche et offre des holocaustes. D.ieu promet de ne plus maudire la terre. Il bénit Noé et établit les lois noa'hides." },
      { number: 5, name: "Hamishi", start: "9:8", end: "9:17", verses: 10, summary: "D.ieu établit Son alliance avec Noé. L'arc-en-ciel devient le signe perpétuel de cette alliance." },
      { number: 6, name: "Shishi", start: "9:18", end: "10:32", verses: 44, summary: "Noé plante une vigne et s'enivre. Cham voit sa nudité, ses frères la couvrent. Noé maudit Canaan. Table des soixante-dix nations." },
      { number: 7, name: "Shvi'i", start: "11:1", end: "11:32", verses: 32, summary: "Les hommes construisent la tour de Babel. D.ieu confond leur langage et les disperse. Généalogie de Shem jusqu'à Avram." }
    ]
  },
  {
    parashaId: 3,
    sefariaUrl: "https://www.sefaria.org/Genesis.12.1-17.27",
    aliyot: [
      { number: 1, name: "Rishon", start: "12:1", end: "12:13", verses: 13, summary: "D.ieu dit à Avram 'Lekh Lekha'. Avram part vers Canaan avec Saraï et Lot. Une famine survient et ils descendent en Égypte." },
      { number: 2, name: "Sheni", start: "12:14", end: "13:4", verses: 11, summary: "Pharaon prend Saraï. D.ieu frappe Pharaon de plaies. Avram remonte d'Égypte très riche." },
      { number: 3, name: "Shlishi", start: "13:5", end: "13:18", verses: 14, summary: "Séparation d'Avram et Lot. Lot choisit Sodome. D.ieu promet toute la terre à Avram." },
      { number: 4, name: "Revi'i", start: "14:1", end: "14:20", verses: 20, summary: "Guerre des quatre rois contre cinq. Lot est capturé. Avram le sauve. Malki-Tzédek le bénit." },
      { number: 5, name: "Hamishi", start: "14:21", end: "15:6", verses: 10, summary: "Avram refuse les biens de Sodome. D.ieu lui promet un fils et une descendance comme les étoiles. Avram croit." },
      { number: 6, name: "Shishi", start: "15:7", end: "17:6", verses: 37, summary: "Alliance entre les morceaux. Agar enfante Ismaël. À 99 ans, D.ieu change son nom en Avraham." },
      { number: 7, name: "Shvi'i", start: "17:7", end: "17:27", verses: 21, summary: "Alliance de la circoncision. Saraï devient Sarah. Avraham circoncit tous les mâles de sa maison." }
    ]
  },
  {
    parashaId: 4,
    sefariaUrl: "https://www.sefaria.org/Genesis.18.1-22.24",
    aliyot: [
      { number: 1, name: "Rishon", start: "18:1", end: "18:14", verses: 14, summary: "Trois visiteurs annoncent à Avraham que Sarah aura un fils. Sarah rit." },
      { number: 2, name: "Sheni", start: "18:15", end: "18:33", verses: 19, summary: "D.ieu révèle Son intention de juger Sodome. Avraham intercède pour les justes." },
      { number: 3, name: "Shlishi", start: "19:1", end: "19:20", verses: 20, summary: "Deux anges arrivent à Sodome. Les hommes de la ville les réclament. Les anges ordonnent à Lot de fuir." },
      { number: 4, name: "Revi'i", start: "19:21", end: "21:4", verses: 40, summary: "Destruction de Sodome. La femme de Lot devient statue de sel. Les filles de Lot. Avraham à Guérar. Naissance d'Its'hak." },
      { number: 5, name: "Hamishi", start: "21:5", end: "21:21", verses: 17, summary: "Its'hak grandit. Sarah exige le renvoi d'Agar et Ismaël. D.ieu sauve Agar au désert." },
      { number: 6, name: "Shishi", start: "21:22", end: "21:34", verses: 13, summary: "Alliance entre Avraham et Avimelekh à Beer-Sheva." },
      { number: 7, name: "Shvi'i", start: "22:1", end: "22:24", verses: 24, summary: "La ligature d'Its'hak (Akéda). D.ieu met Avraham à l'épreuve. Un bélier est sacrifié à la place d'Its'hak." }
    ]
  },
  {
    parashaId: 5,
    sefariaUrl: "https://www.sefaria.org/Genesis.23.1-25.18",
    aliyot: [
      { number: 1, name: "Rishon", start: "23:1", end: "23:16", verses: 16, summary: "Sarah meurt à 127 ans. Avraham achète la grotte de Makhpéla à Éfron." },
      { number: 2, name: "Sheni", start: "23:17", end: "24:9", verses: 13, summary: "Avraham enterre Sarah. Il envoie son serviteur chercher une femme pour Its'hak." },
      { number: 3, name: "Shlishi", start: "24:10", end: "24:26", verses: 17, summary: "Le serviteur arrive au puits. Rivka accomplit le signe. Il lui offre des bijoux." },
      { number: 4, name: "Revi'i", start: "24:27", end: "24:52", verses: 26, summary: "Le serviteur raconte sa mission. La famille de Rivka accepte le mariage." },
      { number: 5, name: "Hamishi", start: "24:53", end: "24:67", verses: 15, summary: "Rivka part. Its'hak l'épouse et l'aime." },
      { number: 6, name: "Shishi", start: "25:1", end: "25:11", verses: 11, summary: "Avraham épouse Kétoura. Mort d'Avraham à 175 ans. Its'hak et Ismaël l'enterrent." },
      { number: 7, name: "Shvi'i", start: "25:12", end: "25:18", verses: 7, summary: "Générations d'Ismaël. Ses douze fils deviennent douze princes tribaux." }
    ]
  },
  {
    parashaId: 6,
    sefariaUrl: "https://www.sefaria.org/Genesis.25.19-28.9",
    aliyot: [
      { number: 1, name: "Rishon", start: "25:19", end: "26:5", verses: 21, summary: "Naissance d'Ésaü et Ya'akov. Ésaü vend son droit d'aînesse. Its'hak à Guérar, D.ieu lui réitère les promesses." },
      { number: 2, name: "Sheni", start: "26:6", end: "26:12", verses: 7, summary: "Its'hak dit que Rivka est sa sœur. Avimelekh découvre la vérité. Its'hak prospère." },
      { number: 3, name: "Shlishi", start: "26:13", end: "26:22", verses: 10, summary: "Its'hak devient riche. Les Philistins bouchent ses puits. Il creuse de nouveaux puits." },
      { number: 4, name: "Revi'i", start: "26:23", end: "26:29", verses: 7, summary: "Its'hak monte à Beer-Sheva. D.ieu lui apparaît. Avimelekh vient proposer une alliance." },
      { number: 5, name: "Hamishi", start: "26:30", end: "27:27", verses: 33, summary: "Alliance avec Avimelekh. Ésaü prend des femmes hittites. Ya'akov prend la bénédiction d'Its'hak par ruse." },
      { number: 6, name: "Shishi", start: "27:28", end: "28:4", verses: 23, summary: "Bénédiction de Ya'akov. Ésaü arrive et découvre la tromperie. Il demande aussi une bénédiction. Rivka envoie Ya'akov chez Lavan." },
      { number: 7, name: "Shvi'i", start: "28:5", end: "28:9", verses: 5, summary: "Ya'akov part pour Padan-Aram. Ésaü voit que les filles de Canaan déplaisent à son père et épouse une fille d'Ismaël." }
    ]
  },
  {
    parashaId: 7,
    sefariaUrl: "https://www.sefaria.org/Genesis.28.10-32.3",
    aliyot: [
      { number: 1, name: "Rishon", start: "28:10", end: "28:22", verses: 13, summary: "Ya'akov rêve de l'échelle céleste. D.ieu lui promet la terre et une descendance nombreuse. Ya'akov fait un vœu." },
      { number: 2, name: "Sheni", start: "29:1", end: "29:17", verses: 17, summary: "Ya'akov arrive chez Lavan. Il rencontre Ra'hel au puits. Lavan l'accueille." },
      { number: 3, name: "Shlishi", start: "29:18", end: "30:13", verses: 31, summary: "Ya'akov sert 7 ans pour Ra'hel. Lavan le trompe avec Léa. Naissance des premiers fils. Les servantes donnent aussi des enfants." },
      { number: 4, name: "Revi'i", start: "30:14", end: "30:27", verses: 14, summary: "Épisode des mandragores. Naissance d'Issakhar, Zevouloun, Dina. Ra'hel enfante Yossef. Ya'akov veut partir." },
      { number: 5, name: "Hamishi", start: "30:28", end: "31:16", verses: 32, summary: "Ya'akov négocie son salaire. Il prospère avec les brebis tachetées. D.ieu lui ordonne de retourner. Ses femmes acceptent." },
      { number: 6, name: "Shishi", start: "31:17", end: "31:42", verses: 26, summary: "Fuite de Ya'akov. Ra'hel vole les idoles. Lavan le poursuit. Confrontation entre eux." },
      { number: 7, name: "Shvi'i", start: "31:43", end: "32:3", verses: 15, summary: "Alliance entre Ya'akov et Lavan à Gal-Ed. Lavan repart. Ya'akov rencontre des anges à Ma'hanayim." }
    ]
  },
  {
    parashaId: 8,
    sefariaUrl: "https://www.sefaria.org/Genesis.32.4-36.43",
    aliyot: [
      { number: 1, name: "Rishon", start: "32:4", end: "32:13", verses: 10, summary: "Ya'akov envoie des messagers à Ésaü. Ésaü vient avec 400 hommes. Ya'akov a peur et prie." },
      { number: 2, name: "Sheni", start: "32:14", end: "32:30", verses: 17, summary: "Ya'akov prépare un présent pour Ésaü. Il lutte avec un ange. Il reçoit le nom Israël." },
      { number: 3, name: "Shlishi", start: "32:31", end: "33:5", verses: 8, summary: "Ya'akov nomme le lieu Peniel. Il rencontre Ésaü qui l'embrasse." },
      { number: 4, name: "Revi'i", start: "33:6", end: "33:20", verses: 15, summary: "Réconciliation avec Ésaü. Ya'akov arrive à Sichem et achète un terrain." },
      { number: 5, name: "Hamishi", start: "34:1", end: "35:11", verses: 42, summary: "Dina est violée par Shekhem. Shimon et Lévi massacrent la ville. D.ieu ordonne de monter à Beit-El." },
      { number: 6, name: "Shishi", start: "35:12", end: "36:19", verses: 37, summary: "Mort de Ra'hel en enfantant Binyamin. Les 12 fils de Ya'akov. Mort d'Its'hak. Descendants d'Ésaü." },
      { number: 7, name: "Shvi'i", start: "36:20", end: "36:43", verses: 25, summary: "Fils de Séir. Rois d'Édom. Chefs édomites." }
    ]
  },
  {
    parashaId: 9,
    sefariaUrl: "https://www.sefaria.org/Genesis.37.1-40.23",
    aliyot: [
      { number: 1, name: "Rishon", start: "37:1", end: "37:11", verses: 11, summary: "Yossef est aimé de son père. Ses frères le haïssent. Ses deux rêves prophétiques." },
      { number: 2, name: "Sheni", start: "37:12", end: "37:22", verses: 11, summary: "Yossef est envoyé vers ses frères. Ils complotent de le tuer. Réouven intervient." },
      { number: 3, name: "Shlishi", start: "37:23", end: "37:36", verses: 14, summary: "Yossef est jeté dans une citerne puis vendu aux Ismaélites. Ya'akov est trompé et pleure son fils." },
      { number: 4, name: "Revi'i", start: "38:1", end: "38:30", verses: 30, summary: "Histoire de Yéhouda et Tamar. Naissance de Pérets et Zéra'h." },
      { number: 5, name: "Hamishi", start: "39:1", end: "39:6", verses: 6, summary: "Yossef est vendu à Potifar. D.ieu est avec lui et il prospère." },
      { number: 6, name: "Shishi", start: "39:7", end: "39:23", verses: 17, summary: "La femme de Potifar tente de séduire Yossef. Il refuse et est jeté en prison." },
      { number: 7, name: "Shvi'i", start: "40:1", end: "40:23", verses: 23, summary: "Yossef interprète les rêves de l'échanson et du panetier. L'échanson oublie Yossef." }
    ]
  },
  {
  "parashaId": 10,
  "sefariaUrl": "https://www.sefaria.org/Genesis.41.1-44.17",
  "aliyot": [
    { "number": 1, "name": "Rishon", "start": "41:1", "end": "41:14", "verses": 14, "summary": "Pharaon rêve des vaches et des épis. Personne ne peut interpréter. L'échanson se souvient de Yossef." },
    { "number": 2, "name": "Sheni", "start": "41:15", "end": "41:38", "verses": 24, "summary": "Yossef interprète les rêves : 7 ans d'abondance puis 7 de famine. Il conseille de stocker." },
    { "number": 3, "name": "Shlishi", "start": "41:39", "end": "41:52", "verses": 14, "summary": "Yossef est nommé vice-roi. Il épouse Asnat. Naissance de Manassé et Éfrayim." },
    { "number": 4, "name": "Revi'i", "start": "41:53", "end": "42:18", "verses": 23, "summary": "La famine commence. Les frères viennent en Égypte. Yossef les reconnaît et les accuse d'espionnage." },
    { "number": 5, "name": "Hamishi", "start": "42:19", "end": "43:15", "verses": 35, "summary": "Shimon reste en otage. Les frères rentrent. Ils reviennent avec Binyamin." },
    { "number": 6, "name": "Shishi", "start": "43:16", "end": "43:29", "verses": 14, "summary": "Festin chez Yossef. Yossef est ému en voyant Binyamin et doit sortir pour pleurer." },
    { "number": 7, "name": "Shvi'i", "start": "43:30", "end": "44:17", "verses": 20, "summary": "La coupe est cachée dans le sac de Binyamin. Les frères sont poursuivis et arrêtés. Yéhouda s'approche." }
  ]
},
  {
    parashaId: 11,
    sefariaUrl: "https://www.sefaria.org/Genesis.44.18-47.27",
    aliyot: [
      { number: 1, name: "Rishon", start: "44:18", end: "44:30", verses: 13, summary: "Yéhouda plaide pour Binyamin. Il raconte la douleur de leur père." },
      { number: 2, name: "Sheni", start: "44:31", end: "45:7", verses: 11, summary: "Yéhouda s'offre comme esclave. Yossef ne peut plus se retenir et se révèle à ses frères." },
      { number: 3, name: "Shlishi", start: "45:8", end: "45:18", verses: 11, summary: "Yossef explique que D.ieu l'a envoyé. Il invite sa famille à venir en Égypte." },
      { number: 4, name: "Revi'i", start: "45:19", end: "45:27", verses: 9, summary: "Pharaon donne des chariots. Les frères rentrent et annoncent la nouvelle à Ya'akov." },
      { number: 5, name: "Hamishi", start: "45:28", end: "46:27", verses: 28, summary: "Ya'akov part pour l'Égypte. D.ieu lui apparaît à Beer-Sheva. Liste des 70 descendants." },
      { number: 6, name: "Shishi", start: "46:28", end: "47:10", verses: 17, summary: "Retrouvailles entre Ya'akov et Yossef. Ya'akov bénit Pharaon." },
      { number: 7, name: "Shvi'i", start: "47:11", end: "47:27", verses: 17, summary: "Installation à Goshen. Yossef gère la famine. Les Égyptiens vendent leurs terres à Pharaon." }
    ]
  },
  {
    parashaId: 12,
    sefariaUrl: "https://www.sefaria.org/Genesis.47.28-50.26",
    aliyot: [
      { number: 1, name: "Rishon", start: "47:28", end: "48:9", verses: 13, summary: "Ya'akov vit 17 ans en Égypte. Il fait jurer Yossef de l'enterrer en Canaan. Yossef amène ses fils." },
      { number: 2, name: "Sheni", start: "48:10", end: "48:16", verses: 7, summary: "Ya'akov bénit Éfrayim et Manassé, croisant ses mains." },
      { number: 3, name: "Shlishi", start: "48:17", end: "48:22", verses: 6, summary: "Yossef proteste. Ya'akov explique qu'Éfrayim sera plus grand. Il donne un terrain à Yossef." },
      { number: 4, name: "Revi'i", start: "49:1", end: "49:18", verses: 18, summary: "Ya'akov bénit ses fils : Réouven, Shimon, Lévi, Yéhouda, Zevouloun, Issakhar, Dan." },
      { number: 5, name: "Hamishi", start: "49:19", end: "49:26", verses: 8, summary: "Suite des bénédictions : Gad, Asher, Naftali, Yossef." },
      { number: 6, name: "Shishi", start: "49:27", end: "50:20", verses: 27, summary: "Bénédiction de Binyamin. Mort de Ya'akov. Enterrement à Makhpéla. Les frères ont peur, Yossef les rassure." },
      { number: 7, name: "Shvi'i", start: "50:21", end: "50:26", verses: 6, summary: "Yossef promet de s'occuper de ses frères. Il meurt à 110 ans. Fin de la Genèse." }
    ]
  },
  {
    parashaId: 13,
    sefariaUrl: "https://www.sefaria.org/Exodus.1.1-6.1",
    aliyot: [
      { number: 1, name: "Rishon", start: "1:1", end: "1:17", verses: 17, summary: "Les enfants d'Israël se multiplient. Un nouveau Pharaon les asservit. Les sages-femmes désobéissent." },
      { number: 2, name: "Sheni", start: "1:18", end: "2:10", verses: 15, summary: "Pharaon ordonne de jeter les garçons au fleuve. Naissance de Moïse. Il est sauvé par la fille de Pharaon." },
      { number: 3, name: "Shlishi", start: "2:11", end: "2:25", verses: 15, summary: "Moïse tue un Égyptien. Il fuit à Midian, épouse Tsipora, et devient berger." },
      { number: 4, name: "Revi'i", start: "3:1", end: "3:15", verses: 15, summary: "Le buisson ardent. D.ieu se révèle à Moïse et l'envoie libérer le peuple." },
      { number: 5, name: "Hamishi", start: "3:16", end: "4:17", verses: 24, summary: "D.ieu donne des signes à Moïse. Moïse objecte, D.ieu lui adjoint Aharon." },
      { number: 6, name: "Shishi", start: "4:18", end: "4:31", verses: 14, summary: "Moïse retourne en Égypte. Rencontre avec Aharon. Le peuple croit." },
      { number: 7, name: "Shvi'i", start: "5:1", end: "6:1", verses: 24, summary: "Moïse demande à Pharaon de libérer le peuple. Pharaon aggrave le travail. Moïse se plaint à D.ieu." }
    ]
  },
  {
    parashaId: 14,
    sefariaUrl: "https://www.sefaria.org/Exodus.6.2-9.35",
    aliyot: [
      { number: 1, name: "Rishon", start: "6:2", end: "6:13", verses: 12, summary: "D.ieu renouvelle Sa promesse à Moïse. Moïse et Aharon reçoivent l'ordre de parler à Pharaon." },
      { number: 2, name: "Sheni", start: "6:14", end: "6:28", verses: 15, summary: "Généalogie de Réouven, Shimon et Lévi. Lignée de Moïse et Aharon." },
      { number: 3, name: "Shlishi", start: "6:29", end: "7:7", verses: 9, summary: "D.ieu réitère la mission. Moïse a 80 ans, Aharon 83." },
      { number: 4, name: "Revi'i", start: "7:8", end: "8:6", verses: 28, summary: "Le bâton devient serpent. Premières plaies : le sang et les grenouilles." },
      { number: 5, name: "Hamishi", start: "8:7", end: "8:18", verses: 12, summary: "Suite des grenouilles. Plaie des poux. Les magiciens reconnaissent le doigt de D.ieu." },
      { number: 6, name: "Shishi", start: "8:19", end: "9:16", verses: 26, summary: "Les bêtes sauvages. La peste du bétail. Les ulcères." },
      { number: 7, name: "Shvi'i", start: "9:17", end: "9:35", verses: 19, summary: "La grêle. Pharaon s'endurcit encore." }
    ]
  },
  {
    parashaId: 15,
    sefariaUrl: "https://www.sefaria.org/Exodus.10.1-13.16",
    aliyot: [
      { number: 1, name: "Rishon", start: "10:1", end: "10:11", verses: 11, summary: "D.ieu endurcit le cœur de Pharaon. Annonce des sauterelles." },
      { number: 2, name: "Sheni", start: "10:12", end: "10:23", verses: 12, summary: "Plaie des sauterelles. Plaie des ténèbres pendant trois jours." },
      { number: 3, name: "Shlishi", start: "10:24", end: "11:3", verses: 9, summary: "Pharaon refuse de laisser partir le bétail. D.ieu annonce la dernière plaie." },
      { number: 4, name: "Revi'i", start: "11:4", end: "12:20", verses: 27, summary: "Annonce de la mort des premiers-nés. Lois de Pessah et des Matsot." },
      { number: 5, name: "Hamishi", start: "12:21", end: "12:28", verses: 8, summary: "Instructions pour le sacrifice pascal et le sang sur les portes." },
      { number: 6, name: "Shishi", start: "12:29", end: "12:51", verses: 23, summary: "Mort des premiers-nés. L'Exode. Les Égyptiens pressent les Hébreux de partir." },
      { number: 7, name: "Shvi'i", start: "13:1", end: "13:16", verses: 16, summary: "Sanctification des premiers-nés. Tefillin. Le peuple sort d'Égypte." }
    ]
  },
  {
    parashaId: 16,
    sefariaUrl: "https://www.sefaria.org/Exodus.13.17-17.16",
    aliyot: [
      { number: 1, name: "Rishon", start: "13:17", end: "14:8", verses: 14, summary: "D.ieu conduit le peuple par le désert. La colonne de nuée et de feu. Pharaon poursuit." },
      { number: 2, name: "Sheni", start: "14:9", end: "14:14", verses: 6, summary: "Les Égyptiens rattrapent les Hébreux. Le peuple a peur. Moïse les rassure." },
      { number: 3, name: "Shlishi", start: "14:15", end: "14:25", verses: 11, summary: "D.ieu ordonne de fendre la mer. Les Hébreux traversent à sec." },
      { number: 4, name: "Revi'i", start: "14:26", end: "15:26", verses: 32, summary: "Les Égyptiens sont engloutis. Le cantique de la mer. Les eaux amères de Mara." },
      { number: 5, name: "Hamishi", start: "15:27", end: "16:10", verses: 11, summary: "Arrivée à Élim. Le peuple se plaint de faim. D.ieu promet la manne." },
      { number: 6, name: "Shishi", start: "16:11", end: "16:36", verses: 26, summary: "La manne et les cailles. Lois du Shabbat concernant la manne." },
      { number: 7, name: "Shvi'i", start: "17:1", end: "17:16", verses: 16, summary: "Le peuple réclame de l'eau. Moïse frappe le rocher. Guerre contre Amalek." }
    ]
  },
  {
    parashaId: 17,
    sefariaUrl: "https://www.sefaria.org/Exodus.18.1-20.23",
    aliyot: [
      { number: 1, name: "Rishon", start: "18:1", end: "18:12", verses: 12, summary: "Yitro arrive avec Tsipora et ses fils. Moïse lui raconte les miracles. Yitro loue D.ieu." },
      { number: 2, name: "Sheni", start: "18:13", end: "18:23", verses: 11, summary: "Yitro conseille à Moïse d'établir des juges pour alléger sa charge." },
      { number: 3, name: "Shlishi", start: "18:24", end: "18:27", verses: 4, summary: "Moïse suit le conseil. Yitro repart chez lui." },
      { number: 4, name: "Revi'i", start: "19:1", end: "19:6", verses: 6, summary: "Arrivée au Sinaï. D.ieu propose l'alliance : royaume de prêtres et nation sainte." },
      { number: 5, name: "Hamishi", start: "19:7", end: "19:19", verses: 13, summary: "Le peuple accepte. Préparations pour le don de la Torah. D.ieu descend sur la montagne." },
      { number: 6, name: "Shishi", start: "19:20", end: "20:14", verses: 20, summary: "Les Dix Commandements sont proclamés." },
      { number: 7, name: "Shvi'i", start: "20:15", end: "20:23", verses: 9, summary: "Le peuple a peur. Instructions sur les autels." }
    ]
  },
  {
    parashaId: 18,
    sefariaUrl: "https://www.sefaria.org/Exodus.21.1-24.18",
    aliyot: [
      { number: 1, name: "Rishon", start: "21:1", end: "21:19", verses: 19, summary: "Lois sur l'esclave hébreu. Lois sur les blessures corporelles." },
      { number: 2, name: "Sheni", start: "21:20", end: "22:3", verses: 21, summary: "Suite des lois sur les dommages. Le voleur. Le bœuf qui encorne." },
      { number: 3, name: "Shlishi", start: "22:4", end: "22:26", verses: 23, summary: "Lois sur les dommages aux biens. Protection des veuves et orphelins. Prêt sans intérêt." },
      { number: 4, name: "Revi'i", start: "22:27", end: "23:5", verses: 9, summary: "Respect des juges. Prémices. Justice et honnêteté." },
      { number: 5, name: "Hamishi", start: "23:6", end: "23:19", verses: 14, summary: "Justice pour le pauvre. Shabbat et Shémita. Les trois fêtes de pèlerinage." },
      { number: 6, name: "Shishi", start: "23:20", end: "23:25", verses: 6, summary: "D.ieu envoie un ange. Promesse de protection. Interdiction de l'idolâtrie." },
      { number: 7, name: "Shvi'i", start: "23:26", end: "24:18", verses: 26, summary: "Promesses de conquête. Alliance du sang. Moïse monte sur la montagne 40 jours." }
    ]
  },
  {
    parashaId: 19,
    sefariaUrl: "https://www.sefaria.org/Exodus.25.1-27.19",
    aliyot: [
      { number: 1, name: "Rishon", start: "25:1", end: "25:16", verses: 16, summary: "D.ieu demande des contributions. Instructions pour l'Arche d'alliance." },
      { number: 2, name: "Sheni", start: "25:17", end: "25:30", verses: 14, summary: "Le propitiatoire et les chérubins. La table des pains de proposition." },
      { number: 3, name: "Shlishi", start: "25:31", end: "26:14", verses: 24, summary: "Le candélabre (Menorah) et les tentures du Tabernacle." },
      { number: 4, name: "Revi'i", start: "26:15", end: "26:30", verses: 16, summary: "Les planches et les traverses du Tabernacle." },
      { number: 5, name: "Hamishi", start: "26:31", end: "26:37", verses: 7, summary: "Le voile séparant le Saint des Saints. Le rideau d'entrée." },
      { number: 6, name: "Shishi", start: "27:1", end: "27:8", verses: 8, summary: "L'autel des holocaustes en bronze." },
      { number: 7, name: "Shvi'i", start: "27:9", end: "27:19", verses: 11, summary: "Le parvis du Tabernacle." }
    ]
  },
  {
    parashaId: 20,
    sefariaUrl: "https://www.sefaria.org/Exodus.27.20-30.10",
    aliyot: [
      { number: 1, name: "Rishon", start: "27:20", end: "28:12", verses: 14, summary: "L'huile pour le candélabre. Les vêtements du grand prêtre. L'éphod." },
      { number: 2, name: "Sheni", start: "28:13", end: "28:30", verses: 18, summary: "Le pectoral avec les 12 pierres. L'Ourim et Toumim." },
      { number: 3, name: "Shlishi", start: "28:31", end: "28:43", verses: 13, summary: "La robe, le diadème, la tunique, le turban, la ceinture. Les caleçons." },
      { number: 4, name: "Revi'i", start: "29:1", end: "29:18", verses: 18, summary: "Consécration d'Aharon et ses fils. Le taureau et le premier bélier." },
      { number: 5, name: "Hamishi", start: "29:19", end: "29:37", verses: 19, summary: "Le deuxième bélier. Sept jours de consécration de l'autel." },
      { number: 6, name: "Shishi", start: "29:38", end: "29:46", verses: 9, summary: "L'holocauste perpétuel matin et soir. D.ieu résidera parmi le peuple." },
      { number: 7, name: "Shvi'i", start: "30:1", end: "30:10", verses: 10, summary: "L'autel des parfums. L'encens quotidien. Le sang expiatoire annuel." }
    ]
  },
  {
    parashaId: 21,
    sefariaUrl: "https://www.sefaria.org/Exodus.30.11-34.35",
    aliyot: [
      { number: 1, name: "Rishon", start: "30:11", end: "31:17", verses: 45, summary: "Le demi-sicle. Le bassin. L'huile d'onction. L'encens. Betsalel et Oholiav. Le Shabbat." },
      { number: 2, name: "Sheni", start: "31:18", end: "33:11", verses: 47, summary: "Les Tables. Le veau d'or. Moïse brise les Tables. D.ieu menace de détruire le peuple. La Tente d'assignation." },
      { number: 3, name: "Shlishi", start: "33:12", end: "33:16", verses: 5, summary: "Moïse demande à D.ieu de l'accompagner." },
      { number: 4, name: "Revi'i", start: "33:17", end: "33:23", verses: 7, summary: "D.ieu accepte. Moïse demande à voir Sa gloire. D.ieu lui montre Son dos." },
      { number: 5, name: "Hamishi", start: "34:1", end: "34:9", verses: 9, summary: "Nouvelles Tables. D.ieu proclame les 13 attributs de miséricorde." },
      { number: 6, name: "Shishi", start: "34:10", end: "34:26", verses: 17, summary: "Renouvellement de l'alliance. Interdiction de l'idolâtrie. Les fêtes." },
      { number: 7, name: "Shvi'i", start: "34:27", end: "34:35", verses: 9, summary: "Moïse écrit les paroles de l'alliance. Son visage rayonne." }
    ]
  },
  {
    parashaId: 22,
    sefariaUrl: "https://www.sefaria.org/Exodus.35.1-38.20",
    aliyot: [
      { number: 1, name: "Rishon", start: "35:1", end: "35:20", verses: 20, summary: "Le Shabbat. Appel aux contributions. Le peuple apporte généreusement." },
      { number: 2, name: "Sheni", start: "35:21", end: "35:29", verses: 9, summary: "Les artisans et les femmes sages de cœur se mettent à l'œuvre." },
      { number: 3, name: "Shlishi", start: "35:30", end: "36:7", verses: 13, summary: "Betsalel et Oholiav sont nommés. Le peuple apporte trop." },
      { number: 4, name: "Revi'i", start: "36:8", end: "36:19", verses: 12, summary: "Construction des tentures et de la couverture." },
      { number: 5, name: "Hamishi", start: "36:20", end: "37:16", verses: 35, summary: "Les planches, les barres, le voile, le rideau, l'Arche, la table." },
      { number: 6, name: "Shishi", start: "37:17", end: "37:29", verses: 13, summary: "Le candélabre (Ménorah) et l'autel des parfums." },
      { number: 7, name: "Shvi'i", start: "38:1", end: "38:20", verses: 20, summary: "L'autel des holocaustes et la cuve. Le parvis." }
    ]
  },
  {
    parashaId: 23,
    sefariaUrl: "https://www.sefaria.org/Exodus.38.21-40.38",
    aliyot: [
      { number: 1, name: "Rishon", start: "38:21", end: "39:1", verses: 12, summary: "Inventaire des métaux utilisés. Les artisans préparent les matériaux." },
      { number: 2, name: "Sheni", start: "39:2", end: "39:21", verses: 20, summary: "Confection de l'éphod et du pectoral avec les 12 pierres." },
      { number: 3, name: "Shlishi", start: "39:22", end: "39:32", verses: 11, summary: "La robe, les tuniques, le turban. Le travail est achevé." },
      { number: 4, name: "Revi'i", start: "39:33", end: "39:43", verses: 11, summary: "Tous les éléments sont apportés à Moïse. Il les bénit." },
      { number: 5, name: "Hamishi", start: "40:1", end: "40:16", verses: 16, summary: "D.ieu ordonne d'ériger le Tabernacle le premier du mois." },
      { number: 6, name: "Shishi", start: "40:17", end: "40:27", verses: 11, summary: "Moïse érige le Tabernacle et installe tous les éléments." },
      { number: 7, name: "Shvi'i", start: "40:28", end: "40:38", verses: 11, summary: "Achèvement. La nuée couvre la Tente. La Gloire de D.ieu remplit le Tabernacle." }
    ]
  },
  {
    parashaId: 24,
    sefariaUrl: "https://www.sefaria.org/Leviticus.1.1-5.26",
    aliyot: [
      { number: 1, name: "Rishon", start: "1:1", end: "1:13", verses: 13, summary: "D.ieu appelle Moïse. Lois de l'holocauste de gros bétail et de menu bétail." },
      { number: 2, name: "Sheni", start: "1:14", end: "2:6", verses: 10, summary: "Holocauste d'oiseaux. L'offrande de farine (Min'ha)." },
      { number: 3, name: "Shlishi", start: "2:7", end: "2:16", verses: 10, summary: "Différentes formes de Min'ha. Le sel de l'alliance." },
      { number: 4, name: "Revi'i", start: "3:1", end: "3:17", verses: 17, summary: "Le sacrifice de paix (Shelamim) de gros et menu bétail." },
      { number: 5, name: "Hamishi", start: "4:1", end: "4:26", verses: 26, summary: "Le sacrifice pour le péché (Hatat) du grand prêtre et de la communauté." },
      { number: 6, name: "Shishi", start: "4:27", end: "5:10", verses: 19, summary: "Hatat du particulier. Sacrifice gradué selon les moyens." },
      { number: 7, name: "Shvi'i", start: "5:11", end: "5:26", verses: 16, summary: "Offrande de farine pour le pauvre. Le sacrifice de culpabilité (Asham)." }
    ]
  },
  {
    parashaId: 25,
    sefariaUrl: "https://www.sefaria.org/Leviticus.6.1-8.36",
    aliyot: [
      { number: 1, name: "Rishon", start: "6:1", end: "6:11", verses: 11, summary: "Lois supplémentaires sur l'holocauste. Le feu perpétuel." },
      { number: 2, name: "Sheni", start: "6:12", end: "7:10", verses: 22, summary: "L'offrande du grand prêtre. Lois du Hatat et de l'Asham." },
      { number: 3, name: "Shlishi", start: "7:11", end: "7:38", verses: 28, summary: "Lois des Shelamim : Toda, Néder et Nédava. La graisse et le sang interdits. Les parts du Kohen." },
      { number: 4, name: "Revi'i", start: "8:1", end: "8:13", verses: 13, summary: "Consécration d'Aharon et ses fils. Lavage, vêtements, onction du Tabernacle." },
      { number: 5, name: "Hamishi", start: "8:14", end: "8:21", verses: 8, summary: "Le taureau du Hatat. Le premier bélier de l'holocauste." },
      { number: 6, name: "Shishi", start: "8:22", end: "8:29", verses: 8, summary: "Le bélier de consécration. Le sang sur l'oreille, le pouce et l'orteil." },
      { number: 7, name: "Shvi'i", start: "8:30", end: "8:36", verses: 7, summary: "L'aspersion d'huile et de sang. Sept jours de consécration." }
    ]
  },
  {
    parashaId: 26,
    sefariaUrl: "https://www.sefaria.org/Leviticus.9.1-11.47",
    aliyot: [
      { number: 1, name: "Rishon", start: "9:1", end: "9:16", verses: 16, summary: "Le huitième jour. Aharon offre les premiers sacrifices officiels." },
      { number: 2, name: "Sheni", start: "9:17", end: "9:23", verses: 7, summary: "Suite des sacrifices. Aharon bénit le peuple. La Gloire de D.ieu apparaît." },
      { number: 3, name: "Shlishi", start: "9:24", end: "10:11", verses: 12, summary: "Un feu divin consume les offrandes. Nadav et Avihou meurent. Instructions à Aharon." },
      { number: 4, name: "Revi'i", start: "10:12", end: "10:15", verses: 4, summary: "Moïse ordonne de manger le reste de l'offrande." },
      { number: 5, name: "Hamishi", start: "10:16", end: "10:20", verses: 5, summary: "Moïse se fâche car le Hatat a été brûlé. Aharon explique." },
      { number: 6, name: "Shishi", start: "11:1", end: "11:32", verses: 32, summary: "Lois de la cacherout : animaux terrestres, aquatiques, oiseaux, insectes." },
      { number: 7, name: "Shvi'i", start: "11:33", end: "11:47", verses: 15, summary: "Impureté par contact avec les carcasses. Conclusion des lois alimentaires." }
    ]
  },
  {
    parashaId: 27,
    sefariaUrl: "https://www.sefaria.org/Leviticus.12.1-13.59",
    aliyot: [
      { number: 1, name: "Rishon", start: "12:1", end: "13:5", verses: 13, summary: "Impureté de la femme après accouchement. Début des lois de la tzaraat (lèpre)." },
      { number: 2, name: "Sheni", start: "13:6", end: "13:17", verses: 12, summary: "Diagnostic de la tzaraat : les signes et l'examen par le Kohen." },
      { number: 3, name: "Shlishi", start: "13:18", end: "13:23", verses: 6, summary: "Tzaraat apparaissant sur une plaie guérie." },
      { number: 4, name: "Revi'i", start: "13:24", end: "13:28", verses: 5, summary: "Tzaraat apparaissant sur une brûlure." },
      { number: 5, name: "Hamishi", start: "13:29", end: "13:39", verses: 11, summary: "Tzaraat sur la tête ou la barbe. La teigne." },
      { number: 6, name: "Shishi", start: "13:40", end: "13:54", verses: 15, summary: "La calvitie. Le lépreux est mis à l'écart. Tzaraat sur les vêtements." },
      { number: 7, name: "Shvi'i", start: "13:55", end: "13:59", verses: 5, summary: "Suite des lois sur la tzaraat des vêtements." }
    ]
  },
  {
    parashaId: 28,
    sefariaUrl: "https://www.sefaria.org/Leviticus.14.1-15.33",
    aliyot: [
      { number: 1, name: "Rishon", start: "14:1", end: "14:12", verses: 12, summary: "Purification du lépreux guéri : les deux oiseaux, le rasage, les ablutions." },
      { number: 2, name: "Sheni", start: "14:13", end: "14:20", verses: 8, summary: "Les sacrifices de purification. L'application du sang et de l'huile." },
      { number: 3, name: "Shlishi", start: "14:21", end: "14:32", verses: 12, summary: "Purification pour le pauvre. Les offrandes réduites." },
      { number: 4, name: "Revi'i", start: "14:33", end: "14:53", verses: 21, summary: "Tzaraat des maisons. Examen, isolation, démolition, purification." },
      { number: 5, name: "Hamishi", start: "14:54", end: "15:15", verses: 19, summary: "Résumé des lois de tzaraat. Impureté des écoulements masculins." },
      { number: 6, name: "Shishi", start: "15:16", end: "15:28", verses: 13, summary: "Impureté séminale. Impureté menstruelle et écoulements féminins." },
      { number: 7, name: "Shvi'i", start: "15:29", end: "15:33", verses: 5, summary: "Sacrifices de purification. Résumé des lois d'impureté." }
    ]
  },
  {
    parashaId: 29,
    sefariaUrl: "https://www.sefaria.org/Leviticus.16.1-18.30",
    aliyot: [
      { number: 1, name: "Rishon", start: "16:1", end: "16:17", verses: 17, summary: "Le service de Yom Kippour. Aharon entre dans le Saint des Saints. Les deux boucs." },
      { number: 2, name: "Sheni", start: "16:18", end: "16:24", verses: 7, summary: "Expiation de l'autel. Aharon change de vêtements." },
      { number: 3, name: "Shlishi", start: "16:25", end: "16:34", verses: 10, summary: "L'holocauste. Le bouc émissaire. Yom Kippour est un jour de repos." },
      { number: 4, name: "Revi'i", start: "17:1", end: "17:7", verses: 7, summary: "Interdiction de sacrifier hors du Tabernacle." },
      { number: 5, name: "Hamishi", start: "17:8", end: "18:5", verses: 14, summary: "Interdiction du sang. Vivre par les commandements." },
      { number: 6, name: "Shishi", start: "18:6", end: "18:21", verses: 16, summary: "Interdiction des unions incestueuses et du Molokh." },
      { number: 7, name: "Shvi'i", start: "18:22", end: "18:30", verses: 9, summary: "Interdiction des relations homosexuelles et de la bestialité. Avertissement." }
    ]
  },
  {
    parashaId: 30,
    sefariaUrl: "https://www.sefaria.org/Leviticus.19.1-20.27",
    aliyot: [
      { number: 1, name: "Rishon", start: "19:1", end: "19:14", verses: 14, summary: "Soyez saints. Respect des parents. Shabbat. Idolâtrie. Péa. Vol. Serment. Exploitation." },
      { number: 2, name: "Sheni", start: "19:15", end: "19:22", verses: 8, summary: "Justice. Médisance. Haine. Réprimande. Vengeance. Amour du prochain." },
      { number: 3, name: "Shlishi", start: "19:23", end: "19:32", verses: 10, summary: "Orla. Divination. Coins de la barbe. Tatouages. Prostitution. Shabbat. Respect des anciens." },
      { number: 4, name: "Revi'i", start: "19:33", end: "19:37", verses: 5, summary: "Amour de l'étranger. Poids et mesures justes." },
      { number: 5, name: "Hamishi", start: "20:1", end: "20:7", verses: 7, summary: "Peine pour celui qui donne au Molokh. Sanctification." },
      { number: 6, name: "Shishi", start: "20:8", end: "20:22", verses: 15, summary: "Peines pour les relations interdites. Distinction d'avec les nations." },
      { number: 7, name: "Shvi'i", start: "20:23", end: "20:27", verses: 5, summary: "Distinction entre pur et impur. Interdiction de la sorcellerie." }
    ]
  },
  {
    parashaId: 31,
    sefariaUrl: "https://www.sefaria.org/Leviticus.21.1-24.23",
    aliyot: [
      { number: 1, name: "Rishon", start: "21:1", end: "21:15", verses: 15, summary: "Lois spéciales pour les Kohanim : impureté, mariage. Le grand prêtre." },
      { number: 2, name: "Sheni", start: "21:16", end: "22:16", verses: 25, summary: "Défauts invalidant le Kohen. Qui peut manger les saintetés." },
      { number: 3, name: "Shlishi", start: "22:17", end: "22:33", verses: 17, summary: "Défauts invalidant les animaux pour le sacrifice." },
      { number: 4, name: "Revi'i", start: "23:1", end: "23:22", verses: 22, summary: "Les fêtes : Shabbat, Pessah, Omer, Shavouot." },
      { number: 5, name: "Hamishi", start: "23:23", end: "23:32", verses: 10, summary: "Rosh Hashana et Yom Kippour." },
      { number: 6, name: "Shishi", start: "23:33", end: "23:44", verses: 12, summary: "Soukot et Shémini Atséret." },
      { number: 7, name: "Shvi'i", start: "24:1", end: "24:23", verses: 23, summary: "L'huile du candélabre. Les pains de proposition. Le blasphémateur est lapidé. Œil pour œil." }
    ]
  },
  {
    parashaId: 32,
    sefariaUrl: "https://www.sefaria.org/Leviticus.25.1-26.2",
    aliyot: [
      { number: 1, name: "Rishon", start: "25:1", end: "25:13", verses: 13, summary: "Shémita : la terre se repose la 7e année. Le Jubilé la 50e année." },
      { number: 2, name: "Sheni", start: "25:14", end: "25:18", verses: 5, summary: "Honnêteté dans les transactions. La confiance en D.ieu." },
      { number: 3, name: "Shlishi", start: "25:19", end: "25:24", verses: 6, summary: "D.ieu bénira la 6e année. La terre appartient à D.ieu." },
      { number: 4, name: "Revi'i", start: "25:25", end: "25:28", verses: 4, summary: "Rachat des terres vendues." },
      { number: 5, name: "Hamishi", start: "25:29", end: "25:38", verses: 10, summary: "Maisons dans les villes murées. Villes lévitiques. Prêt au pauvre." },
      { number: 6, name: "Shishi", start: "25:39", end: "25:46", verses: 8, summary: "L'Hébreu qui se vend. Distinction avec l'esclave étranger." },
      { number: 7, name: "Shvi'i", start: "25:47", end: "26:2", verses: 11, summary: "Rachat de l'Hébreu vendu à un étranger. Interdiction de l'idolâtrie. Shabbat." }
    ]
  },
  {
    parashaId: 33,
    sefariaUrl: "https://www.sefaria.org/Leviticus.26.3-27.34",
    aliyot: [
      { number: 1, name: "Rishon", start: "26:3", end: "26:5", verses: 3, summary: "Bénédictions si vous suivez Mes lois : pluie, récolte, paix." },
      { number: 2, name: "Sheni", start: "26:6", end: "26:9", verses: 4, summary: "Suite des bénédictions : sécurité, fécondité, alliance." },
      { number: 3, name: "Shlishi", start: "26:10", end: "26:46", verses: 37, summary: "Les réprimandes (Tokhe'ha) : maladies, défaites, exil. Mais D.ieu n'abandonne pas." },
      { number: 4, name: "Revi'i", start: "27:1", end: "27:15", verses: 15, summary: "Valeur des personnes consacrées. Valeur des animaux et des maisons." },
      { number: 5, name: "Hamishi", start: "27:16", end: "27:21", verses: 6, summary: "Valeur des champs consacrés. Le Jubilé." },
      { number: 6, name: "Shishi", start: "27:22", end: "27:28", verses: 7, summary: "Champs achetés. Ce qui est 'herem (voué)." },
      { number: 7, name: "Shvi'i", start: "27:29", end: "27:34", verses: 6, summary: "Le 'herem. La dîme du bétail. Fin du Lévitique." }
    ]
  },
  {
    parashaId: 34,
    sefariaUrl: "https://www.sefaria.org/Numbers.1.1-4.20",
    aliyot: [
      { number: 1, name: "Rishon", start: "1:1", end: "1:19", verses: 19, summary: "D.ieu ordonne de recenser les hommes de 20 ans et plus. Les chefs de tribus." },
      { number: 2, name: "Sheni", start: "1:20", end: "1:54", verses: 35, summary: "Recensement de chaque tribu. Total : 603 550. Les Lévites sont à part." },
      { number: 3, name: "Shlishi", start: "2:1", end: "2:34", verses: 34, summary: "Disposition du camp : 4 groupes de 3 tribus autour du Tabernacle." },
      { number: 4, name: "Revi'i", start: "3:1", end: "3:13", verses: 13, summary: "Généalogie d'Aharon. Les Lévites remplacent les premiers-nés." },
      { number: 5, name: "Hamishi", start: "3:14", end: "3:39", verses: 26, summary: "Recensement des Lévites par familles : Guershon, Kehat, Mérari. Leurs fonctions." },
      { number: 6, name: "Shishi", start: "3:40", end: "3:51", verses: 12, summary: "Rachat des 273 premiers-nés en excès des Lévites." },
      { number: 7, name: "Shvi'i", start: "4:1", end: "4:20", verses: 20, summary: "Service des Kehatites : porter les objets sacrés. Aharon les couvre d'abord." }
    ]
  },
  {
    parashaId: 35,
    sefariaUrl: "https://www.sefaria.org/Numbers.4.21-7.89",
    aliyot: [
      { number: 1, name: "Rishon", start: "4:21", end: "4:37", verses: 17, summary: "Service des Guershonites. Recensement des Kehatites aptes au service." },
      { number: 2, name: "Sheni", start: "4:38", end: "4:49", verses: 12, summary: "Recensement des Guershonites et Mérarites. Total des Lévites : 8 580." },
      { number: 3, name: "Shlishi", start: "5:1", end: "5:10", verses: 10, summary: "Exclusion des impurs du camp. Restitution du vol avec le cinquième." },
      { number: 4, name: "Revi'i", start: "5:11", end: "6:27", verses: 48, summary: "La Sota (femme soupçonnée). Le Nazir. La bénédiction des Kohanim." },
      { number: 5, name: "Hamishi", start: "7:1", end: "7:41", verses: 41, summary: "Inauguration du Tabernacle. Offrandes des princes des 6 premières tribus." },
      { number: 6, name: "Shishi", start: "7:42", end: "7:71", verses: 30, summary: "Offrandes des princes des tribus 7 à 10." },
      { number: 7, name: "Shvi'i", start: "7:72", end: "7:89", verses: 18, summary: "Offrandes des deux dernières tribus. D.ieu parle à Moïse depuis le propitiatoire." }
    ]
  },
  {
    parashaId: 36,
    sefariaUrl: "https://www.sefaria.org/Numbers.8.1-12.16",
    aliyot: [
      { number: 1, name: "Rishon", start: "8:1", end: "8:14", verses: 14, summary: "Le candélabre. Consécration des Lévites : purification et sacrifices." },
      { number: 2, name: "Sheni", start: "8:15", end: "8:26", verses: 12, summary: "Les Lévites servent de 25 à 50 ans." },
      { number: 3, name: "Shlishi", start: "9:1", end: "9:14", verses: 14, summary: "Le deuxième Pessah pour ceux qui étaient impurs ou en voyage." },
      { number: 4, name: "Revi'i", start: "9:15", end: "10:10", verses: 19, summary: "La nuée guide le camp. Les trompettes d'argent." },
      { number: 5, name: "Hamishi", start: "10:11", end: "10:34", verses: 24, summary: "Départ du Sinaï. Ordre de marche. Moïse invite 'Hovav." },
      { number: 6, name: "Shishi", start: "10:35", end: "11:29", verses: 31, summary: "Les versets de l'Arche. Le peuple se plaint. Le feu de Tavéra. Les cailles. Les 70 anciens." },
      { number: 7, name: "Shvi'i", start: "11:30", end: "12:16", verses: 22, summary: "Excès de cailles et plaie. Myriam et Aharon médisent de Moïse. Myriam est frappée de tzaraat." }
    ]
  },
  {
    parashaId: 37,
    sefariaUrl: "https://www.sefaria.org/Numbers.13.1-15.41",
    aliyot: [
      { number: 1, name: "Rishon", start: "13:1", end: "13:20", verses: 20, summary: "D.ieu ordonne d'envoyer des explorateurs. Liste des 12 chefs." },
      { number: 2, name: "Sheni", start: "13:21", end: "14:7", verses: 20, summary: "Les explorateurs reviennent avec des fruits. Mauvais rapport. Josué et Calev protestent." },
      { number: 3, name: "Shlishi", start: "14:8", end: "14:25", verses: 18, summary: "Le peuple veut retourner en Égypte. D.ieu menace de les détruire. Moïse intercède." },
      { number: 4, name: "Revi'i", start: "14:26", end: "15:7", verses: 27, summary: "Condamnation à errer 40 ans. Les explorateurs meurent. Tentative de monter sans D.ieu." },
      { number: 5, name: "Hamishi", start: "15:8", end: "15:16", verses: 9, summary: "Lois des libations accompagnant les sacrifices." },
      { number: 6, name: "Shishi", start: "15:17", end: "15:26", verses: 10, summary: "La 'Halla. Sacrifice pour péché communautaire par inadvertance." },
      { number: 7, name: "Shvi'i", start: "15:27", end: "15:41", verses: 15, summary: "Péché individuel par inadvertance. Le profanateur du Shabbat. Les Tsitsit." }
    ]
  },
  {
    parashaId: 38,
    sefariaUrl: "https://www.sefaria.org/Numbers.16.1-18.32",
    aliyot: [
      { number: 1, name: "Rishon", start: "16:1", end: "16:13", verses: 13, summary: "Révolte de Kora'h, Datan et Aviram contre Moïse et Aharon." },
      { number: 2, name: "Sheni", start: "16:14", end: "16:19", verses: 6, summary: "Datan et Aviram refusent de monter. Confrontation avec les encensoirs." },
      { number: 3, name: "Shlishi", start: "16:20", end: "17:8", verses: 24, summary: "D.ieu veut détruire l'assemblée. La terre engloutit les rebelles. Un feu consume les 250. Plaie arrêtée par Aharon." },
      { number: 4, name: "Revi'i", start: "17:9", end: "17:15", verses: 7, summary: "Le bâton d'Aharon fleurit et porte des amandes, confirmant sa prêtrise." },
      { number: 5, name: "Hamishi", start: "17:16", end: "17:24", verses: 9, summary: "Le peuple a peur de périr. Responsabilité des Kohanim et Lévites." },
      { number: 6, name: "Shishi", start: "17:25", end: "18:20", verses: 24, summary: "Les Lévites servent les Kohanim. Parts des Kohanim : saintetés, prémices, premiers-nés. Pas d'héritage en terre." },
      { number: 7, name: "Shvi'i", start: "18:21", end: "18:32", verses: 12, summary: "La dîme des Lévites. Les Lévites prélèvent la dîme de la dîme." }
    ]
  },
  {
    parashaId: 39,
    sefariaUrl: "https://www.sefaria.org/Numbers.19.1-22.1",
    aliyot: [
      { number: 1, name: "Rishon", start: "19:1", end: "19:17", verses: 17, summary: "La vache rousse. Préparation des eaux de purification." },
      { number: 2, name: "Sheni", start: "19:18", end: "20:6", verses: 11, summary: "Purification de l'impur. Mort de Myriam. Pas d'eau." },
      { number: 3, name: "Shlishi", start: "20:7", end: "20:13", verses: 7, summary: "Moïse frappe le rocher au lieu de lui parler. Il ne pourra pas entrer en terre promise." },
      { number: 4, name: "Revi'i", start: "20:14", end: "20:21", verses: 8, summary: "Édom refuse le passage." },
      { number: 5, name: "Hamishi", start: "20:22", end: "21:9", verses: 17, summary: "Mort d'Aharon. Guerre contre le Cananéen. Le serpent de bronze." },
      { number: 6, name: "Shishi", start: "21:10", end: "21:20", verses: 11, summary: "Étapes dans le désert. Le cantique du puits." },
      { number: 7, name: "Shvi'i", start: "21:21", end: "22:1", verses: 16, summary: "Victoire sur Si'hon et Og. Israël campe en face de Jéricho." }
    ]
  },
  {
    parashaId: 40,
    sefariaUrl: "https://www.sefaria.org/Numbers.22.2-25.9",
    aliyot: [
      { number: 1, name: "Rishon", start: "22:2", end: "22:12", verses: 11, summary: "Balak, roi de Moab, envoie chercher Bilaam pour maudire Israël. D.ieu interdit." },
      { number: 2, name: "Sheni", start: "22:13", end: "22:20", verses: 8, summary: "Nouvelle ambassade. D.ieu permet à Bilaam d'y aller avec des conditions." },
      { number: 3, name: "Shlishi", start: "22:21", end: "22:38", verses: 18, summary: "L'ânesse de Bilaam voit l'ange et parle. Bilaam est averti." },
      { number: 4, name: "Revi'i", start: "22:39", end: "23:12", verses: 15, summary: "Premiers sacrifices. Première bénédiction de Bilaam." },
      { number: 5, name: "Hamishi", start: "23:13", end: "23:26", verses: 14, summary: "Deuxième tentative, deuxième bénédiction." },
      { number: 6, name: "Shishi", start: "23:27", end: "24:13", verses: 17, summary: "Troisième bénédiction : 'Comme tes tentes sont belles, ô Ya'akov!'" },
      { number: 7, name: "Shvi'i", start: "24:14", end: "25:9", verses: 21, summary: "Prophéties sur l'avenir. Faute de Baal-Péor. Pin'has tue Zimri." }
    ]
  },
  {
    parashaId: 41,
    sefariaUrl: "https://www.sefaria.org/Numbers.25.10-30.1",
    aliyot: [
      { number: 1, name: "Rishon", start: "25:10", end: "26:4", verses: 13, summary: "Pin'has reçoit l'alliance de paix et de prêtrise éternelle. Ordre de recenser." },
      { number: 2, name: "Sheni", start: "26:5", end: "26:51", verses: 47, summary: "Recensement des tribus. Total : 601 730." },
      { number: 3, name: "Shlishi", start: "26:52", end: "27:5", verses: 19, summary: "Partage de la terre par tirage au sort. Les filles de Tselof'had." },
      { number: 4, name: "Revi'i", start: "27:6", end: "27:23", verses: 18, summary: "Les filles héritent. Moïse voit la terre depuis le mont Avarim. Josué est désigné successeur." },
      { number: 5, name: "Hamishi", start: "28:1", end: "28:15", verses: 15, summary: "Sacrifices quotidiens (Tamid). Sacrifice additionnel du Shabbat et de Rosh 'Hodesh." },
      { number: 6, name: "Shishi", start: "28:16", end: "29:11", verses: 27, summary: "Sacrifices de Pessah, Shavouot, Rosh Hashana et Yom Kippour." },
      { number: 7, name: "Shvi'i", start: "29:12", end: "30:1", verses: 29, summary: "Sacrifices de Soukot : 70 taureaux en 7 jours. Shémini Atséret." }
    ]
  },
  {
    parashaId: 42,
    sefariaUrl: "https://www.sefaria.org/Numbers.30.2-32.42",
    aliyot: [
      { number: 1, name: "Rishon", start: "30:2", end: "30:17", verses: 16, summary: "Lois des vœux. Le père ou le mari peut annuler les vœux d'une femme." },
      { number: 2, name: "Sheni", start: "31:1", end: "31:12", verses: 12, summary: "Guerre contre Midian. Les 5 rois et Bilaam sont tués." },
      { number: 3, name: "Shlishi", start: "31:13", end: "31:24", verses: 12, summary: "Moïse se fâche car les femmes ont été épargnées. Purification des soldats et du butin." },
      { number: 4, name: "Revi'i", start: "31:25", end: "31:41", verses: 17, summary: "Partage du butin entre combattants et communauté. Prélèvement pour les Kohanim et Lévites." },
      { number: 5, name: "Hamishi", start: "31:42", end: "31:54", verses: 13, summary: "La moitié de la communauté. Offrande d'or des officiers." },
      { number: 6, name: "Shishi", start: "32:1", end: "32:19", verses: 19, summary: "Réouven et Gad demandent les terres de Transjordanie. Moïse les réprimande." },
      { number: 7, name: "Shvi'i", start: "32:20", end: "32:42", verses: 23, summary: "Ils acceptent de combattre en avant-garde. Attribution des terres." }
    ]
  },
  {
    parashaId: 43,
    sefariaUrl: "https://www.sefaria.org/Numbers.33.1-36.13",
    aliyot: [
      { number: 1, name: "Rishon", start: "33:1", end: "33:10", verses: 10, summary: "Liste des 42 étapes depuis l'Égypte." },
      { number: 2, name: "Sheni", start: "33:11", end: "33:49", verses: 39, summary: "Suite des étapes jusqu'aux plaines de Moab." },
      { number: 3, name: "Shlishi", start: "33:50", end: "34:15", verses: 22, summary: "Ordre de conquérir et chasser les habitants. Frontières de la terre promise." },
      { number: 4, name: "Revi'i", start: "34:16", end: "34:29", verses: 14, summary: "Chefs désignés pour le partage de la terre." },
      { number: 5, name: "Hamishi", start: "35:1", end: "35:8", verses: 8, summary: "Villes lévitiques : 48 villes dont 6 de refuge." },
      { number: 6, name: "Shishi", start: "35:9", end: "35:34", verses: 26, summary: "Lois des villes de refuge. Le meurtrier involontaire. Le rédempteur du sang." },
      { number: 7, name: "Shvi'i", start: "36:1", end: "36:13", verses: 13, summary: "Les filles héritières épousent dans leur tribu. Fin du livre des Nombres." }
    ]
  },
  {
    parashaId: 44,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.1.1-3.22",
    aliyot: [
      { number: 1, name: "Rishon", start: "1:1", end: "1:10", verses: 10, summary: "Moïse récapitule. Temps du départ du Sinaï. Trop nombreux pour un seul homme." },
      { number: 2, name: "Sheni", start: "1:11", end: "1:21", verses: 11, summary: "Établissement des juges. Ordre de conquérir la terre." },
      { number: 3, name: "Shlishi", start: "1:22", end: "1:38", verses: 17, summary: "Récit des explorateurs. Refus du peuple. Condamnation à errer 40 ans." },
      { number: 4, name: "Revi'i", start: "1:39", end: "2:1", verses: 9, summary: "Défaite devant les Amoréens. Longue errance." },
      { number: 5, name: "Hamishi", start: "2:2", end: "2:30", verses: 29, summary: "Passage par Édom, Moab, Ammon. D.ieu endurcit Si'hon." },
      { number: 6, name: "Shishi", start: "2:31", end: "3:14", verses: 21, summary: "Victoire sur Si'hon et Og. Attribution des terres à Réouven, Gad et demi-Manassé." },
      { number: 7, name: "Shvi'i", start: "3:15", end: "3:22", verses: 8, summary: "Conditions pour les tribus de Transjordanie. Encouragement à Josué." }
    ]
  },
  {
    parashaId: 45,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.3.23-7.11",
    aliyot: [
      { number: 1, name: "Rishon", start: "3:23", end: "4:4", verses: 11, summary: "Moïse supplie D.ieu de le laisser entrer. D.ieu refuse. Exhortation à garder les commandements." },
      { number: 2, name: "Sheni", start: "4:5", end: "4:40", verses: 36, summary: "La sagesse des lois. Interdiction des images. Rappel du Sinaï. Villes de refuge." },
      { number: 3, name: "Shlishi", start: "4:41", end: "4:49", verses: 9, summary: "Trois villes de refuge en Transjordanie. Introduction à la loi." },
      { number: 4, name: "Revi'i", start: "5:1", end: "5:18", verses: 18, summary: "Les Dix Commandements répétés." },
      { number: 5, name: "Hamishi", start: "5:19", end: "6:3", verses: 15, summary: "Le peuple demande que Moïse serve d'intermédiaire. Le Shéma." },
      { number: 6, name: "Shishi", start: "6:4", end: "6:25", verses: 22, summary: "Shéma Israël. Aimer D.ieu. Transmettre aux enfants. Tefillin. Mezouza." },
      { number: 7, name: "Shvi'i", start: "7:1", end: "7:11", verses: 11, summary: "Destruction des 7 nations. Interdiction des mariages mixtes. Israël est un peuple saint." }
    ]
  },
  {
    parashaId: 46,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.7.12-11.25",
    aliyot: [
      { number: 1, name: "Rishon", start: "7:12", end: "8:10", verses: 25, summary: "Bénédictions pour l'obéissance. La manne. Description de la bonne terre." },
      { number: 2, name: "Sheni", start: "8:11", end: "9:3", verses: 13, summary: "Ne pas oublier D.ieu dans la prospérité. D.ieu chasse les nations." },
      { number: 3, name: "Shlishi", start: "9:4", end: "9:29", verses: 26, summary: "Non par mérite d'Israël mais par faute des nations. Rappel du veau d'or." },
      { number: 4, name: "Revi'i", start: "10:1", end: "10:11", verses: 11, summary: "Les secondes Tables. L'Arche. Les Lévites. Ordre de partir." },
      { number: 5, name: "Hamishi", start: "10:12", end: "11:9", verses: 20, summary: "Ce que D.ieu demande. Circoncire le cœur. Rappel des miracles." },
      { number: 6, name: "Shishi", start: "11:10", end: "11:21", verses: 12, summary: "Différence avec l'Égypte. Deuxième paragraphe du Shéma : récompense et punition." },
      { number: 7, name: "Shvi'i", start: "11:22", end: "11:25", verses: 4, summary: "Si vous gardez les commandements, D.ieu chassera les nations devant vous." }
    ]
  },
  {
    parashaId: 47,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.11.26-16.17",
    aliyot: [
      { number: 1, name: "Rishon", start: "11:26", end: "12:10", verses: 17, summary: "Bénédiction et malédiction. Détruire l'idolâtrie. Le lieu que D.ieu choisira." },
      { number: 2, name: "Sheni", start: "12:11", end: "12:28", verses: 18, summary: "Sacrifier uniquement au lieu choisi. Permission de manger de la viande." },
      { number: 3, name: "Shlishi", start: "12:29", end: "13:19", verses: 22, summary: "Ne pas imiter les nations. Le prophète incitateur. La ville corrompue." },
      { number: 4, name: "Revi'i", start: "14:1", end: "14:21", verses: 21, summary: "Ne pas se mutiler. Lois de la cacherout." },
      { number: 5, name: "Hamishi", start: "14:22", end: "14:29", verses: 8, summary: "La dîme. La dîme du pauvre." },
      { number: 6, name: "Shishi", start: "15:1", end: "15:18", verses: 18, summary: "Shémita des dettes. Ouverture de la main au pauvre. L'esclave hébreu." },
      { number: 7, name: "Shvi'i", start: "15:19", end: "16:17", verses: 22, summary: "Les premiers-nés. Les trois fêtes de pèlerinage : Pessah, Shavouot, Soukot." }
    ]
  },
  {
    parashaId: 48,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.16.18-21.9",
    aliyot: [
      { number: 1, name: "Rishon", start: "16:18", end: "17:13", verses: 18, summary: "Juges et officiers. Justice. Interdiction des Ashéras. Le tribunal suprême." },
      { number: 2, name: "Sheni", start: "17:14", end: "17:20", verses: 7, summary: "Lois du roi. Il doit écrire un Sefer Torah." },
      { number: 3, name: "Shlishi", start: "18:1", end: "18:5", verses: 5, summary: "Parts des Kohanim. Pas d'héritage en terre." },
      { number: 4, name: "Revi'i", start: "18:6", end: "18:13", verses: 8, summary: "Le Kohen qui vient servir. Interdiction de la sorcellerie et divination." },
      { number: 5, name: "Hamishi", start: "18:14", end: "19:13", verses: 22, summary: "Le prophète. Villes de refuge. Témoins." },
      { number: 6, name: "Shishi", start: "19:14", end: "20:9", verses: 17, summary: "Ne pas déplacer les bornes. Faux témoins. Lois de la guerre." },
      { number: 7, name: "Shvi'i", start: "20:10", end: "21:9", verses: 20, summary: "Proposition de paix. Ne pas détruire les arbres fruitiers. La génisse décapitée." }
    ]
  },
  {
    parashaId: 49,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.21.10-25.19",
    aliyot: [
      { number: 1, name: "Rishon", start: "21:10", end: "21:21", verses: 12, summary: "La belle captive. Le premier-né du mal-aimée. Le fils rebelle." },
      { number: 2, name: "Sheni", start: "21:22", end: "22:7", verses: 9, summary: "Le pendu. Objets perdus. Shilouah hakén (renvoyer la mère oiseau)." },
      { number: 3, name: "Shlishi", start: "22:8", end: "23:7", verses: 29, summary: "Parapet. Shatnez. Tsitsit. Accusations. Adultère. Pureté du camp." },
      { number: 4, name: "Revi'i", start: "23:8", end: "23:24", verses: 17, summary: "Édomites et Égyptiens. Pureté du camp. Esclave fugitif. Prêt à intérêt. Vœux." },
      { number: 5, name: "Hamishi", start: "23:25", end: "24:4", verses: 6, summary: "Manger dans la vigne du prochain. Divorce. Remariage interdit." },
      { number: 6, name: "Shishi", start: "24:5", end: "24:13", verses: 9, summary: "Nouveau marié. Kidnapping. Tzaraat. Gage du pauvre." },
      { number: 7, name: "Shvi'i", start: "24:14", end: "25:19", verses: 28, summary: "Salaire journalier. Justice pour l'étranger. Glanage. Yibboum. Poids justes. Amalek." }
    ]
  },
  {
    parashaId: 50,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.26.1-29.8",
    aliyot: [
      { number: 1, name: "Rishon", start: "26:1", end: "26:11", verses: 11, summary: "Les prémices. La déclaration de l'Araméen errant." },
      { number: 2, name: "Sheni", start: "26:12", end: "26:15", verses: 4, summary: "Déclaration de la dîme la 3e et 6e année." },
      { number: 3, name: "Shlishi", start: "26:16", end: "26:19", verses: 4, summary: "Aujourd'hui D.ieu te commande. Tu seras un peuple saint." },
      { number: 4, name: "Revi'i", start: "27:1", end: "27:10", verses: 10, summary: "Pierres enduites de chaux au mont Ébal. Tu es devenu le peuple de D.ieu." },
      { number: 5, name: "Hamishi", start: "27:11", end: "28:6", verses: 22, summary: "Les tribus sur Garizim et Ébal. Les 12 malédictions. Bénédictions." },
      { number: 6, name: "Shishi", start: "28:7", end: "28:69", verses: 63, summary: "Suite des bénédictions. Les malédictions (Tokhe'ha) : maladies, défaites, exil." },
      { number: 7, name: "Shvi'i", start: "29:1", end: "29:8", verses: 8, summary: "Rappel des miracles au désert. Vous êtes tous devant D.ieu." }
    ]
  },
  {
    parashaId: 51,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.29.9-30.20",
    aliyot: [
      { number: 1, name: "Rishon", start: "29:9", end: "29:11", verses: 3, summary: "Vous êtes tous ici pour entrer dans l'alliance." },
      { number: 2, name: "Sheni", start: "29:12", end: "29:14", verses: 3, summary: "L'alliance est aussi pour les générations futures." },
      { number: 3, name: "Shlishi", start: "29:15", end: "29:28", verses: 14, summary: "Avertissement contre l'idolâtrie. Les choses cachées appartiennent à D.ieu." },
      { number: 4, name: "Revi'i", start: "30:1", end: "30:6", verses: 6, summary: "Après l'exil, le retour. D.ieu circoncira votre cœur." },
      { number: 5, name: "Hamishi", start: "30:7", end: "30:10", verses: 4, summary: "Les malédictions sur les ennemis. Israël prospérera de nouveau." },
      { number: 6, name: "Shishi", start: "30:11", end: "30:14", verses: 4, summary: "La Torah n'est pas au ciel ni au-delà de la mer. Elle est proche de toi." },
      { number: 7, name: "Shvi'i", start: "30:15", end: "30:20", verses: 6, summary: "Choisis la vie ! Aime D.ieu, obéis, attache-toi à Lui." }
    ]
  },
  {
    parashaId: 52,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.31.1-31.30",
    aliyot: [
      { number: 1, name: "Rishon", start: "31:1", end: "31:3", verses: 3, summary: "Moïse a 120 ans. Il ne passera pas le Jourdain. Josué le passera." },
      { number: 2, name: "Sheni", start: "31:4", end: "31:6", verses: 3, summary: "D.ieu agira comme avec Si'hon et Og. Soyez forts." },
      { number: 3, name: "Shlishi", start: "31:7", end: "31:9", verses: 3, summary: "Moïse encourage Josué. Il écrit la Torah et la confie aux Kohanim." },
      { number: 4, name: "Revi'i", start: "31:10", end: "31:13", verses: 4, summary: "Hakhel : lecture de la Torah tous les 7 ans à Soukot." },
      { number: 5, name: "Hamishi", start: "31:14", end: "31:19", verses: 6, summary: "D.ieu annonce que le peuple se corrompra. La Torah sera témoin contre eux." },
      { number: 6, name: "Shishi", start: "31:20", end: "31:24", verses: 5, summary: "Le chant sera témoin. Moïse écrit le chant et la Torah." },
      { number: 7, name: "Shvi'i", start: "31:25", end: "31:30", verses: 6, summary: "La Torah est placée à côté de l'Arche. Moïse rassemble le peuple pour le chant." }
    ]
  },
  {
    parashaId: 53,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.32.1-32.52",
    aliyot: [
      { number: 1, name: "Rishon", start: "32:1", end: "32:6", verses: 6, summary: "Écoutez, cieux ! Ma parole descendra comme la pluie. Le Rocher parfait." },
      { number: 2, name: "Sheni", start: "32:7", end: "32:12", verses: 6, summary: "Souviens-toi des jours anciens. D.ieu a trouvé Israël au désert." },
      { number: 3, name: "Shlishi", start: "32:13", end: "32:18", verses: 6, summary: "Il l'a nourri du miel du rocher. Yéshourun s'est engraissé et a regimbé." },
      { number: 4, name: "Revi'i", start: "32:19", end: "32:28", verses: 10, summary: "D.ieu a vu et s'est irrité. Il cachera Sa face. Il les rendra jaloux." },
      { number: 5, name: "Hamishi", start: "32:29", end: "32:39", verses: 11, summary: "S'ils étaient sages... Leur vigne est de Sodome. D.ieu aura pitié de Son peuple." },
      { number: 6, name: "Shishi", start: "32:40", end: "32:43", verses: 4, summary: "D.ieu se vengera de Ses ennemis. Nations, réjouissez-vous avec Son peuple." },
      { number: 7, name: "Shvi'i", start: "32:44", end: "32:52", verses: 9, summary: "Moïse et Josué récitent le chant. D.ieu ordonne à Moïse de monter mourir sur le mont Nébo." }
    ]
  },
  {
    parashaId: 54,
    sefariaUrl: "https://www.sefaria.org/Deuteronomy.33.1-34.12",
    aliyot: [
      { number: 1, name: "Rishon", start: "33:1", end: "33:7", verses: 7, summary: "Moïse bénit les tribus avant sa mort. Réouven vivra. Yéhouda ira au combat." },
      { number: 2, name: "Sheni", start: "33:8", end: "33:12", verses: 5, summary: "Bénédiction de Lévi (Ourim, enseignement). Binyamin est aimé de D.ieu." },
      { number: 3, name: "Shlishi", start: "33:13", end: "33:17", verses: 5, summary: "Yossef : richesse de la terre. Éfrayim et Manassé comme les cornes du bœuf." },
      { number: 4, name: "Revi'i", start: "33:18", end: "33:21", verses: 4, summary: "Zevouloun et Issakhar prospéreront. Gad a choisi une part de chef." },
      { number: 5, name: "Hamishi", start: "33:22", end: "33:26", verses: 5, summary: "Dan est un jeune lion. Naftali est rassasié. Asher est béni entre les fils." },
      { number: 6, name: "Shishi", start: "33:27", end: "33:29", verses: 3, summary: "Il n'y a pas comme le D.ieu de Yéshourun. Moïse voit la terre, meurt et est enterré. Josué est rempli d'esprit de sagesse. Il n'y eut plus de prophète comme Moïse." },
      { number: 7, name: "Shvi'i", start: "34:1", end: "34:12", verses: 12, summary: "Moïse monte sur le Nébo, voit toute la terre, meurt à 120 ans. Deuil de 30 jours. Éloge final de Moïse." }
    ]
  }
];

export function getAliyotForParasha(parashaId: number): ParashaWithAliyot | undefined {
  return parashiotAliyot.find(p => p.parashaId === parashaId);
}
