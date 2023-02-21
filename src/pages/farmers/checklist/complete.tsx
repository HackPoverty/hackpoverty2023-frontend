import { IonButton, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";

export const FarmRecordComplete = () => {
  const history = useHistory();
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Complete</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonItem>
      Record is complete today
    </IonItem>
    <IonItem>
      <IonButton>Contact admin or farmer</IonButton>
      <IonButton onClick={() => history.go(-2)}>Done</IonButton>
    </IonItem>
  </IonPage>
};
