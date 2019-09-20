class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.personnagesnf = [{
      id: 1,
      sexe: true,
      nom: "de Lom d'Arce",
      prenom: "Louis-Armand",
      pseudo: "Baron de Lahontan",
      naissance: 1666,
      deces: 1716,
      statut: ["officier", "auteur"],
      bioSom: [
        {
          action: "a voyagé",
          objet: ["en Nouvelle-France"]
        },
        {
          action: "a écrit",
          objet: ["Nouveaux voyages", "Mémoires de l’Amérique septentrionale", "Dialogues avec un Sauvage"],
        }
      ],
      debutnf: 1683,
      finnf: 1693
    },
    {
      id: 2,
      nom: "Nicolas",
      prenom: "Louis",
      pseudo: "MLNP",
      naissance: 1634,
      deces: 1700,
      statut: ["prêtre jésuite"],
      bioSom: [
        {
          action: "a voyagé",
          objet: ["en Nouvelle-France"]
        },
        {
          action: "a écrit",
          objet: ["grammaire algonquine"],
        },
        {
          action: "a rencontré",
          objet: ["Jeanne Mance"],
          idExt: 5
        }
      ],

      debutnf: 1664,
      finnf: 1675
    },
    {
      id: 3,
      nom: "Ouellet",
      prenom: "Réal",
      pseudo: null,
      naissance: 1935,
      deces: null,
      statut: ["professeur de littérature"],
      debutnf: false,
      finnf: false
    },
    {
      id: 4,
      nom: "Gagnon",
      prenom: "François-Marc",
      pseudo: null,
      naissance: 1992,
      deces: null,
      statut: ["historien"],
      debutnf: false,
      finnf: false
    },
    {
      id: 5,
      nom: "Mance",
      prenom: "Jeanne",
      pseudo: null,
      naissance: 1606,
      deces: 1673,
      statut: ["directrice de l'hôtel-Dieu de Montréal"],
      debutnf: 1641,
      finnf: 1673
    },
    {
      id: 6,
      nom: "Bernou",
      prenom: "Claude",
      pseudo: null,
      naissance: 1638,
      deces: 1716,
      statut: ["prêtre, spécialiste de la France outremer"],
      bioSom: [
        {
          action: "a travaillé",
          objet: ["au ministère de la Marine"]
        },
        {
          action: "a collectionné",
          objet: ["les livres"]
        },
        {
          action: "a voyagé",
          objet: ["à Rome"]
        }
      ],
      debutnf: false,
      finnf: false
    },
    {
      id: 7,
      nom: "Souart",
      prenom: "Gabriel",
      pseudo: null,
      naissance: 1610,
      deces: 1691,
      statut: ["prêtre, spécialiste de la France outremer"],
      bioSom: [
        {
          action: "fut",
          objet: ["Supérieur du Séminaire de St Sulpice de Montréal"]
        },
        {
          action: "fut",
          objet: ["premier prêtre de Villemarie"]
        },
        {
          action: "fut",
          objet: ["confesseur et supérieur des religieuses de l'Hôtel-Dieu de Montréal"]
        }
      ],
      debutnf: 1657,
      finnf: 1689
    }
    ];

    //tableau qui contient les personnages du presse-papier historique
    this.tabPerso = [];

    this.persoAjoute = function persoAjoute(x) {
      //ajoute le personnage dans le tableau du presse-papier historique
      this.tabPerso.push(x);
      //retire les espace du nom du perso reçu
      var ret = x.replace(/ /g, '');
      //vient sélectionner le span qui contient le bouton + avec l'id du personnage
      var elt = document.getElementById(ret);
      //retire l'affichage du bouton + du personnage pour éviter les doublons dans le tableau
      elt.style.display = "none";
    };

    this.calculDuree = function calculDuree(debut, fin) { return fin - debut };

  }
}

export default HomeCtrl;