import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonNote,
  IonPage,
} from "@ionic/react"
import { useMutation } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { LoginData, useAuth } from "src/auth"

import "./AuthPage.css"

export const AuthPage = () => {
  const auth = useAuth()
  const { register, handleSubmit } = useForm<LoginData>({})
  const { mutate, isLoading, error } = useMutation(auth.login)
  const onSubmit: SubmitHandler<LoginData> = (data) => mutate(data)

  return (
    <IonPage>
      <IonContent class="fancy-background">
        <div className="authentication-page">
          <div className="logo">
            <img className="logo__img" src="/assets/ui/logo.svg" alt="OvoFlow Logo" />
            <h1 className="logo__title ion-margin-top">ovoflow</h1>
          </div>
          <div className="buttons">
            <div className="functions ion-padding-horizontal">
              <form className="login-form ion-padding" onSubmit={handleSubmit(onSubmit)}>
                <IonItem fill="outline">
                  <IonLabel position="stacked">Username</IonLabel>
                  <IonInput {...register("username")} required></IonInput>
                </IonItem>
                <IonItem fill="outline">
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput type="password" {...register("password")} required></IonInput>
                </IonItem>
                {error ? (
                <IonNote color="danger">Incorrect username or password</IonNote>
                ) : null}
                <IonButton color={"secondary"} expand="block" type="submit" disabled={isLoading}>
                  Login
                </IonButton>
                <IonLoading message="Logging in..." isOpen={isLoading} />
              </form>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}