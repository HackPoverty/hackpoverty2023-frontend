import { IonButton, IonContent, IonPage } from "@ionic/react";

export const AuthPage = () => {
  return (
    <IonPage>
      <IonContent>
        <IonButton slot="fixed">Log in to continue</IonButton>;
      </IonContent>
    </IonPage>
  );
};
