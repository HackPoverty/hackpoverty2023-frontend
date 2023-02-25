import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/react"


export const paymentDashboard = () => {
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Payment Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>Payment Dashboard</p>
        </IonContent>
      </IonPage>
    )
}