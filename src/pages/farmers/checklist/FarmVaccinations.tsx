import { RadioOptions } from "@/components/farmers/RadioOptions";
import { IonCheckbox, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { FarmRecord } from ".";

export const FarmVaccinations = () => {
  const {register} = useFormContext<FarmRecord>()
  return <>
    <IonList>
      <IonItem>
        <IonLabel>Were vaccines admisterred?</IonLabel>
        <IonCheckbox {...register("vaccination.admisterred")} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Type of vaccine admisterred</IonLabel>
        <IonInput {...register("vaccination.type")} />
      </IonItem>
    </IonList>
  </>
};
