import { SingleChoice } from "@/components/farmers/SingleChoice";

export const FarmQuality = () => {
  const options = [0, 5, 10]
  const displayFn = (value: number) => {
    if (value == 0) return "Bad"
    if (value == 5) return "Okay"
    return "Good"
  }

  return <>
    <SingleChoice label="Light Sufficiency" name="fieldLightSufficiency" options={options} displayFn={displayFn} />
    <SingleChoice label="Feed Quantity" name="fieldFeedQuantity" options={options} displayFn={displayFn} />
    <SingleChoice label="Water Cleanliness" name="fieldWaterCleanliness" options={options} displayFn={displayFn} />
    <SingleChoice label="Clean Bedding" name="fieldCleanBedding" options={options} displayFn={displayFn} />
    <SingleChoice label="Ventilation" name="fieldVentillation" options={options} displayFn={displayFn} />
  </>
};
