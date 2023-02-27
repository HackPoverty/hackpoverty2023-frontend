import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonButton, IonLabel } from "@ionic/react"

export const RecordSale = () => {
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton/>
            </IonButtons>
            <IonTitle>Record Sale</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>Record Sale</p>
          <IonButton routerLink="/record-sale-staps" expand="block">
            <IonLabel>Go</IonLabel>
          </IonButton>
        </IonContent>
      </IonPage>
    )
}