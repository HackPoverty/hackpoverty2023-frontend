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

/** The possible values for the scale fields */
export const Quality = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

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
  fieldDiseaseNames: string | null;

  /** An other field in case disease is not among common options */
  fieldOtherpossibledisease: string | null;


  /** Whether a vaccine was given or not */
  fieldVaccineGiven: boolean;

  /** Common vaccines that were administered */
  fieldVaccinations: string[];

  /** List the name of a vaccine that is not among the previous options */
  fieldOtherVaccine: string | null;


  /** Checklist field: how clean the bedding is */
  fieldCleanBedding: (typeof Quality)[number];

  /** Checklist field: how good the feed is */
  fieldFeedQuantity: (typeof Quality)[number];

  /** Checklist field: whether chickens are getting enough light */
  fieldLightSufficiency: (typeof Quality)[number];

  /** Checklist field: whether the chicken pens are well ventilated */
  fieldVentillation: (typeof Quality)[number];

  /** Checklist field: how clean the water is */
  fieldWaterCleanliness: (typeof Quality)[number];

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