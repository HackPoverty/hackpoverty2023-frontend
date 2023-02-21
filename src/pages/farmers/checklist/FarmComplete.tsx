import { IonButton, IonItem } from "@ionic/react";
import { useHistory } from "react-router";

export const FarmRecordComplete = () => {
  const history = useHistory();
  return <>
    <IonItem>
      Record is complete today
    </IonItem>
    <IonItem>
      <IonButton>Contact admin or farmer</IonButton>
      <IonButton onClick={() => history.goBack()}>Done</IonButton>
    </IonItem>
  </>
};
