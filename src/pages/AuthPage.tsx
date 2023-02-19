import { IonButton, IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import { useAuth } from "src/auth/store";

export const AuthPage = () => {
  const auth = useAuth();
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <IonButton onClick={() => {
          auth.login("FARMER");
          history.push("/dashboard");
        }}>Log in as farmer</IonButton>

        <IonButton onClick={() => {
          auth.login("TECHNICIAN");
          history.push("/farmers");
        }}>Log in as technician</IonButton>
      </IonContent>
    </IonPage>
  );
};
