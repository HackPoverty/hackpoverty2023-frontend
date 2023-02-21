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

export const FormStepC = () => {
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
            <IonLabel position="stacked">Total Feed Given</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Industry Standard</IonLabel>
            <IonInput type="number" />
          </IonItem>
        </IonList>
        <IonButton routerLink="step-2">Back</IonButton>
        <IonButton routerLink="step-4">Next</IonButton>
      </IonContent>
    </IonPage>
  );
};
