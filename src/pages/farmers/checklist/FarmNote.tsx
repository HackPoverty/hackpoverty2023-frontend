import { IonItem, IonLabel, IonTextarea } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { TechnicianVisit } from "src/types/contentTypes";

export const FarmNote = () => {
  const { register } = useFormContext<TechnicianVisit>();
  return <IonItem fill="solid">
    <IonLabel position="stacked">Comments for farmers or admin</IonLabel>
    <IonTextarea {...register("fieldVisitComments")} autoGrow rows={5} />
  </IonItem>
};
