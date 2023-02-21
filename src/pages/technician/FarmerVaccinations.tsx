import { RadioOptions } from "@/components/technicians/RadioOptions";
import { RecordNavigation } from "@/components/technicians/RecordNavigation";
import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router-dom";

export const FarmerVaccinations = () => {
  const params = useParams<{farmer_id: string}>();
  return <IonPage>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vaccinations</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <RadioOptions label="Were vaccine admisterred" options={["yes", "no"]} />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Type of vaccine admisterred</IonLabel>
            <IonInput />
          </IonItem>
        </IonList>
        <RecordNavigation nextLink={`/farmers/${params.farmer_id}/notes`} />
      </IonContent>
    </IonPage>
  </IonPage>
};
