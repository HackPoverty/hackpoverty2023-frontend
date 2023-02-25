import { SingleChoice } from "@/components/farmers/SingleChoice";
import { getQualityName, QUALITY_SCALES } from "src/types/contentTypes";

export const FarmQuality = () => {
  const options = [...QUALITY_SCALES]
  return <>
    <SingleChoice label="Light Sufficiency" name="fieldLightSufficiency" options={options} displayFn={getQualityName} />
    <SingleChoice label="Feed Quantity" name="fieldFeedQuantity" options={options} displayFn={getQualityName} />
    <SingleChoice label="Water Cleanliness" name="fieldWaterCleanliness" options={options} displayFn={getQualityName} />
    <SingleChoice label="Clean Bedding" name="fieldCleanBedding" options={options} displayFn={getQualityName} />
    <SingleChoice label="Ventilation" name="fieldVentillation" options={options} displayFn={getQualityName} />
  </>
};
