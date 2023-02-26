import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNavLink,
} from "@ionic/react"
import { useFormContext } from "react-hook-form"
import { FormStepC } from "./FormStepC"
import { FormStepE } from "./FormStepE"
import type { PostFarmerJournalInputs } from "src/api/farmer"
import { t } from "i18next"

export const FormStepD = () => {
  const { register } = useFormContext<PostFarmerJournalInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">
            {t("notes_and_concerns_for_admins_or_technicians")}
          </IonLabel>
          <IonInput type="text" {...register("fieldCommentdailycheck")} />
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
