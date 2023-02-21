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

export const FormStepA = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Step 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Initial Stock</IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              Mortality (Number of Chicken Deaths)
            </IonLabel>
            <IonInput type="number" />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Mortality Prolapse</IonLabel>
            <IonInput type="number" />
          </IonItem>
        </IonList>
        <IonButton routerLink="step-2">Next</IonButton>
      </IonContent>
    </IonPage>
  );
};
