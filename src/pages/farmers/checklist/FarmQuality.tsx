import { RadioOptions } from "@/components/farmers/RadioOptions";
import { IonItem, IonLabel, IonList, IonTextarea } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router";
import { FarmRecord, QualityTypes } from ".";

export const FarmQuality = () => {
  const params = useParams<{ farmer_id: string }>();
  const { register } = useFormContext<FarmRecord>()
  return <>
    <IonList>
      <IonItem>
        <RadioOptions label="Light Quality" options={QualityTypes} name="quality.light" />
      </IonItem>
      <IonItem>
        <RadioOptions label="Feed Quality" options={QualityTypes} name="quality.feed" />
      </IonItem>
      <IonItem>
        <RadioOptions label="Water Quality" options={QualityTypes} name="quality.water" />
      </IonItem>
      <IonItem>
        <RadioOptions label="Bedding Quality" options={QualityTypes} name="quality.bedding" />
      </IonItem>
      <IonItem>
        <RadioOptions label="Ventilation Quality" options={QualityTypes} name="quality.ventilation" />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Note, comments, or concerns</IonLabel>
        <IonTextarea {...register("quality.note")} />
      </IonItem>
    </IonList>
  </>
};
