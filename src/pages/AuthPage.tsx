import {
  IonButton,
  IonContent,
  IonIcon,
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
import { logoIonic, logoJavascript } from 'ionicons/icons';

import "./AuthPage.css"

export const AuthPage = () => {
  const auth = useAuth()

  const { register, handleSubmit } = useForm<LoginData>({})
  const { mutate, isLoading, error } = useMutation(auth.login)
  const onSubmit: SubmitHandler<LoginData> = (data) => mutate(data)

  return (
    <IonPage>
      <IonContent>

      <div className="log">
          

          {/* <IonIcon name="logo-javascript"></IonIcon> */}
          {/* <IonIcon icon={logoJavascript} size="large"></IonIcon> */}
          
              <div className="logoIMG">
                <img src="/public/assets/ui/logo.svg"  />
                <h2 className="logotitle ion-margin-top">ovoflow</h2>
              </div>

          <div className='buttons'>
            <div className="funcions ion-padding-horizontal">

            <form
          className="login-form ion-padding"
          onSubmit={handleSubmit(onSubmit)}
        >
          <IonItem fill="outline">
            <IonLabel position="floating">Username</IonLabel>
            <IonInput {...register("username")} required></IonInput>
          </IonItem>
          <IonItem fill="outline">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              type="password"
              {...register("password")}
              required
            ></IonInput>
          </IonItem>
          {error ? (
            <IonNote color="danger">Incorrect username or password</IonNote>
          ) : null}
          <IonButton expand="block" type="submit" disabled={isLoading}>
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
