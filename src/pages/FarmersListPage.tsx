import {
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
} from "@ionic/react";

export const FarmersListPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Farmers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          <IonListHeader>
            <IonLabel>Pick Farmer</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Farmer A</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Farmer B</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
