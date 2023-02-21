import { RadioOptions } from "@/components/technicians/RadioOptions";
import { RecordNavigation } from "@/components/technicians/RecordNavigation";
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router";

export const FarmerChecklistPage = () => {
  const params = useParams<{ farmer_id: string }>();
  return <IonPage>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Checklist</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
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
        <RecordNavigation nextLink={`/farmers/${params.farmer_id}/red_flag`} />
      </IonContent>
    </IonPage>
  </IonPage>
};
