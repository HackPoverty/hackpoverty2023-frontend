import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonLabel,
  IonPage,
  IonButton,
  IonText,
} from "@ionic/react"

export const FarmerDashboard = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Farmer Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonText>
          <h2>Please complete your daily log</h2>
        </IonText>
        <IonButton routerLink="/farmer-journal" expand="block">
          <IonLabel>Complete Daily Log</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  )
}
