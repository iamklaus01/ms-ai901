// Banque de questions : simulateur d'examen blanc
// Domaines : "concepts" (Identifier les concepts IA, modules 1-3) et "foundry" (à venir, module 7-8)
// Types : "single" (réponse unique), "multi" (choisir deux), "match" (mise en situation), "tf" (vrai/faux)

const QUESTIONS = [
  // ---------- SINGLE (réponse unique) ----------
  { id: "s1", domain: "concepts", type: "single",
    text: "Qu'est-ce que l'intelligence artificielle, au sens le plus large ?",
    options: ["Un logiciel qui remplace un humain dans toutes les tâches",
      "L'ensemble des techniques qui permettent à une machine de faire des tâches qui demandent normalement de l'intelligence",
      "Un robot capable de penser comme un humain", "Une base de données très large"],
    correct: 1,
    explanation: "Définition vue au module 1 : l'IA regroupe les techniques qui permettent à une machine de reconnaître, comprendre, décider, créer." },

  { id: "s2", domain: "concepts", type: "single",
    text: "Quelle affirmation décrit correctement la relation entre IA, machine learning et deep learning ?",
    options: ["Ce sont trois domaines indépendants", "Le deep learning contient le machine learning, qui contient l'IA",
      "L'IA contient le machine learning, qui contient le deep learning", "Le machine learning contient l'IA, qui contient le deep learning"],
    correct: 2,
    explanation: "C'est une poupée russe : l'IA est le plus grand ensemble, qui contient le machine learning, qui contient lui-même le deep learning." },

  { id: "s3", domain: "concepts", type: "single",
    text: "Qu'est-ce qui distingue le machine learning d'une approche par règles écrites à la main ?",
    options: ["Le machine learning est toujours plus rapide à exécuter",
      "Le machine learning apprend à partir d'exemples plutôt que de suivre des règles fixes",
      "Le machine learning ne nécessite aucune donnée", "Le machine learning fonctionne uniquement sur des images"],
    correct: 1,
    explanation: "Le machine learning apprend des régularités à partir d'exemples, au lieu de suivre des règles écrites à l'avance par un humain." },

  { id: "s4", domain: "concepts", type: "single",
    text: "Un agent IA se distingue d'un simple assistant conversationnel parce qu'il...",
    options: ["répond plus vite", "est relié à des outils et à un contexte, et peut agir, pas seulement répondre",
      "ne fait jamais d'erreur", "fonctionne sans connexion internet"],
    correct: 1,
    explanation: "Un agent va plus loin qu'un assistant : il peut chercher une information, remplir un document, enchaîner des étapes." },

  { id: "s5", domain: "concepts", type: "single",
    text: "Qu'est-ce que l'inférence, dans le cycle de vie d'un modèle d'IA ?",
    options: ["La phase où on collecte les données", "La phase où le modèle, une fois entraîné, répond à de nouveaux cas",
      "La phase où on corrige manuellement les erreurs du modèle", "La phase de conception de l'algorithme"],
    correct: 1,
    explanation: "Une IA apprend en trois temps : données, entraînement, puis inférence, le moment où le modèle est utilisé sur de nouveaux cas." },

  { id: "s6", domain: "concepts", type: "single",
    text: "Quel type d'apprentissage utilise des exemples dont la réponse est déjà connue ?",
    options: ["Apprentissage non supervisé", "Apprentissage par renforcement", "Apprentissage supervisé", "Deep learning"],
    correct: 2,
    explanation: "L'apprentissage supervisé part d'exemples dont on connaît déjà la réponse attendue." },

  { id: "s7", domain: "concepts", type: "single",
    text: "Dans quel type d'apprentissage la machine trouve-t-elle seule des regroupements, sans réponse donnée à l'avance ?",
    options: ["Supervisé", "Non supervisé", "Par renforcement", "Génératif"],
    correct: 1,
    explanation: "L'apprentissage non supervisé laisse la machine trouver seule des regroupements dans les données." },

  { id: "s8", domain: "concepts", type: "single",
    text: "L'apprentissage par renforcement fonctionne principalement par...",
    options: ["classification de données déjà étiquetées", "essais, erreurs et récompenses", "régression linéaire uniquement", "recherche documentaire"],
    correct: 1,
    explanation: "L'apprentissage par renforcement avance par essais, erreurs et récompenses." },

  { id: "s9", domain: "concepts", type: "single",
    text: "Qu'est-ce qu'un token, pour un grand modèle de langage ?",
    options: ["Une clé de sécurité pour se connecter", "Un petit morceau de texte que le modèle manipule",
      "Un type de donnée réservé aux images", "Une clé API"],
    correct: 1,
    explanation: "Le texte est découpé en tokens, de petits morceaux, avant d'être traité par le modèle." },

  { id: "s10", domain: "concepts", type: "single",
    text: "Comment un assistant comme ChatGPT ou Claude génère-t-il sa réponse ?",
    options: ["Il cherche la réponse exacte dans une base de données", "Il prédit, mot après mot, la suite la plus probable",
      "Il copie une réponse déjà écrite par un humain", "Il consulte systématiquement internet"],
    correct: 1,
    explanation: "Le modèle prédit le morceau de texte suivant le plus probable, encore et encore, sans aller chercher une vérité en base." },

  { id: "s11", domain: "concepts", type: "single",
    text: "Qu'est-ce qu'une hallucination, pour un modèle d'IA générative ?",
    options: ["Une panne du serveur", "Une réponse inventée mais formulée de façon crédible", "Un bug d'affichage", "Une réponse trop longue"],
    correct: 1,
    explanation: "Une hallucination est une réponse inventée mais présentée avec assurance, surtout sur des faits précis." },

  { id: "s12", domain: "concepts", type: "single",
    text: "Pourquoi un modèle peut-il se tromper avec assurance sur un fait précis ?",
    options: ["Parce qu'il vise la réponse la plus plausible, pas une vérité vérifiée", "Parce qu'il manque de mémoire vive",
      "Parce qu'il est mal configuré", "Parce qu'il manque de puissance de calcul"],
    correct: 0,
    explanation: "Le modèle compose une réponse plausible : il ne va pas chercher une vérité dans une base de données." },

  { id: "s13", domain: "concepts", type: "single",
    text: "Que désigne la fenêtre de contexte d'un modèle ?",
    options: ["La taille de l'écran utilisé", "La quantité de texte que le modèle garde en tête pendant l'échange",
      "Le nombre de langues comprises", "La vitesse de réponse"],
    correct: 1,
    explanation: "Le contexte est la quantité limitée de texte que le modèle garde en tête au cours d'un échange." },

  { id: "s14", domain: "concepts", type: "single",
    text: "Par défaut, un assistant IA grand public se souvient-il d'une conversation à l'autre ?",
    options: ["Oui, toujours", "Non, sauf fonctionnalité de mémoire activée explicitement", "Oui, mais seulement 24 heures",
      "Cela dépend uniquement de la longueur du texte"],
    correct: 1,
    explanation: "Par défaut, l'assistant ne se souvient pas d'une conversation à l'autre, sauf si une fonctionnalité de mémoire est activée." },

  { id: "s15", domain: "concepts", type: "single",
    text: "Quel principe d'IA responsable de Microsoft concerne le fait de traiter chacun équitablement, sans favoriser certains profils ?",
    options: ["Transparence", "Équité", "Inclusion", "Fiabilité et sécurité"],
    correct: 1,
    explanation: "L'équité vise à traiter chacun équitablement, sans favoriser certains profils ou certaines options." },

  { id: "s16", domain: "concepts", type: "single",
    text: "Quel principe concerne la protection des données et de la vie privée ?",
    options: ["Responsabilité", "Confidentialité et sécurité", "Fiabilité et sécurité", "Transparence"],
    correct: 1,
    explanation: "La confidentialité et la sécurité couvrent la protection des données et de la vie privée." },

  { id: "s17", domain: "concepts", type: "single",
    text: "Quel principe rappelle que ce sont les personnes, et non l'IA, qui restent responsables des décisions prises ?",
    options: ["Inclusion", "Transparence", "Responsabilité", "Équité"],
    correct: 2,
    explanation: "La responsabilité rappelle que ce sont les personnes qui restent responsables, pas l'IA." },

  { id: "s18", domain: "concepts", type: "single",
    text: "Quel principe implique de dire clairement quand un contenu a été produit par une IA ?",
    options: ["Transparence", "Fiabilité et sécurité", "Inclusion", "Confidentialité et sécurité"],
    correct: 0,
    explanation: "La transparence consiste à rester compréhensible, et à dire quand une IA a produit un contenu." },

  { id: "s19", domain: "concepts", type: "single",
    text: "Le biais d'un modèle d'IA vient principalement...",
    options: ["d'une erreur de calcul du processeur", "des données sur lesquelles il a été entraîné",
      "d'une mauvaise connexion internet", "du nombre de tokens utilisés"],
    correct: 1,
    explanation: "La machine reproduit les travers de ses données d'entraînement, ce qui peut favoriser certains profils ou certaines options." },

  { id: "s20", domain: "concepts", type: "single",
    text: "Que recommande la bonne pratique de confidentialité vue en formation, avant de coller un document dans un outil IA grand public ?",
    options: ["Rien de particulier", "L'anonymiser si nécessaire", "Toujours le chiffrer avec un mot de passe", "Le convertir en image"],
    correct: 1,
    explanation: "On anonymise un document avant de le confier à l'IA, par exemple en remplaçant les noms par des initiales." },

  { id: "s21", domain: "concepts", type: "single",
    text: "Un prompt, au sens strict, est...",
    options: ["le nom du modèle utilisé", "la consigne donnée à l'IA générative pour produire sa réponse",
      "une fonctionnalité payante", "un type de donnée d'entraînement"],
    correct: 1,
    explanation: "Le prompt est le texte qu'on écrit pour demander quelque chose à l'IA, à partir duquel elle produit sa réponse." },

  { id: "s22", domain: "concepts", type: "single",
    text: "Parmi les éléments suivants, lequel ne fait PAS partie des ingrédients classiques d'un bon prompt ?",
    options: ["Le rôle", "Le format", "Le mot de passe", "Les contraintes"],
    correct: 2,
    explanation: "Les ingrédients vus en formation sont le rôle, le contexte, la tâche, le format, les contraintes, les exemples. Pas de mot de passe." },

  { id: "s23", domain: "concepts", type: "single",
    text: "Le few-shot prompting consiste à...",
    options: ["poser plusieurs questions différentes d'affilée", "donner un ou plusieurs exemples de ce qu'on attend dans le prompt",
      "réduire le prompt au minimum de mots", "utiliser un modèle rapide plutôt que puissant"],
    correct: 1,
    explanation: "Sans exemple, on parle de zéro-shot ; avec un ou plusieurs exemples, de few-shot." },

  { id: "s24", domain: "concepts", type: "single",
    text: "Demander à un modèle de raisonner étape par étape est une technique qui...",
    options: ["ralentit toujours la réponse sans aucun bénéfice", "améliore généralement la qualité sur les tâches qui demandent du raisonnement",
      "n'a aucun effet démontré", "fonctionne uniquement en anglais"],
    correct: 1,
    explanation: "Le chain-of-thought prompting améliore nettement la qualité des réponses sur les tâches qui demandent de la logique (Wei et al., 2022)." },

  { id: "s25", domain: "concepts", type: "single",
    text: "Le prompt système, dans un assistant configuré (Projet Claude ou GPT), sert à...",
    options: ["définir une fois pour toutes le rôle et le comportement permanent de l'assistant",
      "accélérer uniquement la vitesse de réponse", "empêcher toute personnalisation ultérieure", "traduire automatiquement les réponses"],
    correct: 0,
    explanation: "Le prompt système fixe les règles générales une seule fois ; l'assistant les applique à chaque conversation." },

  { id: "s26", domain: "concepts", type: "single",
    text: "Pour choisir un outil IA face à un besoin donné, la formation recommande de partir en premier...",
    options: ["du prix le plus bas disponible", "de la tâche à réaliser", "du nombre d'utilisateurs de l'outil", "de la nouveauté du modèle"],
    correct: 1,
    explanation: "La bonne question est « quel outil pour quel besoin » : la tâche d'abord, puis l'écosystème, puis la sensibilité des données." },

  // ---------- MULTI (choisir deux) ----------
  { id: "m1", domain: "concepts", type: "multi",
    text: "Choisir les deux types de données qualitatives, en statistiques.",
    options: ["Continue", "Nominale", "Ordinale", "Discrète"], correct: [1, 2],
    explanation: "Nominale et ordinale sont qualitatives. Continue et discrète sont quantitatives." },

  { id: "m2", domain: "concepts", type: "multi",
    text: "Choisir les deux types de données considérées comme non structurées.",
    options: ["Une table avec colonnes et lignes", "Un e-mail", "Une vidéo", "Une base de données relationnelle"], correct: [1, 2],
    explanation: "Un e-mail et une vidéo sont des données non structurées. Les tables et bases relationnelles sont des données structurées." },

  { id: "m3", domain: "concepts", type: "multi",
    text: "Choisir les deux limites de l'IA générative évoquées en formation.",
    options: ["Les hallucinations", "Un prix systématiquement trop élevé", "Les biais", "L'impossibilité totale de générer du texte"], correct: [0, 2],
    explanation: "Les limites vues en formation sont les hallucinations, les biais, et la confidentialité des données." },

  { id: "m4", domain: "concepts", type: "multi",
    text: "Parmi les rôles techniques d'un prompt vus en formation, choisir les deux qui existent réellement.",
    options: ["Rôle système", "Rôle administrateur", "Rôle utilisateur", "Rôle invité"], correct: [0, 2],
    explanation: "Un prompt s'organise en trois rôles : système, utilisateur, assistant. Pas de rôle administrateur ni invité." },

  { id: "m5", domain: "concepts", type: "multi",
    text: "Choisir les deux façons d'apprendre qui ne nécessitent pas de réponse déjà connue à l'avance.",
    options: ["Apprentissage supervisé", "Apprentissage non supervisé", "Apprentissage par renforcement", "Deep learning"], correct: [1, 2],
    explanation: "Le non supervisé et le renforcement n'ont pas besoin d'une réponse connue à l'avance, contrairement au supervisé." },

  { id: "m6", domain: "concepts", type: "multi",
    text: "Choisir les deux principes qui font partie des six principes d'IA responsable de Microsoft.",
    options: ["Rentabilité", "Inclusion", "Rapidité", "Transparence"], correct: [1, 3],
    explanation: "Les six principes sont équité, fiabilité et sécurité, confidentialité et sécurité, inclusion, transparence, responsabilité." },

  { id: "m7", domain: "concepts", type: "multi",
    text: "Choisir les deux affirmations vraies sur la température d'un modèle génératif.",
    options: ["Une température basse donne des réponses plus stables et reproductibles",
      "Une température haute est recommandée pour l'extraction de données précises",
      "Une température haute favorise des réponses plus variées et créatives",
      "La température n'a aucun effet sur le texte produit"], correct: [0, 2],
    explanation: "Température basse : réponses stables et factuelles. Température haute : réponses variées, pour le brainstorming ou la création." },

  { id: "m8", domain: "concepts", type: "multi",
    text: "Choisir les deux bons réflexes de confidentialité recommandés en formation.",
    options: ["Séparer le compte professionnel du compte personnel", "Coller directement des données RH sensibles pour gagner du temps",
      "Anonymiser un document sensible avant de le confier à l'IA", "Partager son mot de passe avec l'assistant pour qu'il retienne le contexte"],
    correct: [0, 2],
    explanation: "On sépare les usages, et on anonymise les documents sensibles. On ne colle jamais de données vraiment sensibles telles quelles." },

  { id: "m9", domain: "concepts", type: "multi",
    text: "Choisir les deux critères pertinents pour choisir un outil IA selon la formation.",
    options: ["La tâche à réaliser", "La couleur de l'interface", "L'écosystème déjà utilisé (Microsoft, Google...)", "Le nombre de followers de l'éditeur"],
    correct: [0, 2],
    explanation: "Trois critères suffisent le plus souvent : la tâche, l'écosystème, et la sensibilité des données." },

  { id: "m10", domain: "concepts", type: "multi",
    text: "Choisir les deux mots qui, dans un nom de modèle, désignent généralement une version rapide et légère plutôt que puissante.",
    options: ["Opus", "Flash", "Haiku", "Ultra"], correct: [1, 2],
    explanation: "Flash et Haiku désignent des modèles rapides et légers. Opus et Ultra désignent des modèles puissants." },

  // ---------- MATCH (mise en situation) ----------
  { id: "match1", domain: "concepts", type: "match",
    text: "Une entreprise précise que ses visuels publicitaires ont été générés par IA.",
    options: ["Transparence", "Équité", "Confidentialité et sécurité", "Responsabilité", "Inclusion", "Fiabilité et sécurité"], correct: 0,
    explanation: "La transparence consiste à dire quand un contenu a été produit par une IA." },

  { id: "match2", domain: "concepts", type: "match",
    text: "Un système de recrutement assisté par IA est audité pour vérifier qu'il ne désavantage pas certains candidats selon leur origine.",
    options: ["Transparence", "Équité", "Confidentialité et sécurité", "Responsabilité", "Inclusion", "Fiabilité et sécurité"], correct: 1,
    explanation: "L'équité vise à ne pas favoriser ou désavantager certains profils." },

  { id: "match3", domain: "concepts", type: "match",
    text: "Une entreprise chiffre les données clients envoyées à son assistant IA et en limite l'accès.",
    options: ["Transparence", "Équité", "Confidentialité et sécurité", "Responsabilité", "Inclusion", "Fiabilité et sécurité"], correct: 2,
    explanation: "Protéger les données et limiter les accès relève de la confidentialité et de la sécurité." },

  { id: "match4", domain: "concepts", type: "match",
    text: "Un responsable rappelle que la décision finale d'accorder un prêt reste prise par une personne, malgré la recommandation de l'IA.",
    options: ["Transparence", "Équité", "Confidentialité et sécurité", "Responsabilité", "Inclusion", "Fiabilité et sécurité"], correct: 3,
    explanation: "La responsabilité rappelle que la décision finale reste humaine." },

  { id: "match5", domain: "concepts", type: "match",
    text: "Un service conçoit son assistant vocal pour qu'il fonctionne aussi avec des utilisateurs en situation de handicap.",
    options: ["Transparence", "Équité", "Confidentialité et sécurité", "Responsabilité", "Inclusion", "Fiabilité et sécurité"], correct: 4,
    explanation: "Servir tout le monde, sans exclure personne, relève de l'inclusion." },

  { id: "match6", domain: "concepts", type: "match",
    text: "Une équipe teste son modèle sur des cas rares avant de le déployer, pour éviter les pannes en conditions réelles.",
    options: ["Transparence", "Équité", "Confidentialité et sécurité", "Responsabilité", "Inclusion", "Fiabilité et sécurité"], correct: 5,
    explanation: "Fonctionner de façon sûre, même dans des cas imprévus, relève de la fiabilité et de la sécurité." },

  { id: "match7", domain: "concepts", type: "match",
    text: "Un système classe des milliers de mails sans qu'on lui ait dit à l'avance quels groupes chercher.",
    options: ["Apprentissage non supervisé", "Apprentissage supervisé", "Apprentissage par renforcement", "Few-shot prompting"], correct: 0,
    explanation: "La machine trouve seule des regroupements, sans réponse donnée à l'avance : c'est de l'apprentissage non supervisé." },

  { id: "match8", domain: "concepts", type: "match",
    text: "Un modèle est entraîné à reconnaître des chats à partir de milliers de photos déjà étiquetées.",
    options: ["Apprentissage non supervisé", "Apprentissage supervisé", "Apprentissage par renforcement", "Few-shot prompting"], correct: 1,
    explanation: "Des exemples dont on connaît déjà la réponse : c'est de l'apprentissage supervisé." },

  { id: "match9", domain: "concepts", type: "match",
    text: "Un programme apprend à jouer à un jeu vidéo en étant récompensé quand il gagne des points.",
    options: ["Apprentissage non supervisé", "Apprentissage supervisé", "Apprentissage par renforcement", "Few-shot prompting"], correct: 2,
    explanation: "Essais, erreurs et récompenses : c'est de l'apprentissage par renforcement." },

  { id: "match10", domain: "concepts", type: "match",
    text: "On donne à l'IA deux mails déjà rédigés avant de lui demander d'en écrire un troisième dans le même style.",
    options: ["Apprentissage non supervisé", "Apprentissage supervisé", "Apprentissage par renforcement", "Few-shot prompting"], correct: 3,
    explanation: "Donner des exemples dans le prompt, c'est du few-shot prompting." },

  // ---------- TRUE/FALSE (vrai ou faux) ----------
  { id: "tf1", domain: "concepts", type: "tf",
    text: "Le deep learning est une branche du machine learning.", correct: true,
    explanation: "L'IA contient le machine learning, qui contient le deep learning." },

  { id: "tf2", domain: "concepts", type: "tf",
    text: "Une IA générative recherche toujours la réponse la plus vraie possible dans une base de données.", correct: false,
    explanation: "Elle prédit le texte le plus plausible ; elle ne vérifie pas une vérité en base." },

  { id: "tf3", domain: "concepts", type: "tf",
    text: "Un prompt vague donne généralement une réponse plus précise qu'un prompt structuré.", correct: false,
    explanation: "C'est l'inverse : un prompt vague donne une réponse vague, un prompt précis donne une réponse utile." },

  { id: "tf4", domain: "concepts", type: "tf",
    text: "Le raisonnement étape par étape (chain-of-thought) peut améliorer la qualité des réponses sur des tâches complexes.", correct: true,
    explanation: "Cette technique améliore nettement la qualité sur les tâches qui demandent de la logique." },

  { id: "tf5", domain: "concepts", type: "tf",
    text: "Un assistant IA grand public garde par défaut la mémoire de toutes les conversations précédentes.", correct: false,
    explanation: "Par défaut, il ne se souvient pas d'une conversation à l'autre, sauf mémoire activée." },

  { id: "tf6", domain: "concepts", type: "tf",
    text: "Les six principes d'IA responsable de Microsoft incluent la transparence et l'inclusion.", correct: true,
    explanation: "Les six principes sont équité, fiabilité et sécurité, confidentialité et sécurité, inclusion, transparence, responsabilité." },

  { id: "tf7", domain: "concepts", type: "tf",
    text: "Le prompt engineering est une discipline de programmation, au même titre que le développement logiciel.", correct: false,
    explanation: "C'est une compétence de communication qui s'apprend par la pratique, pas de la programmation." },

  { id: "tf8", domain: "concepts", type: "tf",
    text: "Un modèle de la famille « rapide » (Flash, Haiku, Instant...) est généralement plus adapté aux tâches complexes qu'un modèle « puissant ».",
    correct: false,
    explanation: "C'est l'inverse : le modèle puissant est réservé aux tâches difficiles, le rapide au quotidien." },

  { id: "tf9", domain: "concepts", type: "tf",
    text: "Les données semi-structurées se situent entre les données structurées et non structurées.", correct: true,
    explanation: "Vu au module 1 : un peu au milieu des deux." },

  { id: "tf10", domain: "concepts", type: "tf",
    text: "La bonne pratique de confidentialité consiste à ne jamais coller de données sensibles dans un outil IA grand public sans précaution.",
    correct: true,
    explanation: "On anonymise, ou on évite, plutôt que de coller des données sensibles telles quelles." },

  // ==========================================================================
  // QUESTIONS ORIGINALES SUPPLÉMENTAIRES, mises en situation, style examen réel
  // Sous-thèmes du domaine 1 d'AI-901 non enseignés en cours (texte, voix,
  // vision, extraction), plus des scénarios plus poussés sur l'IA responsable
  // et le choix de modèle. Écrites pour la formation, aucune ne reproduit une
  // question existante ailleurs.
  // ==========================================================================

  // ---------- Analyse de texte ----------
  { id: "sc1", domain: "concepts", type: "single", topic: "Analyse de texte",
    text: "Une équipe support reçoit des milliers de tickets par semaine et veut que chaque ticket soit automatiquement associé aux noms de produits et d'entreprises qu'il mentionne, pour le router vers la bonne équipe. Quelle technique d'analyse de texte répond directement à ce besoin ?",
    options: ["La détection d'entités", "L'extraction de mots-clés", "Le résumé automatique", "L'analyse de sentiment"],
    correct: 0,
    explanation: "Repérer des noms précis (produits, entreprises, personnes) dans un texte est le rôle de la détection d'entités." },

  { id: "sc2", domain: "concepts", type: "single", topic: "Analyse de texte",
    text: "Un service marketing reçoit dix mille avis clients par mois et veut, sans les lire un par un, faire ressortir les thèmes qui reviennent le plus souvent. Quelle technique convient le mieux ?",
    options: ["L'extraction de mots-clés", "La détection d'entités", "La synthèse vocale", "La reconnaissance d'image"],
    correct: 0,
    explanation: "L'extraction de mots-clés fait ressortir les termes les plus représentatifs d'un texte, utile pour repérer des thèmes récurrents à grande échelle." },

  { id: "sc3", domain: "concepts", type: "single", topic: "Analyse de texte",
    text: "Une compagnie aérienne veut repérer automatiquement, parmi des milliers de messages sur les réseaux sociaux, ceux qui expriment de la colère ou de la frustration après un vol retardé, pour les traiter en priorité. Quelle technique d'analyse de texte utiliser ?",
    options: ["L'analyse de sentiment", "L'extraction de mots-clés", "La détection d'entités", "Le résumé automatique"],
    correct: 0,
    explanation: "L'analyse de sentiment évalue le ton, positif, négatif ou neutre, d'un texte." },

  { id: "sc4", domain: "concepts", type: "single", topic: "Analyse de texte",
    text: "Une équipe juridique reçoit des contrats de 200 pages et veut un court paragraphe qui capture l'essentiel, avant de décider si une lecture complète est nécessaire. Quelle technique répond à ce besoin ?",
    options: ["Le résumé automatique", "L'extraction de mots-clés", "La détection d'entités", "La classification d'image"],
    correct: 0,
    explanation: "Le résumé automatique condense un texte long en un texte plus court qui garde l'essentiel." },

  { id: "sc5", domain: "concepts", type: "multi", topic: "Analyse de texte",
    text: "Un système doit lire des mails clients et en tirer deux informations : l'humeur générale du client, et les noms de produits mentionnés. Choisir les deux techniques nécessaires.",
    options: ["Analyse de sentiment", "Résumé automatique", "Détection d'entités", "Extraction de mots-clés"],
    correct: [0, 2],
    explanation: "L'humeur du client relève de l'analyse de sentiment ; les noms de produits relèvent de la détection d'entités." },

  { id: "sc6", domain: "concepts", type: "tf", topic: "Analyse de texte",
    text: "L'extraction de mots-clés permet d'identifier le ton émotionnel d'un texte.",
    correct: false,
    explanation: "C'est l'analyse de sentiment qui évalue le ton émotionnel. L'extraction de mots-clés fait ressortir les termes les plus représentatifs, sans juger le ton." },

  // ---------- Voix ----------
  { id: "sp1", domain: "concepts", type: "single", topic: "Voix",
    text: "Une entreprise veut qu'un assistant vocal retranscrive en texte, en temps réel, ce qu'un client dit au téléphone. Quelle capacité utiliser ?",
    options: ["La reconnaissance vocale", "La synthèse vocale", "La détection d'entités", "La classification d'image"],
    correct: 0,
    explanation: "La reconnaissance vocale (speech-to-text) convertit la parole en texte." },

  { id: "sp2", domain: "concepts", type: "single", topic: "Voix",
    text: "Une application de navigation lit à voix haute les indications de trajet au conducteur. Quelle capacité est à l'œuvre ?",
    options: ["La synthèse vocale", "La reconnaissance vocale", "L'analyse de sentiment", "L'extraction de mots-clés"],
    correct: 0,
    explanation: "La synthèse vocale (text-to-speech) convertit du texte en parole." },

  { id: "sp3", domain: "concepts", type: "multi", topic: "Voix",
    text: "Un centre d'appels veut qu'un client puisse poser une question à voix haute et recevoir une réponse parlée en retour, sans jamais taper sur son téléphone. Choisir les deux capacités indispensables.",
    options: ["Reconnaissance vocale", "Synthèse vocale", "Extraction de mots-clés", "Classification d'image"],
    correct: [0, 1],
    explanation: "Il faut convertir la voix du client en texte (reconnaissance), puis la réponse en voix (synthèse)." },

  { id: "sp4", domain: "concepts", type: "tf", topic: "Voix",
    text: "La synthèse vocale convertit un enregistrement audio en texte écrit.",
    correct: false,
    explanation: "C'est l'inverse : la synthèse vocale convertit du texte en parole. La reconnaissance vocale convertit la parole en texte." },

  { id: "sp5", domain: "concepts", type: "single", topic: "Voix",
    text: "Un standard téléphonique automatisé doit comprendre une demande dite à l'oral, puis y répondre par une voix de synthèse, sans intervention humaine. Quel terme désigne l'ensemble de ces deux capacités combinées ?",
    options: ["Reconnaissance et synthèse vocale", "Extraction de mots-clés et résumé", "Détection d'entités et classification", "OCR et extraction d'information"],
    correct: 0,
    explanation: "Comprendre l'oral relève de la reconnaissance vocale ; répondre à l'oral relève de la synthèse vocale." },

  // ---------- Vision par ordinateur ----------
  { id: "vi1", domain: "concepts", type: "single", topic: "Vision",
    text: "Un site e-commerce veut qu'un système attribue automatiquement une seule étiquette à chaque photo envoyée par les vendeurs : « chaussures », « sac », ou « vêtement ». Quelle capacité utiliser ?",
    options: ["La classification d'image", "La détection d'objets", "La reconnaissance optique de caractères", "La génération d'image"],
    correct: 0,
    explanation: "La classification d'image attribue une étiquette globale à une image entière." },

  { id: "vi2", domain: "concepts", type: "single", topic: "Vision",
    text: "Un entrepôt installe une caméra au-dessus d'un tapis roulant pour repérer et entourer chaque colis visible sur une même photo, même quand il y en a plusieurs à la fois. Quelle capacité correspond à ce besoin ?",
    options: ["La détection d'objets", "La classification d'image", "La synthèse vocale", "L'analyse de sentiment"],
    correct: 0,
    explanation: "La détection d'objets localise plusieurs éléments à la fois dans une même image, contrairement à la classification qui donne une seule étiquette globale." },

  { id: "vi3", domain: "concepts", type: "single", topic: "Vision",
    text: "Un service comptable veut convertir des factures papier scannées en texte modifiable et cherchable. Quelle capacité utiliser ?",
    options: ["La reconnaissance optique de caractères (OCR)", "La classification d'image", "La détection d'objets", "L'extraction de mots-clés"],
    correct: 0,
    explanation: "L'OCR (optical character recognition) extrait le texte visible dans une image scannée." },

  { id: "vi4", domain: "concepts", type: "tf", topic: "Vision",
    text: "La classification d'image attribue une seule étiquette à une image entière, alors que la détection d'objets peut repérer plusieurs éléments et leur position dans une même image.",
    correct: true,
    explanation: "C'est la distinction clé entre les deux capacités." },

  { id: "vi5", domain: "concepts", type: "single", topic: "Vision",
    text: "Un outil génératif reçoit la consigne « un renard qui saute par-dessus un vélo rouge au coucher du soleil » et produit une image inédite correspondant à cette description. De quelle capacité s'agit-il ?",
    options: ["La génération d'image", "La classification d'image", "L'OCR", "La détection d'objets"],
    correct: 0,
    explanation: "La génération d'image crée une image nouvelle à partir d'une description en langage naturel." },

  { id: "vi6", domain: "concepts", type: "match", topic: "Vision",
    text: "Un contrôle qualité en usine doit vérifier, sur chaque photo de pièce produite, s'il y a un défaut visible ou non, une seule réponse par photo.",
    options: ["Classification d'image", "Détection d'objets", "OCR", "Génération d'image"], correct: 0,
    explanation: "Une seule étiquette (défaut / pas défaut) par image entière : c'est de la classification d'image." },

  // ---------- Extraction d'information ----------
  { id: "ex1", domain: "concepts", type: "single", topic: "Extraction d'information",
    text: "Un service RH reçoit des cartes d'identité scannées et veut en extraire automatiquement le nom, la date de naissance et le numéro, pour remplir une base de données. Quel type de capacité IA répond à ce besoin ?",
    options: ["L'extraction d'information", "La génération d'image", "L'analyse de sentiment", "La synthèse vocale"],
    correct: 0,
    explanation: "Extraire des champs structurés (nom, date, numéro) à partir d'un document, c'est de l'extraction d'information." },

  { id: "ex2", domain: "concepts", type: "single", topic: "Extraction d'information",
    text: "Une entreprise de logistique veut transformer des bons de livraison scannés en un tableau structuré (poids, destinataire, date), prêt à être importé dans son logiciel de gestion. Quelle capacité correspond le mieux à ce besoin ?",
    options: ["L'extraction d'information à partir de documents", "La classification d'image", "L'analyse de sentiment", "La reconnaissance vocale"],
    correct: 0,
    explanation: "Transformer un document scanné en champs structurés exploitables est le cœur de l'extraction d'information." },

  { id: "ex3", domain: "concepts", type: "tf", topic: "Extraction d'information",
    text: "L'extraction d'information ne fonctionne que sur des documents texte, jamais sur des images, de l'audio ou de la vidéo.",
    correct: false,
    explanation: "L'extraction d'information couvre aussi les images, l'audio et la vidéo, pas seulement le texte." },

  { id: "ex4", domain: "concepts", type: "single", topic: "Extraction d'information",
    text: "Une entreprise média veut, à partir d'un enregistrement vidéo de réunion, obtenir automatiquement une transcription horodatée en indiquant qui parle à chaque moment. De quel type de capacité relève ce besoin ?",
    options: ["L'extraction d'information à partir de vidéo", "La génération d'image", "La classification d'image", "Le résumé automatique de texte"],
    correct: 0,
    explanation: "Extraire une transcription structurée avec horodatage et locuteurs à partir d'une vidéo est un cas d'extraction d'information multimodale." },

  { id: "ex5", domain: "concepts", type: "single", topic: "Extraction d'information",
    text: "Parmi les scénarios suivants, lequel est un exemple d'extraction d'information ?",
    options: ["Récupérer automatiquement le montant total et la date d'une facture photographiée",
      "Générer une image à partir d'une description en texte", "Attribuer une étiquette « chat » ou « chien » à une photo",
      "Lire à voix haute un message reçu par mail"],
    correct: 0,
    explanation: "Récupérer des champs précis (montant, date) à partir d'un document photographié est un exemple typique d'extraction d'information." },

  // ---------- IA responsable, scénarios plus poussés ----------
  { id: "ra1", domain: "concepts", type: "single", topic: "IA responsable",
    text: "Une banque déploie un assistant IA pour aider ses conseillers à rédiger les explications envoyées aux clients dont le prêt est refusé. Un régulateur exige que la banque puisse expliquer clairement, en langage courant, pourquoi une demande précise a été refusée. Quel principe cette exigence met-elle avant tout à l'épreuve ?",
    options: ["La transparence", "L'inclusion", "La fiabilité et la sécurité", "L'équité"],
    correct: 0,
    explanation: "Pouvoir expliquer clairement une décision relève de la transparence." },

  { id: "ra2", domain: "concepts", type: "single", topic: "IA responsable",
    text: "Un outil de recrutement assisté par IA se révèle, après coup, défavoriser systématiquement les candidats issus d'une université associée à un groupe minoritaire, alors que cette information n'a jamais été donnée explicitement au modèle. Quel principe est le plus directement en cause ?",
    options: ["L'équité", "La confidentialité et la sécurité", "La transparence", "La responsabilité"],
    correct: 0,
    explanation: "Un désavantage systématique pour un groupe, même via une donnée indirecte (proxy), relève d'un problème d'équité." },

  { id: "ra3", domain: "concepts", type: "multi", topic: "IA responsable",
    text: "Une entreprise lance un chatbot client sans jamais l'avoir testé avec des fautes de frappe, de l'argot, ou une langue régionale. Au lancement, le chatbot échoue systématiquement face aux utilisateurs qui écrivent dans ce registre. Choisir les deux principes les plus directement concernés.",
    options: ["Fiabilité et sécurité", "Confidentialité et sécurité", "Inclusion", "Transparence"],
    correct: [0, 2],
    explanation: "Un système qui échoue en conditions réelles imprévues pose un problème de fiabilité ; exclure une partie des utilisateurs pose un problème d'inclusion." },

  { id: "ra4", domain: "concepts", type: "tf", topic: "IA responsable",
    text: "Selon les principes d'IA responsable de Microsoft, une fois un modèle correctement déployé, la responsabilité de ses décisions passe de l'organisation au système d'IA lui-même.",
    correct: false,
    explanation: "Le principe de responsabilité rappelle explicitement que ce sont les personnes qui restent responsables, jamais l'IA elle-même, quel que soit le niveau de déploiement." },

  // ---------- Choix et configuration de modèle ----------
  { id: "cf1", domain: "concepts", type: "single", topic: "Choix de modèle",
    text: "Un service support veut une fonctionnalité IA qui répond instantanément à des questions fréquentes simples, pour des milliers d'utilisateurs par jour, au coût le plus bas possible, sans besoin de raisonnement complexe. Quelle famille de modèle est la plus adaptée ?",
    options: ["Un modèle rapide et léger", "Un modèle puissant et coûteux", "Un modèle uniquement génératif d'image", "Un modèle de reconnaissance vocale"],
    correct: 0,
    explanation: "Pour un usage simple, à fort volume et à faible coût, un modèle rapide et léger est le choix adapté." },

  { id: "cf2", domain: "concepts", type: "single", topic: "Choix de modèle",
    text: "Un outil de recherche juridique doit analyser des contrats longs et nuancés pour produire une évaluation de risque argumentée. La vitesse compte moins que la profondeur de l'analyse. Quel type de modèle privilégier ?",
    options: ["Un modèle puissant, orienté raisonnement", "Un modèle rapide et léger", "Un modèle de synthèse vocale uniquement", "Le modèle le moins cher disponible"],
    correct: 0,
    explanation: "Quand la profondeur de raisonnement prime sur la vitesse, un modèle puissant est le choix adapté, même s'il coûte plus cher et répond plus lentement." },

  { id: "cf3", domain: "concepts", type: "tf", topic: "Choix de modèle",
    text: "Augmenter la température d'un modèle génératif rend ses réponses plus déterministes et plus reproductibles.",
    correct: false,
    explanation: "C'est l'inverse : une température plus haute rend les réponses plus variées, donc moins reproductibles. Une température basse donne des réponses stables." },

  { id: "cf4", domain: "concepts", type: "single", topic: "Choix de modèle",
    text: "Une équipe veut qu'un modèle génératif produise des résumés de clauses juridiques strictement factuels, sans reformulation créative ni variation d'un essai à l'autre. Quel réglage de température choisir ?",
    options: ["Une température basse", "Une température haute", "La température n'a aucune influence ici", "Un réglage aléatoire à chaque fois"],
    correct: 0,
    explanation: "Une température basse favorise des réponses stables et factuelles, adaptées à un résumé fidèle sans créativité." },

  // ==========================================================================
  // PYTHON, module 6 : lire un code, prédire sa sortie, trouver un bug
  // ==========================================================================
  { id: "py1", domain: "python", type: "single", topic: "Lecture de code",
    code: ['prix = 25000', 'remise = 10', 'prix_final = prix - (prix * remise / 100)', 'print(prix_final)'],
    text: "Qu'affiche ce programme ?",
    options: ["22500.0", "2500", "25000", "Une erreur"], correct: 0,
    explanation: "10 % de 25000 vaut 2500. 25000 moins 2500 donne 22500.0 (un nombre à virgule, car la division produit un float)." },

  { id: "py2", domain: "python", type: "single", topic: "Lecture de code",
    code: ['fruits = ["mangue", "ananas", "papaye"]', 'fruits.append("banane")', 'for f in fruits:', '    print(f[0])'],
    text: "Qu'affiche ce programme ?",
    options: ["m, a, p, b (une lettre par ligne)", "mangue, ananas, papaye, banane", "m, a, p (banane est ignorée)", "Une erreur, car f[0] n'existe pas"],
    correct: 0,
    explanation: "f[0] prend le premier caractère de chaque élément de la liste, y compris banane, ajoutée avant la boucle." },

  { id: "py3", domain: "python", type: "single", topic: "Lecture de code",
    code: ['stock = {"riz": 12, "sucre": 0}', 'if stock["sucre"] > 0:', '    print("disponible")', 'else:', '    print("rupture")'],
    text: "Qu'affiche ce programme ?",
    options: ["rupture", "disponible", "0", "Une erreur"], correct: 0,
    explanation: "stock[\"sucre\"] vaut 0, donc la condition stock[\"sucre\"] > 0 est fausse : c'est la branche else qui s'exécute." },

  { id: "py4", domain: "python", type: "single", topic: "Lecture de code",
    code: ['def double(x):', '    return x * 2', '', 'resultat = double(7) + double(3)', 'print(resultat)'],
    text: "Qu'affiche ce programme ?",
    options: ["20", "10", "23", "Une erreur"], correct: 0,
    explanation: "double(7) vaut 14, double(3) vaut 6. 14 plus 6 égale 20." },

  { id: "py5", domain: "python", type: "single", topic: "Trouver le bug",
    code: ['notes = [12, 15, 9, 18]', 'total = 0', 'for n in notes:', '    total = n', 'print(total)'],
    text: "Ce code est censé afficher la somme des notes. Qu'affiche-t-il réellement, et pourquoi ?",
    options: ["18, parce que total = n remplace la valeur à chaque tour au lieu de l'additionner",
      "54, la somme correcte des quatre notes", "0, parce que total n'est jamais modifié", "Une erreur d'exécution"],
    correct: 0,
    explanation: "total = n écrase la valeur précédente à chaque tour de boucle. À la fin, total ne contient que la dernière valeur de la liste, 18, pas la somme." },

  { id: "py6", domain: "python", type: "single", topic: "Trouver le bug",
    code: ['villes = ["Cotonou", "Porto-Novo", "Parakou"]', 'for ville in villes:', '    derniere = ville', 'print(derniere)'],
    text: "Ce code est censé afficher chaque ville, une par une. Quel est le problème ?",
    options: ["print(derniere) est en dehors de la boucle : il ne s'exécute qu'une seule fois, à la fin",
      "La liste villes contient une erreur de syntaxe", "La variable derniere n'existe pas", "La boucle ne s'exécute jamais"],
    correct: 0,
    explanation: "print(derniere) n'est pas indenté sous le for : il s'exécute une seule fois après la boucle, et n'affiche donc que la dernière ville." },

  { id: "py7", domain: "python", type: "single", topic: "Trouver le bug",
    code: ['commande = {"produit": "Chaise", "quantite": 4}', 'print(commande["prix"])'],
    text: "Que se passe-t-il à l'exécution de ce code ?",
    options: ["Le programme s'arrête avec une erreur, car la clé prix n'existe pas dans le dictionnaire",
      "Le programme affiche None", "Le programme affiche 0", "Le programme affiche Chaise"],
    correct: 0,
    explanation: "Accéder à une clé absente d'un dictionnaire avec des crochets provoque une erreur (KeyError), contrairement à get() qui renverrait None." },

  { id: "py8", domain: "python", type: "single", topic: "Lecture de code",
    code: ['taches = ["Réserver", "Confirmer", "Annuler"]', 'taches.remove("Confirmer")', 'print(len(taches))'],
    text: "Qu'affiche ce programme ?",
    options: ["2", "3", "1", "Une erreur"], correct: 0,
    explanation: "remove() retire un élément précis de la liste. Il en reste deux sur les trois initiaux." },

  { id: "py9", domain: "python", type: "tf", topic: "Lecture de code",
    code: ['statut = "en cours"', 'print(statut == "fait")'],
    text: "Ce code affiche True.",
    correct: false,
    explanation: "statut vaut \"en cours\", pas \"fait\". La comparaison est fausse, le code affiche False." },

  { id: "py10", domain: "python", type: "single", topic: "Lecture de code",
    code: ['def stats(valeurs):', '    return min(valeurs), max(valeurs)', '', 'petit, grand = stats([4, 9, 2, 7])', 'print(grand - petit)'],
    text: "Qu'affiche ce programme ?",
    options: ["7", "9", "2", "Une erreur"], correct: 0,
    explanation: "min([4,9,2,7]) vaut 2, max vaut 9. La fonction renvoie les deux valeurs, réparties dans petit et grand. 9 moins 2 égale 7." },

  { id: "py11", domain: "python", type: "single", topic: "Trouver le bug",
    code: ['budget = 8000000', 'plafond = 8000000', 'if budget > plafond:', '    print("dépassé")', 'else:', '    print("respecté")'],
    text: "Ce code doit signaler un dépassement dès que le budget atteint le plafond, pas seulement s'il le dépasse strictement. Pourquoi ce cas précis (budget égal au plafond) échappe-t-il au message « dépassé » ?",
    options: ["Parce que > exclut l'égalité : il faudrait >= pour couvrir aussi le cas où budget est exactement égal à plafond",
      "Parce que budget et plafond ne peuvent jamais être égaux en Python", "Parce que la condition est mal orthographiée",
      "Il n'y a en réalité aucun problème avec ce code"],
    correct: 0,
    explanation: "> ne couvre pas l'égalité. Pour inclure le cas où budget est exactement égal à plafond, il faut >= à la place de >." },

  { id: "py12", domain: "python", type: "single", topic: "Lecture de code",
    code: ['invites = [', '    {"nom": "Awa", "reponse": "oui"},', '    {"nom": "Ben", "reponse": "non"},', '    {"nom": "Coumba", "reponse": "oui"},', ']',
      'compte = 0', 'for i in invites:', '    if i["reponse"] == "oui":', '        compte = compte + 1', 'print(compte)'],
    text: "Qu'affiche ce programme ?",
    options: ["2", "3", "1", "0"], correct: 0,
    explanation: "Deux invités sur trois ont répondu oui, Awa et Coumba. compte vaut donc 2 à la fin de la boucle." },
];

// Pour ajouter les questions Foundry plus tard : même structure, domain: "foundry"
