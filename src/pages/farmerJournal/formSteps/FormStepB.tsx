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

export const FormStepB = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Step 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Large Eggs Produced</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Medium Eggs Produced</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Small Eggs Produced</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Number of Damaged Eggs</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Lay Frequency</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Industry Standard</IonLabel>
            <IonInput type="number" />
          </IonItem>
        </IonList>
        <IonButton routerLink="step-1">Back</IonButton>
        <IonButton routerLink="step-3">Next</IonButton>
      </IonContent>
    </IonPage>
  );
};
