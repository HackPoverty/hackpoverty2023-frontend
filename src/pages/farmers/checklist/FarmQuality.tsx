import { RadioOptions } from "@/components/technicians/RadioOptions";
import { IonItem, IonLabel, IonList, IonTextarea } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router";
import { FarmRecord } from ".";

export const FarmQuality = () => {
  const params = useParams<{ farmer_id: string }>();
  const {register} = useFormContext<FarmRecord>()
  return <>
    <IonList>
      <IonItem>
        <RadioOptions label="Light Quality" options={["good", "ok", "bad"]} />
      </IonItem>
      <IonItem>
        <RadioOptions label="Feed Quality" options={["good", "ok", "bad"]} />
      </IonItem>
      <IonItem>
        <RadioOptions label="Water Quality" options={["good", "ok", "bad"]} />
      </IonItem>
      <IonItem>
        <RadioOptions label="Bedding Quality" options={["good", "ok", "bad"]} />
      </IonItem>
      <IonItem>
        <RadioOptions label="Ventilation Quality" options={["good", "ok", "bad"]} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Note, comments, or concerns</IonLabel>
        <IonTextarea {...register("quality.note")} />
      </IonItem>
    </IonList>
  </>
};
