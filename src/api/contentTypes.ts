import { Node } from './highLevelTypes';

export type GPSCoordinates = {
  value: string;
  geo_type: string;

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

export type PresenceOfDisease = ['Yes', 'No', 'Possible'];

export type DiseaseScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export type TechnicianVisit = Node & {
  field_comments: null,

  /** GPS coordinates of where the visit was taken */
  field_gps_coordinates: GPSCoordinates|null,

  /** The likelihood of the presence of a disease */
  field_disease: PresenceOfDisease[number],

  /** Common disease names */
  field_disease_names: string|null,

  /** An other field in case disease is not among common options */
  field_otherpossibledisease: string|null,


  /** Whether a vaccine was given or not */
  field_vaccine_given: boolean,

  /** Common vaccines that were administered */
  field_vaccinations: string[],

  /** List the name of a vaccine that is not among the previous options */
  field_other_vaccine: string|null,


  /** Checklist field: how clean the bedding is */
  field_clean_bedding: DiseaseScale[number],

  /** Checklist field: how good the feed is */
  field_feed_quantity: DiseaseScale[number],

  /** Checklist field: whether chickens are getting enough light */
  field_light_sufficiency: DiseaseScale[number],

  /** Checklist field: whether the chicken pens are well ventilated */
  field_ventillation: DiseaseScale[number],

  /** Checklist field: how clean the water is */
  field_water_cleanliness: DiseaseScale[number]
}