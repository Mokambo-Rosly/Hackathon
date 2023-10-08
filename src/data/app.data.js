import "./types";
import Zdog from "zdog";
import SolarSystemFactory from "./solarsystem.factory";
import Etoile from "./etoile"
import Planete from "./MyData.json"
//
const { TAU } = Zdog;
const PLANET_DATA = [
  {
    name: "Host",
    value: "Sol",
  },
  {
    name: "Disovery Year",
    value: "2020",
  },
  {
    name: "Reference",
    value: "Shporer et al. 2020",
    link: true,
    href: "https://ui.adsabs.harvard.edu/abs/2020ApJ...890L...7S/abstract",
  },
  {
    name: "Disposition",
    value: "Confirmed Planet",
  },
  {
    name: "Orbital Period",
    value: "0.5182349",
  },
  {
    name: "Planet Radius",
    value: "1.193±0.074",
  },
  {
    name: "Transit Duration",
    value: "0.734",
  },
  {
    name: "Planet Mass",
    value: "2.09±0.56",
  },
  {
    name: "Inclination",
    value: "85.0",
  },
  {
    name: "Radial Velocity",
    value: "3.17±0.85",
  },
];
//
const SOLAR_SYSTEM = [
  {
    name: "sun",
    displayName: "Sol",
    diameter: 8,
    color: "#eb710b",
    orbitDiameter: 0,
    starLight: 1.2,
    starColor: "#eb710b66",
    type: "star",
  },
  {
    name: "mercury",
    id: 1,
    displayName: "Mercury",
    diameter: 1,
    color: "#ada8a5",
    orbitDiameter: 12,
    orbitPeriod: 88 / 2,
    orbitTilt: -TAU * 0.019,
    orbitNode: -TAU * 0.314,
    satelliteOf: "sun",
    type: "planet",
  },

  {
    name: "venus",
    id: 2,
    displayName: "Venus",
    diameter: 1.5,
    color: "#c18f17",
    orbitDiameter: 16,
    orbitPeriod: 225 / 3,
    orbitTilt: -TAU * 0.009,
    orbitNode: -TAU * 0.213,
    satelliteOf: "sun",
    type: "planet",
  },
  {
    name: "earth",
    id: 3,
    displayName: "Earth",
    diameter: 2,
    color: "#4f4cb0",
    orbitDiameter: 21,
    orbitPeriod: 365 / 4,
    satelliteOf: "sun",
    type: "planet",
  },
  {
    name: "mars",
    id: 4,
    displayName: "Mars",
    diameter: 1.25,
    color: "#bc420e",
    orbitDiameter: 26,
    orbitPeriod: 687 / 5,
    orbitTilt: -TAU * 0.005,
    orbitNode: -TAU * 0.138,
    satelliteOf: "sun",
    type: "planet",
  },
  {
    name: "jupiter",
    id: 5,
    displayName: "Jupiter",
    diameter: 4,
    color: "#ad7b5a",
    orbitDiameter: 40,
    orbitPeriod: 4333 / 7,
    orbitTilt: -TAU * 0.004,
    orbitNode: -TAU * 0.279,
    satelliteOf: "sun",
    type: "planet",
  },
  {
    name: "saturn",
    id: 6,
    displayName: "Saturn",
    diameter: 3,
    color: "#a37c33",
    orbitDiameter: 56,
    orbitPeriod: 10759 / 9,
    orbitTilt: -TAU * 0.007,
    orbitNode: -TAU * 0.316,
    satelliteOf: "sun",
    type: "planet",
  },
  {
    name: "uranus",
    id: 7,
    displayName: "Uranus",
    diameter: 2.75,
    color: "#5dacde",
    orbitDiameter: 72,
    orbitPeriod: 30689 / 13,
    orbitTilt: -TAU * 0.002,
    orbitNode: -TAU * 0.206,
    satelliteOf: "sun",
    type: "planet",
  },
  {
    name: "neptune",
    id: 8,
    displayName: "Neptune",
    diameter: 2.5,
    color: "#3d52b5",
    orbitDiameter: 88,
    orbitPeriod: 60182 / 17,
    orbitTilt: -TAU * 0.005,
    orbitNode: -TAU * 0.366,
    satelliteOf: "sun",
    type: "planet",
  },
  {
    name: "pluto",
    id: 9,
    displayName: "Pluto",
    diameter: 0.5,
    color: "#826e57",
    orbitDiameter: 106,
    orbitPeriod: 90560 / 25,
    orbitTilt: -TAU * 0.048,
    orbitNode: -TAU * 0.306,
    orbitTranslateZ: -5,
    satelliteOf: "sun",
    type: "planet",
  },
  {
    name: "moon",
    id: 10,
    displayName: "Moon",
    diameter: 0.5,
    color: "#d6d6d6",
    orbitDiameter: 3,
    orbitPeriod: 27 / 2,
    orbitTilt: -TAU * 0.065,
    orbitNode: -TAU * 0.347,
    satelliteOf: "earth",
    type: "moon",
  },
  {
    name: "io",
    id: 11,
    displayName: "Io",
    diameter: 0.5,
    color: "#eae565",
    orbitDiameter: 5,
    orbitPeriod: 1 * 20,
    orbitTilt: 0,
    satelliteOf: "jupiter",
    type: "moon",
  },
  {
    name: "europa",
    id: 12,
    displayName: "Europa",
    diameter: 0.5,
    color: "#9c7e5c",
    orbitDiameter: 6.5,
    orbitPeriod: 4 * 8,
    orbitTilt: -TAU * 0.001,
    satelliteOf: "jupiter",
    type: "moon",
  },
  {
    name: "ganymede",
    id: 13,
    displayName: "Ganymede",
    diameter: 0.75,
    color: "#a1907e",
    orbitDiameter: 8,
    orbitPeriod: 7 * 6,
    orbitTilt: -TAU * 0.001,
    satelliteOf: "jupiter",
    type: "moon",
  },
  {
    name: "callisto",
    id: 14,
    displayName: "Callisto",
    diameter: 0.5,
    color: "#4a4e4f",
    orbitDiameter: 10,
    orbitPeriod: 17 * 3,
    orbitTilt: -TAU * 0.01,
    satelliteOf: "jupiter",
    type: "moon",
  },
  {
    name: "ringSaturn",
    color: "#edc98566",
    orbitDiameter: 4,
    orbitTilt: -TAU * 0.05,
    satelliteOf: "saturn",
    ring: 4,
  },
];
/**
 * To simplify state transitions, I'm creating this "master" js file that will have all available states for the app.
  Components will reference AppData to get props and we'll need to manage this object as data gets loaded in.
 */
class AppDataImpl {
  constructor() {
    /**
     * NASA's API key
     * @type {string}
     */
    this.NASA_API_KEY = "buEpNbTXwpkoPmCnvOBpGbDZgr5x5JgdmPoD8sfQ";
    /**
     * A model for the main navigation
     * @type {MainNav}
     */
    this.nav = {
      main: [
        {
          title: "Accueil",
          key: "/",
        },
        {
          title: "Etoiles",
          key: "stars",
        },
        {
          title: "Exoplanètes",
          key: "planets",
        },
        // {
        //   title: "Image du jour",
        //   key: "apod",
        // },
        {
          title: "LysGan",
          key: "mon-exoplanete",
        },
        // {
        //   title: "Simulation",
        //   key: "simulation",
        // },
        {
          title: "FAQ",
          key: "question",
        },
        {
          title: "Quiz",
          key: "quiz",
        },
        // {
        //   title: "VR",
        //   key: "vr",
        // },
        
        {
          title: "A propos",
          key: "about",
        },
      ],
      dropdown: [
        {
          title: "Planète aléatoire",
          key: "random-planet",
          show: "always",
        },
      ],
     
    };
    /**
     * A model for the solar system
     */
    this.solarSystem = SOLAR_SYSTEM;
    /**
     * An array of stars
     * @type {Star[]}
     */
    this.stars = [];
    /**
     * An array of planets
     * @type {Planet[]}
     */
    this.exoplanets = [];
    /**
     * A boolean to express if the app is in a loading state
     * @type {boolean}
     */
    this.loading = true;
    /**
     * A list of fields with stellar properties.
     * These will be displayed in the table next to the star system.
     * @type {PlanetaryProperties[]}
     */
    this.stellarFields = [
      {
        id: "distanceFromEarth",
        label: "Distance de la Terre",
        description: "Distance de l'étoile par rapport à la Terre",
        link: "https://en.wikipedia.org/wiki/Stellar_parallax#:~:text=The%20approximate%20distance%20is%20simply,parsecs%20(4.24%20ly)%20distant.",
      },
      {
        id: "starType",
        label: "Type d'étoile",
        description: "Type d'étoile selon l'échelle XXX",
        link: "https://en.wikipedia.org/wiki/Stellar_classification",
      },
      {
        id: "constellation",
        label: "Constellation",
        description: "Constellation à laquelle cette étoile appartient",
        link: "https://en.wikipedia.org/wiki/Constellation",
      },
      {
        id: "disc_year",
        label: "Année de découverte",
        description: "L'année où l'étoile a été découverte",
        link: "https://en.wikipedia.org/wiki/History_of_astronomy",
      },
      {
        id: "sy_snum",
        label: "Nombre d'étoiles",
        description: "Nombre d'étoiles dans le système planétaire",
        link: "https://en.wikipedia.org/wiki/Star",
      },
      {
        id: "sy_pnum",
        label: "Nombre de planètes",
        description: "Nombre de planètes dans le système planétaire",
        link: "https://en.wikipedia.org/wiki/Planet",
      },
      {
        id: "sy_mnum",
        label: "Nombre de lunes",
        description: "Nombre de lunes dans le système planétaire",
        link: "https://en.wikipedia.org/wiki/Moon",
      },
      {
        id: "st_teff",
        label: "Température effective stellaire [K]",
        description: "Température de l'étoile telle que modélisée par un corps noir émettant la même quantité totale de rayonnement électromagnétique",
        link: "https://en.wikipedia.org/wiki/Stellar_classification",
      },
      {
        id: "st_rad",
        label: "Rayon stellaire [Rayon solaire]",
        description: "Longueur d'un segment de ligne du centre de l'étoile à sa surface, mesurée en unités de rayon du Soleil",
        link: "https://en.wikipedia.org/wiki/Solar_radius",
      },
      {
        id: "st_mass",
        label: "Masse stellaire [Masse solaire]",
        description: "Quantité de matière contenue dans l'étoile, mesurée en unités de masses du Soleil",
        link: "https://en.wikipedia.org/wiki/Stellar_mass",
      },
      {
        id: "rastr",
        label: "RA [sexagesimal]",
        description: "Ascension droite du système planétaire au format sexagésimal",
        link: "https://en.wikipedia.org/wiki/Right_ascension",
      },
      {
        id: "decstr",
        label: "Dec [sexagesimal]",
        description: "Déclinaison du système planétaire en notation sexagésimale",
        link: "https://en.wikipedia.org/wiki/Declination",
      },
      {
        id: "sy_dist",
        label: "Distance [pc]",
        description: "Distance du système planétaire en unités de parsecs",
        link: "https://pt.wikipedia.org/wiki/Parsec",
      },
      {
        id: "sy_plx",
        label: "Parallaxe [mas]",
        description: "Différence de la position angulaire d'une étoile telle que mesurée à deux positions opposées dans l'orbite de la Terre",
        link: "https://en.wikipedia.org/wiki/Stellar_parallax",
      },
      {
        id: "elat",
        label: "Latitude écliptique [deg]",
        description: "Latitude écliptique du système planétaire en unités de degrés décimaux",
        link: "https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#:~:text=Ecliptic%20latitude%20or%20celestial%20latitude,celestial%20latitude%20of%20%2B90%C2%B0.",
      },
      {
        id: "elon",
        label: "Longitude écliptique [deg]",
        description: "Longitude écliptique du système planétaire en unités de degrés décimaux",
        link: "https://en.wikipedia.org/wiki/Ecliptic_coordinate_system#:~:text=Ecliptic%20latitude%20or%20celestial%20latitude,celestial%20latitude%20of%20%2B90%C2%B0.",
      },
      {
        id: "glat",
        label: "Latitude galactique [deg]",
        description: "Latitude galactique du système planétaire en unités de degrés décimaux",
        link: "https://en.wikipedia.org/wiki/Galactic_coordinate_system",
      },
      {
        id: "glon",
        label: "Longitude galactique [deg]",
        description: "Longitude galactique du système planétaire en unités de degrés décimaux",
        link: "https://en.wikipedia.org/wiki/Galactic_coordinate_system",
      },
      {
        id: "sy_pmra",
        label: "Mouvement propre (RA) [mas/an]",
        description: "Changement angulaire en ascension droite au fil du temps tel qu'observé depuis le centre de masse du Système solaire",
        link: "https://en.wikipedia.org/wiki/Proper_motion",
      },
      {
        id: "sy_pmdec",
        label: "Mouvement propre (Dec) [mas/an]",
        description: "Changement angulaire en déclinaison au fil du temps tel qu'observé depuis le centre de masse du Système solaire",
        link: "https://en.wikipedia.org/wiki/Proper_motion",
      },
      {
        id: "sy_tmag",
        label: "Magnitude TESS",
        description: "Luminosité de l'étoile hôte telle que mesurée en utilisant la bande passante TESS, en unités de magnitudes",
        link: "https://en.wikipedia.org/wiki/Transiting_Exoplanet_Survey_Satellite",
      },
      {
        id: "sy_pm",
        label: "Mouvement propre total [mas/an]",
        description: "Changement angulaire total de position au fil du temps tel qu'observé depuis le centre de masse du Système solaire",
        link: "https://en.wikipedia.org/wiki/Proper_motion",
      },
      {
        id: "st_met",
        label: "Métallicité stellaire [dex]",
        description: "Mesure de la teneur en métaux de la photosphère de l'étoile par rapport à la teneur en hydrogène",
        link: "https://en.wikipedia.org/wiki/Stellar_metallicity",
      },
      {
        id: "st_metratio",
        label: "Rapport de métallicité stellaire",
        description: "Rapport pour la valeur de métallicité ([Fe/H] désigne l'abondance en fer, [M/H] fait référence à une teneur générale en métaux)",
        link: "https://en.wikipedia.org/wiki/Stellar_metallicity",
      },
      {
        id: "st_lum",
        label: "Luminosité stellaire [log10(Solaire)]",
        description: "Quantité d'énergie émise par une étoile par unité de temps, mesurée en unités de luminosités solaires",
        link: "https://en.wikipedia.org/wiki/Stellar_luminosity",
      },
      {
        id: "st_age",
        label: "Âge stellaire [Gyr]",
        description: "L'âge de l'étoile hôte",
        link: "https://en.wikipedia.org/wiki/Stellar_age_estimation",
      },
      {
        id: "st_dens",
        label: "Densité stellaire [g/cm3]",
        description: "Quantité de masse par unité de volume de l'étoile",
        link: "https://en.wikipedia.org/wiki/Stellar_density",
      },
      {
        id: "st_rotp",
        label: "Période de rotation stellaire [jours]",
        description: "Le temps nécessaire à l'étoile hôte de la planète pour effectuer une rotation complète, en supposant qu'elle est un corps solide",
        link: "https://en.wikipedia.org/wiki/Rotation_period",
      },
    ];
    ;
    /**
     * A list of fields with the planetary properties.
     * These will be displayed in the table next to the planet description.
     * @type {PlanetaryProperties[]}
     */
    this.planetFields = [
      {
        id: "pl_hostname",
        label: "Étoile hôte",
        description: "L'étoile qui héberge cette planète",
        link: "https://en.wikipedia.org/wiki/Planet-hosting_star",
      },
      {
        id: "planet_type",
        label: "Type de planète",
        description: "Une description du type de la planète",
        link: "https://en.wikipedia.org/wiki/List_of_planet_types",
      },
      {
        id: "plType",
        label: "Sous-type",
        description:
          "Une description des caractéristiques visuelles de la planète, selon la NASA.",
        link: "https://en.wikipedia.org/wiki/List_of_planet_types",
      },
      {
        id: "mass_display",
        label: "Masse",
        description: "Une représentation lisible par les humains de la masse de la planète",
        link: "https://en.wikipedia.org/wiki/Planetary_mass",
      },
      {
        id: "period_display",
        label: "Période",
        description: "Une représentation lisible par les humains de la période orbitale de la planète",
        link: "https://en.wikipedia.org/wiki/Orbital_period#:~:text=The%20orbital%20period%20(also%20revolution,other%20stars%2C%20or%20binary%20stars.",
      },
      {
        id: "disc_year",
        label: "Année de découverte",
        description: "L'année de la découverte de la planète",
        link: "https://en.wikipedia.org/wiki/Discoveries_of_exoplanets",
      },
      {
        id: "pl_discmethod",
        label: "Méthode de découverte",
        description: "Méthode de découverte de la planète",
        link: "https://en.wikipedia.org/wiki/Methods_of_detecting_exoplanets",
      },
      {
        id: "pl_facility",
        label: "Organisation",
        description: "L'organisation qui a découvert la planète",
        link: "https://exoplanets.psu.edu/category/facilities/",
      },
      {
        id: "pl_radj",
        label: "Rayon J",
        description: "Le rayon de la planète en unités de rayons de Jupiter",
        link: "https://en.wikipedia.org/wiki/Jupiter_radius",
      },
      {
        id: "pl_rade",
        label: "Rayon E",
        description: "Le rayon de la planète en unités de rayons terrestres",
        link: "https://en.wikipedia.org/wiki/Earth_radius",
      },
      {
        id: "pl_orbeccen",
        label: "Excentricité orbitale",
        description:
          "En astrodynamique, l'excentricité orbitale d'un objet astronomique est un paramètre sans dimension qui détermine dans quelle mesure son orbite autour d'un autre corps s'écarte d'un cercle parfait.",
        link: "https://en.wikipedia.org/wiki/Orbital_eccentricity#:~:text=The%20eccentricity%20of%20Earth's%20orbit,gravitational%20attractions%20among%20the%20planets.",
      },
    ];
    /**
     * A small map of star types and a link to an image representing them.
     * @type {{[type: string]: string}}
     */
    this.stellarImages = {
      M: "static/M.webp",
      K: "static/K.webp",
      L: "static/L.webp",
      G: "static/G.webp",
      F: "static/F.webp",
      A: "static/A.webp",
      B: "static/B.webp",
      O: "static/O.webp",
    };
  }
  getFormattedDate = (date) => {
    return date.toISOString().split("T")[0]
  };
  /**
   * Controls weather the app is loading data.
   * @param {boolean} value - the value to set loading to
   */
  setLoading = (value) => {
    this.loading = value;
  };
  /**
   * Returns a visual representation for a star based on the type.
   * @param {{'M', 'K', 'L', 'G', 'F', 'A', 'B', 'O'}} stellarClass - The class of the star as per the luminosity class.
   * @returns {string} - An url to an image of the star.
   */
  getStellarImage = (stellarClass) => {
    return stellarClass in this.stellarImages
      ? this.stellarImages[stellarClass]
      : null;
  };
  /**
   * Loads the main App Data.
   * It consists of two JSOn files that are loaded in parallel.
   * Since this function is async, you need to use await to wait for it to finish.
   */
  loadData = async () => {
    this.setLoading(true);
    if (this.exoplanets.length == 0) {
      console.time("loading_exos");
      const binary = Planete;
      this.exoplanets =  binary;
      console.timeEnd("loading_exos");
    }
    //
    if (this.stars.length == 0) {
      console.time("loading_stars");
      const binary = Etoile;
      this.stars = binary;
      console.timeEnd("loading_stars");
      //console.log("Stars Loaded: ", this.stars.length);
    }
    this.setLoading(false);
  };
  /**
   * Returns the astronomy picture of the day for the given date.
   * @returns {Object} - the APOD response object
   */
  loadAstronomyPictureOfTheDay = async (date) => {
    console.time("loading_apod");
    if(!date) {
      //set date to today's date in YYYY-MM-DD format
      date = new Date().toISOString().split("T")[0];
    }
    const binary = Etoile
    const apod =  binary;
    console.timeEnd("loading_apod");
    return apod;
  };
  /**
   * Returns a star based on its id.
   * @param {string} id - The id, or hostname of the star as it is commonly known in literature.
   * @returns {Star} - the star object with that ID
   */
  getStar = (id) => {
    //console.log("this.stars", this.stars.length, id);
    return this.stars.find((s) => {
      //console.log(s.id);
      return s.id === id;
    });
  };
  /**
   * Returns a planet based on its id.
   * @param {string} id - the id of the planet as it is commonly known in literature.
   * @returns {Planet} - the planet object with that ID.
   */
  findExoplanetById = (id) => {
    return this.exoplanets.find((e) => {
      return e.id === id;
    });
  };
  /**
   * Creates a Solar system based on a host star.
   * This method returns an array
   * @param {Star} star - The star host of the solar system
   * @returns {Array<StellarBody>} - An array of stellar bodies of the solar system
   */
  generateSolarSystem = (star) => {
    return SolarSystemFactory.generate(star, this.exoplanets);
  };
  static getInstance() {
    if (!this.instance) {
      this.instance = new AppDataImpl();
    }

    return this.instance;
  }
}
const AppData = AppDataImpl.getInstance();
export default AppData;
