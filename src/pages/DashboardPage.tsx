import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
} from "@ionic/react";

export const DashboardPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          <IonListHeader>
            <IonLabel>Past Logs</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Dec 12, 2022</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Dec 15, 2022</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
