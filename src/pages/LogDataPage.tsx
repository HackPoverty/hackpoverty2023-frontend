import {
  IonList,
  IonLabel,
  IonItem,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonInput,
  IonCheckbox,
} from "@ionic/react";

export const LogDataPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Chicken Name</IonLabel>
            <IonInput
              placeholder="Matthew"
              onIonChange={(e) => console.log(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonCheckbox
              slot="start"
              onIonChange={(e) => console.log(e.target.checked)}
            />
            <IonLabel>Request technician</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
