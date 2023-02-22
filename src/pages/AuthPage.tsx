import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Role, useAuth } from "src/auth/store";
import "./AuthPage.css";

type LoginData = {
  phoneNumber: string;
  password: string;
}

export const AuthPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const { register, handleSubmit } = useForm<LoginData>({});

  return (
    <IonPage>
      <IonContent>
        <form className="login-form ion-padding" onSubmit={handleSubmit(console.log)}>
          <IonItem fill="outline">
            <IonLabel position="floating">Phone number</IonLabel>
            <IonInput {...register("phoneNumber")} required></IonInput>
          </IonItem>
          <IonItem fill="outline">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" {...register("password")} required></IonInput>
          </IonItem>
          <IonButton expand="block" type="submit">Login</IonButton>
        </form>
      </IonContent>
    </IonPage >
  );
};
