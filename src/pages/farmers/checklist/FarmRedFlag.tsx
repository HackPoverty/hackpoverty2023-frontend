import { RadioOptions } from "@/components/farmers/RadioOptions";
import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { DiseaseSigns, FarmRecord } from ".";

export const FarmRedFlag = () => {
  const { register } = useFormContext<FarmRecord>();

  return <>
    <IonList>
      <IonItem>
        <RadioOptions label="Sign of Disease" options={DiseaseSigns} name="redFlag.signOfDisease" />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Name of Disease</IonLabel>
        <IonInput {...register("redFlag.name")} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Indication</IonLabel>
        <IonInput {...register("redFlag.indication")} />
      </IonItem>
    </IonList>
  </>
};
