import { RadioOptions } from "@/components/technicians/RadioOptions";
import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { useParams } from "react-router-dom";

export const FarmRedFlag = () => {
  const params = useParams<{ farmer_id: string }>();

  return <>
    <IonList>
      <IonItem>
        <RadioOptions label="Sign of Disease" options={["present", "absent", "not sure"]} />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Name of Disease</IonLabel>
        <IonInput />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Indication</IonLabel>
        <IonInput />
      </IonItem>
    </IonList>
  </>
};
