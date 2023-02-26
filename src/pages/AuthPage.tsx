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
import { useTranslation } from "react-i18next"
import { LoginData, useAuth } from "src/auth"

import "./AuthPage.css"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export const AuthPage = () => {
  const auth = useAuth()
  const { t } = useTranslation()

  const { register, handleSubmit } = useForm<LoginData>({})
  const { mutate, isLoading, error } = useMutation(auth.login)
  const onSubmit: SubmitHandler<LoginData> = (data) => mutate(data)

  return (
    <IonPage>
      <IonContent class="fancy-background">
        <div className="authentication-page">
          <div className="logo">
            <img
              className="logo__img"
              src="/assets/ui/logo.svg"
              alt="OvoFlow Logo"
            />
            <h1 className="logo__title ion-margin-top">ovoflow</h1>
          </div>
          <div className="buttons">
            <div className="functions ion-padding-horizontal">
              <form
                className="login-form ion-padding"
                onSubmit={handleSubmit(onSubmit)}
              >
                <IonItem fill="outline">
                  <IonInput
                    {...register("username")}
                    required
                    placeholder={t("username") as string}
                  />
                </IonItem>
                <IonItem fill="outline">
                  <IonInput
                    type="password"
                    {...register("password")}
                    required
                    placeholder={t("password") as string}
                  />
                </IonItem>
                {error ? (
                  <IonNote color="danger">{t("wrong_password")}</IonNote>
                ) : null}
                <IonButton
                  color={"secondary"}
                  expand="block"
                  type="submit"
                  disabled={isLoading}
                >
                  {t("login")}
                </IonButton>
                <IonLoading
                  message={t("logging_in") || "Logging In..."}
                  isOpen={isLoading}
                />
              </form>
              <div className="ion-padding">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}
