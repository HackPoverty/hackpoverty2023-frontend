import { IonItem, IonLabel, IonText, IonTextarea } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { TechnicianVisit } from "src/types/contentTypes";

export const FarmNote = () => {
  const { register } = useFormContext<TechnicianVisit>();
  return <>
    <IonText color="medium">Notes and concerns are admin or farmers</IonText>
    <IonItem fill="outline">
      <IonTextarea {...register("fieldVisitComments")} autoGrow rows={5} />
    </IonItem>
  </>
};
