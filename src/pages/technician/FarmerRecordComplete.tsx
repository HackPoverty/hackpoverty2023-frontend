import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";

export const FarmerRecordComplete = () => {
  return <IonPage>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Complete</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem>
          Record is complete today
        </IonItem>
        <IonItem>
          <IonButton>Contact admin or technicians</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  </IonPage>
};
