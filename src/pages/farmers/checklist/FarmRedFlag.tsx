import { RadioOptions } from "@/components/technicians/RadioOptions";
import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router-dom";
import { FarmRecord } from ".";

export const FarmRedFlag = () => {
  const params = useParams<{ farmer_id: string }>();
  const { register } = useFormContext<FarmRecord>();

  return <>
    <IonList>
      <IonItem>
        <RadioOptions label="Sign of Disease" options={["present", "absent", "not sure"]} />
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
