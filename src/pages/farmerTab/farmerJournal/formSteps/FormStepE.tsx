import {
  IonList,
  IonItem,
  IonNavLink,
  IonButton,
  IonListHeader,
  IonContent,
} from "@ionic/react"
import { useFormContext } from "react-hook-form"
import { FarmerJournalFormInputs } from ".."
import { FormStepD } from "./FormStepD"
import { t } from "i18next"

export const FormStepE = () => {
  const { watch } = useFormContext<FarmerJournalFormInputs>()
  const watchAllFields = watch()

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>{t("confirm_your_submission")}</IonListHeader>
        {Object.keys(watchAllFields).map((key) => (
          <IonItem key={key}>
            {key}: {watchAllFields[key as keyof typeof watchAllFields]}
          </IonItem>
        ))}
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepD />}>
        <IonButton>{t("back").toUpperCase()}</IonButton>
      </IonNavLink>
      <IonButton type="submit">{t("submit")}</IonButton>
    </IonContent>
  )
}
