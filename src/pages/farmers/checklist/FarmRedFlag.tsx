import { IonInput, IonItem, IonLabel } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { PresenceOfDisease, TechnicianVisit } from "src/types/contentTypes";
import { Selection } from "@/components/farmers/Selection";

export const FarmRedFlag = () => {
  const { register } = useFormContext<TechnicianVisit>();

  return <>
    <Selection label="Presence of diseases" values={PresenceOfDisease} name="fieldDisease" placeholder=""  />
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
