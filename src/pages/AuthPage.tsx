import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonLoading, IonNote, IonPage } from "@ionic/react";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { LoginData, useAuth } from "src/auth/store";
import "./AuthPage.css";

export const AuthPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const { register, handleSubmit, formState } = useForm<LoginData>({});
  const { mutate, isLoading, error } = useMutation(auth.login);
  const onSubmit: SubmitHandler<LoginData> = (data) => {
    mutate(data, {
      onSuccess(result) {
        if (result === "FARMER") history.replace("/dashboard")
        else history.replace("/farmers")
      }
    })
  }

  return (
    <IonPage>
      <IonContent>
        <form className="login-form ion-padding" onSubmit={handleSubmit(onSubmit)}>
          <IonItem fill="outline">
            <IonLabel position="floating">Username</IonLabel>
            <IonInput {...register("username")} required></IonInput>
          </IonItem>
          <IonItem fill="outline">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="password" {...register("password")} required></IonInput>
          </IonItem>
          {error ? <IonNote color="danger">Incorrect username or password</IonNote> : null}
          <IonButton expand="block" type="submit" disabled={isLoading}>Login</IonButton>
          <IonLoading message="Logging in..." isOpen={isLoading} />
        </form>
      </IonContent>
    </IonPage >
  );
};
