export interface Parachiot {
  id: number;
  name: string;
  hebrewName: string;
  book: string;
  verses: number;
  words: number;
  letters: number;
  summary: string;
}

export const parachiots: Parachiot[] = [
  // Bereishit (Genesis)
  { id: 1, name: "Bereshit", hebrewName: "בְּרֵאשִׁית", book: "Bereishit", verses: 146, words: 1969, letters: 7235, summary: "La création du monde en 6 jours, Adam et Ève dans le jardin d'Éden, la faute originelle et l'expulsion, Caïn et Abel, les générations d'Adam jusqu'à Noé." },
  { id: 2, name: "Noach", hebrewName: "נֹחַ", book: "Bereishit", verses: 153, words: 2025, letters: 6907, summary: "Noé construit l'arche, le déluge universel, l'alliance de l'arc-en-ciel, la tour de Babel et la dispersion des nations." },
  { id: 3, name: "Lech Lecha", hebrewName: "לֶךְ־לְךָ", book: "Bereishit", verses: 126, words: 1686, letters: 6336, summary: "L'appel d'Abraham et son voyage vers Canaan, la descente en Égypte, la séparation d'avec Lot, l'alliance entre les morceaux, Ismaël et la circoncision." },
  { id: 4, name: "Vayera", hebrewName: "וַיֵּרָא", book: "Bereishit", verses: 147, words: 2085, letters: 7862, summary: "Les trois anges visitent Abraham, la promesse d'Isaac, la destruction de Sodome et Gomorrhe, le sacrifice d'Isaac (Akéda)." },
  { id: 5, name: "Chayei Sarah", hebrewName: "חַיֵּי שָׂרָה", book: "Bereishit", verses: 105, words: 1402, letters: 5314, summary: "La mort de Sarah et l'achat de la grotte de Makhpéla, Eliezer trouve Rébecca comme épouse pour Isaac, la mort d'Abraham." },
  { id: 6, name: "Toldot", hebrewName: "תּוֹלְדֹת", book: "Bereishit", verses: 106, words: 1432, letters: 5426, summary: "La naissance de Jacob et Ésaü, Ésaü vend son droit d'aînesse, Isaac bénit Jacob à la place d'Ésaü." },
  { id: 7, name: "Vayetzei", hebrewName: "וַיֵּצֵא", book: "Bereishit", verses: 148, words: 2021, letters: 7512, summary: "Le rêve de l'échelle de Jacob, Jacob travaille pour Laban, les naissances des douze tribus, le départ de la maison de Laban." },
  { id: 8, name: "Vayishlach", hebrewName: "וַיִּשְׁלַח", book: "Bereishit", verses: 154, words: 2077, letters: 7458, summary: "Les préparatifs de Jacob pour rencontrer Ésaü, la lutte avec l'ange, la réconciliation avec Ésaü, la mort de Rachel." },
  { id: 9, name: "Vayeshev", hebrewName: "וַיֵּשֶׁב", book: "Bereishit", verses: 112, words: 1558, letters: 5972, summary: "Joseph et ses rêves, ses frères le vendent en esclavage, Joseph dans la maison de Potiphar, l'histoire de Juda et Tamar." },
  { id: 10, name: "Miketz", hebrewName: "מִקֵּץ", book: "Bereishit", verses: 146, words: 2025, letters: 7584, summary: "Joseph interprète les rêves de Pharaon, devient vice-roi d'Égypte, les frères viennent acheter du blé." },
  { id: 11, name: "Vayigash", hebrewName: "וַיִּגַּשׁ", book: "Bereishit", verses: 106, words: 1480, letters: 5680, summary: "Joseph se révèle à ses frères, la famille de Jacob descend en Égypte, Jacob rencontre Pharaon." },
  { id: 12, name: "Vayechi", hebrewName: "וַיְחִי", book: "Bereishit", verses: 85, words: 1158, letters: 4446, summary: "Les dernières années de Jacob en Égypte, les bénédictions aux douze tribus, la mort de Jacob et son retour à Canaan." },

  // Shemot (Exodus)
  { id: 13, name: "Shemot", hebrewName: "שְׁמוֹת", book: "Shemot", verses: 124, words: 1763, letters: 6762, summary: "L'esclavage en Égypte, la naissance de Moïse, le buisson ardent, Moïse retourne en Égypte pour libérer le peuple." },
  { id: 14, name: "Va'era", hebrewName: "וָאֵרָא", book: "Shemot", verses: 121, words: 1665, letters: 6334, summary: "Les sept premières plaies d'Égypte, Pharaon refuse de libérer le peuple malgré les avertissements." },
  { id: 15, name: "Bo", hebrewName: "בֹּא", book: "Shemot", verses: 106, words: 1413, letters: 5345, summary: "Les trois dernières plaies, l'institution de Pessa'h, la sortie d'Égypte, la consécration des premiers-nés." },
  { id: 16, name: "Beshalach", hebrewName: "בְּשַׁלַּח", book: "Shemot", verses: 116, words: 1681, letters: 6423, summary: "Le passage de la mer Rouge, le cantique de la mer, la manne, les cailles et l'eau du rocher, la guerre contre Amalek." },
  { id: 17, name: "Yitro", hebrewName: "יִתְרוֹ", book: "Shemot", verses: 75, words: 1105, letters: 4258, summary: "Jethro rejoint Moïse, les conseils de Jethro sur l'organisation judiciaire, le don des Dix Commandements au mont Sinaï." },
  { id: 18, name: "Mishpatim", hebrewName: "מִּשְׁפָּטִים", book: "Shemot", verses: 118, words: 1462, letters: 5474, summary: "Les lois civiles et sociales, le code de la justice, l'alliance au mont Sinaï." },
  { id: 19, name: "Terumah", hebrewName: "תְּרוּמָה", book: "Shemot", verses: 96, words: 1145, letters: 4692, summary: "Les instructions pour la construction du Tabernacle, l'arche d'alliance, la table des pains de proposition, le candélabre d'or." },
  { id: 20, name: "Tetzaveh", hebrewName: "תְּצַוֶּה", book: "Shemot", verses: 101, words: 1412, letters: 5430, summary: "L'huile pour le candélabre, les vêtements sacerdotaux du Cohen Gadol, la consécration d'Aaron et ses fils." },
  { id: 21, name: "Ki Tisa", hebrewName: "כִּי תִשָּׂא", book: "Shemot", verses: 139, words: 1776, letters: 6865, summary: "Le dénombrement d'Israël, le veau d'or, Moïse brise les Tables, l'intercession de Moïse, les secondes Tables." },
  { id: 22, name: "Vayakhel", hebrewName: "וַיַּקְהֵל", book: "Shemot", verses: 122, words: 1558, letters: 6712, summary: "Le Shabbat, la collecte des matériaux pour le Tabernacle, Betsalel et Ohaliav dirigent la construction." },
  { id: 23, name: "Pekudei", hebrewName: "פְקוּדֵי", book: "Shemot", verses: 92, words: 1182, letters: 4432, summary: "Le décompte des matériaux, l'achèvement du Tabernacle, les vêtements sacerdotaux, l'érection du Tabernacle et la nuée divine." },

  // Vayikra (Leviticus)
  { id: 24, name: "Vayikra", hebrewName: "וַיִּקְרָא", book: "Vayikra", verses: 111, words: 1278, letters: 4842, summary: "Les lois des sacrifices : holocauste, offrande de farine, sacrifice de paix, expiatoire et de culpabilité." },
  { id: 25, name: "Tzav", hebrewName: "צַו", book: "Vayikra", verses: 97, words: 1002, letters: 3619, summary: "Les instructions aux Cohanim sur les sacrifices, le feu perpétuel, la consécration d'Aaron et ses fils." },
  { id: 26, name: "Shemini", hebrewName: "שְּׁמִינִי", book: "Vayikra", verses: 91, words: 1010, letters: 3632, summary: "Le huitième jour de l'inauguration du Tabernacle, la mort de Nadav et Avihou, les lois de la cacherout." },
  { id: 27, name: "Tazria", hebrewName: "תַזְרִיעַ", book: "Vayikra", verses: 67, words: 720, letters: 2641, summary: "Les lois de la pureté après l'accouchement, les lois de la tsaraat (lèpre) sur le corps." },
  { id: 28, name: "Metzora", hebrewName: "מְּצֹרָע", book: "Vayikra", verses: 90, words: 965, letters: 3585, summary: "La purification du lépreux, les lois de la tsaraat sur les maisons et les vêtements." },
  { id: 29, name: "Acharei Mot", hebrewName: "אַחֲרֵי מוֹת", book: "Vayikra", verses: 80, words: 871, letters: 3166, summary: "Le service de Yom Kippour, les deux boucs, les interdictions de relations interdites." },
  { id: 30, name: "Kedoshim", hebrewName: "קְדֹשִׁים", book: "Vayikra", verses: 64, words: 868, letters: 3229, summary: "'Soyez saints' - les lois de sainteté, respect des parents, Shabbat, justice sociale, 'Tu aimeras ton prochain comme toi-même'." },
  { id: 31, name: "Emor", hebrewName: "אֱמֹר", book: "Vayikra", verses: 124, words: 1278, letters: 4810, summary: "Les lois spéciales pour les Cohanim, les fêtes juives, l'histoire du blasphémateur." },
  { id: 32, name: "Behar", hebrewName: "בְּהַר", book: "Vayikra", verses: 57, words: 740, letters: 2817, summary: "Les lois de la Chemita (année sabbatique), le Jubilé, les lois sur la vente de terres et d'esclaves hébreux." },
  { id: 33, name: "Bechukotai", hebrewName: "בְּחֻקֹּתַי", book: "Vayikra", verses: 78, words: 1013, letters: 3779, summary: "Les bénédictions et les malédictions, les conséquences de l'observance et de la désobéissance, les vœux et les consécrations." },

  // Bamidbar (Numbers)
  { id: 34, name: "Bamidbar", hebrewName: "בְּמִדְבַּר", book: "Bamidbar", verses: 159, words: 1823, letters: 7393, summary: "Le recensement des tribus, l'organisation du camp autour du Tabernacle, le rôle des Lévites." },
  { id: 35, name: "Naso", hebrewName: "נָשֹׂא", book: "Bamidbar", verses: 176, words: 2264, letters: 8632, summary: "Le recensement des Lévites, les lois de la Sota (femme soupçonnée d'adultère), le Nazir, la bénédiction sacerdotale, les offrandes des princes." },
  { id: 36, name: "Beha'alotcha", hebrewName: "בְּהַעֲלֹתְךָ", book: "Bamidbar", verses: 136, words: 1540, letters: 5929, summary: "L'allumage de la Menorah, la consécration des Lévites, Pessa'h Sheni, les trompettes d'argent, le départ du Sinaï, les plaintes du peuple." },
  { id: 37, name: "Shelach", hebrewName: "שְׁלַח־לְךָ", book: "Bamidbar", verses: 119, words: 1377, letters: 5820, summary: "L'envoi des explorateurs en Canaan, leur rapport négatif, la révolte du peuple, le décret des 40 ans dans le désert, les lois des Tsitsit." },
  { id: 38, name: "Korach", hebrewName: "קֹרַח", book: "Bamidbar", verses: 95, words: 1214, letters: 5325, summary: "La révolte de Kora'h contre Moïse et Aaron, la terre engloutit les rebelles, le bâton d'Aaron qui fleurit." },
  { id: 39, name: "Chukat", hebrewName: "חֻקַּת", book: "Bamidbar", verses: 87, words: 1105, letters: 4670, summary: "Les lois de la vache rousse, la mort de Myriam, Moïse frappe le rocher, la mort d'Aaron, le serpent d'airain." },
  { id: 40, name: "Balak", hebrewName: "בָּלָק", book: "Bamidbar", verses: 104, words: 1267, letters: 4889, summary: "Balak engage Balaam pour maudire Israël, l'ânesse qui parle, les bénédictions de Balaam transformées en bénédictions." },
  { id: 41, name: "Pinchas", hebrewName: "פִּינְחָס", book: "Bamidbar", verses: 168, words: 1887, letters: 7853, summary: "L'alliance de paix pour Pin'has, le nouveau recensement, les filles de Tselof'had, Josué désigné comme successeur de Moïse." },
  { id: 42, name: "Matot", hebrewName: "מַּטּוֹת", book: "Bamidbar", verses: 112, words: 1582, letters: 5972, summary: "Les lois des vœux, la guerre contre Midian, le partage du butin." },
  { id: 43, name: "Masei", hebrewName: "מַסְעֵי", book: "Bamidbar", verses: 132, words: 1748, letters: 6633, summary: "Les 42 étapes du voyage dans le désert, les frontières d'Israël, les villes des Lévites, les villes-refuges." },

  // Devarim (Deuteronomy)
  { id: 44, name: "Devarim", hebrewName: "דְּבָרִים", book: "Devarim", verses: 105, words: 1548, letters: 6047, summary: "Le discours de réprimande de Moïse, le rappel de l'histoire depuis le Sinaï, la nomination des juges." },
  { id: 45, name: "Va'etchanan", hebrewName: "וָאֶתְחַנַּן", book: "Devarim", verses: 122, words: 1878, letters: 7343, summary: "Moïse supplie d'entrer en Israël, la répétition des Dix Commandements, le Shema Israël, l'amour de D.ieu et de la Torah." },
  { id: 46, name: "Eikev", hebrewName: "עֵקֶב", book: "Devarim", verses: 111, words: 1747, letters: 6865, summary: "Les récompenses de l'observance, le rappel du veau d'or, la seconde ascension au Sinaï, 'Que demande de toi l'Éternel ?'." },
  { id: 47, name: "Re'eh", hebrewName: "רְאֵה", book: "Devarim", verses: 126, words: 1582, letters: 5856, summary: "'Vois, je mets devant vous bénédiction et malédiction', les fausses prophéties, les lois de cacherout, les dîmes, les fêtes." },
  { id: 48, name: "Shoftim", hebrewName: "שֹׁפְטִים", book: "Devarim", verses: 97, words: 1462, letters: 5538, summary: "Les juges et les tribunaux, les lois du roi, les villes-refuges, les lois de la guerre." },
  { id: 49, name: "Ki Teitzei", hebrewName: "כִּי־תֵצֵא", book: "Devarim", verses: 110, words: 1582, letters: 6136, summary: "74 des 613 commandements : lois de la guerre, du mariage, de la propriété, de la justice sociale, 'Souviens-toi d'Amalek'." },
  { id: 50, name: "Ki Tavo", hebrewName: "כִּי־תָבוֹא", book: "Devarim", verses: 122, words: 1747, letters: 6811, summary: "Les prémices, la déclaration de la dîme, les bénédictions et les malédictions sur le mont Ebal et Guerizim, la To'ha'ha (réprimande)." },
  { id: 51, name: "Nitzavim", hebrewName: "נִצָּבִים", book: "Devarim", verses: 40, words: 674, letters: 2632, summary: "Tous sont debout devant D.ieu, l'alliance éternelle, le repentir est toujours possible, 'Ce n'est pas au ciel'." },
  { id: 52, name: "Vayelech", hebrewName: "וַיֵּלֶךְ", book: "Devarim", verses: 30, words: 457, letters: 1748, summary: "Moïse à 120 ans, Josué prend la relève, l'écriture de la Torah, la mitzvah de Hak'hel." },
  { id: 53, name: "Ha'azinu", hebrewName: "הַאֲזִינוּ", book: "Devarim", verses: 52, words: 614, letters: 2326, summary: "Le cantique de Moïse, un témoignage éternel sur l'histoire d'Israël, Moïse doit monter sur le mont Nébo." },
  { id: 54, name: "V'Zot HaBerachah", hebrewName: "וְזֹאת הַבְּרָכָה", book: "Devarim", verses: 41, words: 510, letters: 1878, summary: "Les bénédictions finales de Moïse aux douze tribus, la mort de Moïse sur le mont Nébo, 'Il ne s'est plus levé de prophète comme Moïse'." }
];
