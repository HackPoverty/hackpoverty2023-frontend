import { RadioOptions } from "@/components/technicians/RadioOptions";
import { RecordNavigation } from "@/components/technicians/RecordNavigation";
import { IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonRadio, IonRadioGroup, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router-dom";

export const FarmerRedFlag = () => {
  const params = useParams<{farmer_id: string}>();

  return <IonPage>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Red Flags</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
      </IonContent>
      <RecordNavigation nextLink={`/farmers/${params.farmer_id}/vaccines`} />
    </IonPage>
  </IonPage>
};
