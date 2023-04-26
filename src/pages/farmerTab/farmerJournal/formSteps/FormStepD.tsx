import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNavLink,
  IonListHeader,
} from "@ionic/react"
import { useFormContext } from "react-hook-form"
import { FarmerJournalFormInputs } from ".."
import { FormStepC } from "./FormStepC"
import { FormStepE } from "./FormStepE"
import { t } from "i18next"

export const FormStepD = () => {
  const { register } = useFormContext<FarmerJournalFormInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>{t('notes_header')}</IonListHeader>
        <IonItem>
          <IonLabel position="stacked">
            {t("notes_and_concerns_for_admins_or_technicians")}
          </IonLabel>
          <IonInput type="text" {...register("otherNotes")} />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepC />}>
        <IonButton>{t("back").toUpperCase()}</IonButton>
      </IonNavLink>
      <IonNavLink routerDirection="forward" component={() => <FormStepE />}>
        <IonButton>{t("next").toUpperCase()}</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
