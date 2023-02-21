import { RadioOptions } from "@/components/technicians/RadioOptions";
import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router-dom";

export const FarmVaccinations = () => {
  const params = useParams<{ farmer_id: string }>();
  return <>
      <IonList>
        <IonItem>
          <RadioOptions label="Were vaccine admisterred" options={["yes", "no"]} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Type of vaccine admisterred</IonLabel>
          <IonInput />
        </IonItem>
      </IonList>
  </>
};
