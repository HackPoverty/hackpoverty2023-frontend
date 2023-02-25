import { SingleChoice } from "@/components/farmers/SingleChoice";
import { IonInput, IonItem, IonLabel } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { PresenceOfDisease, TechnicianVisit } from "src/types/contentTypes";

export const FarmRedFlag = () => {
  const { register } = useFormContext<TechnicianVisit>();

  return <>
    <SingleChoice label="Presence of diseases" options={[...PresenceOfDisease]} name="fieldDisease"  />
    <IonItem fill="solid">
      <IonLabel position="floating" >Names of Diseases</IonLabel>
      <IonInput {...register("fieldDiseaseNames")} />
    </IonItem>
    <IonItem fill="solid">
      <IonLabel position="floating">Other possible diseases</IonLabel>
      <IonInput {...register("fieldOtherpossibledisease")} />
    </IonItem>
  </>
};
