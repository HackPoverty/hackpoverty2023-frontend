import { RadioOptions } from "@/components/technicians/RadioOptions";
import { IonItem, IonLabel, IonList, IonTextarea } from "@ionic/react";
import { useParams } from "react-router";

export const FarmQuality = () => {
  const params = useParams<{ farmer_id: string }>();
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
        <IonTextarea />
      </IonItem>
    </IonList>
  </>
};
