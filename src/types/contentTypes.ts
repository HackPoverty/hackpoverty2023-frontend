/**
 * Geoinformation for a Drupal Geofield
 */
export type GPSCoordinates = {
  value: string;
  geoType: string;

  /** The Latitude */
  lat: number;

  /** The Longitude */
  lon: number;

  left: number;
  top: number;
  right: number;
  bottom: number;
  geohash: string;
  latlon: string;
}

/** The possible values for the field_diease field */
export const PresenceOfDisease = ['Yes', 'No', 'Possible'] as const;

/** 
 *  The possible values to rank the farm conditions are from 0 to 10
 *  However, the record only stores 0, 5, or 10
 */

export const QUALITY_SCALES = [0, 5, 10] as const
export type Quality = (typeof QUALITY_SCALES)[number]
export const getQualityName = (score: Quality) => {
  if (score === 0) return "Bad"
  if (score === 5) return "Okay"
  return "Good"
}

/**
 * The values for possible diseases
 */
export const DISEASES = ["mareks", "newcastle", "bronchtitis", "laryngotracheitis", "fowl_pox", "fowl_chlorea"] as const
export type Disease = (typeof DISEASES)[number]
export const DISEASE_MAP = new Map<Disease, string>([
  ["mareks", "Marek's"],
  ["newcastle", "New Castle"],
  ["bronchtitis", "Bronchtitis"],
  ["laryngotracheitis", "Laryngotracheitis"],
  ["fowl_pox", "Fowl Pox"],
  ["fowl_chlorea", "Fowl Cholera"],
])


/**
 * The values for possible vaccines
 */
export const VACCINES = ["newcastle", "bronchtitis", "fowl_pox", "fowl_chlorea"] as const
export type Vaccine = (typeof VACCINES)[number]
export const VACCINE_MAP = new Map<Vaccine, string>([
  ["newcastle", "New Castle"],
  ["bronchtitis", "Bronchtitis"],
  ["fowl_pox", "Fowl Pox"],
  ["fowl_chlorea", "Fowl Cholera"],
])



/**
 * The `node--technician_visit` type
 */
export type TechnicianVisit = {
  fieldVisitComments: string | null;

  /** GPS coordinates of where the visit was taken */
  fieldGpsCoordinates: GPSCoordinates | null;

  /** The likelihood of the presence of a disease */
  fieldDisease: (typeof PresenceOfDisease)[number];

  /** Common disease names */
  fieldDiseaseNames: Disease[];

  /** An other field in case disease is not among common options */
  fieldOtherpossibledisease: string | null;


  /** Whether a vaccine was given or not */
  fieldVaccineGiven: boolean;

  /** Common vaccines that were administered */
  fieldVaccinations: Vaccine[];

  /** List the name of a vaccine that is not among the previous options */
  fieldOtherVaccine: string | null;


  /** Checklist field: how clean the bedding is */
  fieldCleanBedding: Quality;

  /** Checklist field: how good the feed is */
  fieldFeedQuantity: Quality;

  /** Checklist field: whether chickens are getting enough light */
  fieldLightSufficiency: Quality;

  /** Checklist field: whether the chicken pens are well ventilated */
  fieldVentillation: Quality;

  /** Checklist field: how clean the water is */
  fieldWaterCleanliness: Quality;

}

/**
 * The node--farmer_daily_journal type
 */
export type FarmerJournal = {
  /** The number of chickens that are alive */
  fieldClosingStock: number | null,

  /** The number of damaged eggs */
  fieldDamagedEggs: number | null,

  /** The percentage of eggs that are damaged */
  fieldDamagedEggsPercentage_: number | null,

  /** The total number of eggs produced */
  fieldEggsProduced: number | null,

  /** The number of large eggs */
  fieldLargeEggs: number | null,

  /** The number of medium eggs */
  fieldMediumEggs: number | null,

  /** The number of small eggs */
  fieldSmallEggs: number | null,

  /** The amoung of feed given to the birds (in "bags")
   * FIXME: this should be in kgs later on
   */
  fieldGivenFeed: number | null,
  fieldGramsPerBird: number | null,

  /** The industry standard of grams per bird. A relatively static variable */
  fieldGramPerBirdIndustrySta: number | null,

  fieldHoursOfLight: number | null,
  fieldInitialStock: number | null,
  fieldLayFrequency: number | null,
  fieldLayFrequencyIndustrySta: number | null,
  fieldMortality: number | null,
  fieldMortalityPercentage_: number | null,
  fieldMortalityProlapse_: number | null,
  fieldTotalMortality: number | null,
  fieldWeightOfBird: number | null
}

export type FarmerJournalNode = {
  
  title: string,
  
  // uid is already store in bearer token   
  // uid: {
  //   id: string,
  // },

} & FarmerJournal;