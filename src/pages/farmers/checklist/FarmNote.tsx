import { IonItem, IonLabel, IonList, IonTextarea } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { FarmRecord } from ".";

export const FarmNote = () => {
  const { register } = useFormContext<FarmRecord>();
  return <>
    <IonList>
      <IonItem>
        <IonLabel position="floating">Notes and concerns are admin or farmers</IonLabel>
        <IonTextarea {...register("note")} />
      </IonItem>
    </IonList>
  </>
};
