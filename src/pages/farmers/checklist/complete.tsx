import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";
import "./complete.css";

export const FarmRecordComplete = () => {
  const history = useHistory();
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Complete</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="ion-padding complete-wrapper">
        <div className="complete-content">
          Record is complete today
        </div>
        <div>
          <IonButton expand="block" fill="clear" class="ion-text-uppercase">Contact admin or farmer</IonButton>
          <IonButton expand="block" class="ion-text-uppercase" onClick={() => history.go(-2)}>Done</IonButton>
        </div>
      </div>
    </IonContent>
  </IonPage>
};
