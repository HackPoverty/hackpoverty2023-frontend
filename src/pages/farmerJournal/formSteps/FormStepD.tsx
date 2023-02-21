import {
  IonContent,
  IonButton,
  IonPage,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";

export const FormStepD = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Step 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">
              Notes and concerns for admins or technicians
            </IonLabel>
            <IonInput type="text" />
          </IonItem>
        </IonList>
        <IonButton routerLink="step-3">Back</IonButton>
        <IonButton type="submit">Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};
