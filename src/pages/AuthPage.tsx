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
import { Translation, useTranslation } from "react-i18next"
import { LoginData, useAuth } from "src/auth"
import "./AuthPage.css"

export const AuthPage = () => {
  const auth = useAuth()
  const { t, i18n } = useTranslation();

  const { register, handleSubmit } = useForm<LoginData>({})
  const { mutate, isLoading, error } = useMutation(auth.login)
  const onSubmit: SubmitHandler<LoginData> = (data) => mutate(data)

  return (
    <IonPage>
      <IonContent>
      <IonButton onClick={() => {
           i18n.changeLanguage('pt');
         }}>Portugues</IonButton>

         <IonButton onClick={() => {
           i18n.changeLanguage('en');
         }}>Ingles</IonButton>
        <form
          className="login-form ion-padding"
          onSubmit={handleSubmit(onSubmit)}
        >
          <IonItem fill="outline">
            <IonLabel position="floating">{t('username')}</IonLabel>
            <IonInput {...register("username")} required></IonInput>
          </IonItem>
          <IonItem fill="outline">
            <IonLabel position="floating">{t('password')}</IonLabel>
            <IonInput
              type="password"
              {...register("password")}
              required
            ></IonInput>
          </IonItem>
          {error ? (
            <IonNote color="danger">{t('wrong_password')}</IonNote>
          ) : null}
          <IonButton expand="block" type="submit" disabled={isLoading}>
          {t('login')}
          </IonButton>
          <IonLoading message="Logging in..." isOpen={isLoading} />
        </form>
        
      </IonContent>
    </IonPage>
  )
}
