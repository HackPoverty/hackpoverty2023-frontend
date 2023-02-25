import { Selection } from "@/components/farmers/Selection";
import { IonText } from "@ionic/react";
import { Quality } from "src/types/contentTypes";

export const FarmQuality = () => {
  return <>
    <IonText color="medium">
      <p>Please rate the farm conditions</p>
      <p>(0 is lowest, 10 is highest)</p>
    </IonText>
    <Selection placeholder="Score" label="Light Sufficiency" name="fieldLightSufficiency" values={Quality} />
    <Selection placeholder="Score" label="Feed Quantity" name="fieldFeedQuantity" values={Quality} />
    <Selection placeholder="Score" label="Water Cleanliness" name="fieldWaterCleanliness" values={Quality} />
    <Selection placeholder="Score" label="Clean Bedding" name="fieldCleanBedding" values={Quality} />
    <Selection placeholder="Score" label="Ventilation" name="fieldVentillation" values={Quality} />
  </>
};
