import { RecordNavigation } from "@/components/technicians/RecordNavigation";
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { useParams } from "react-router-dom";

export const FarmerNote = () => {
  const params = useParams<{ farmer_id: string }>();
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
            <IonLabel position="floating">Notes and concerns are admin or farmers</IonLabel>
            <IonTextarea />
          </IonItem>
        </IonList>
        <RecordNavigation nextLink={`/farmers/${params.farmer_id}/complete`} />
      </IonContent>
    </IonPage>
  </IonPage>
};
