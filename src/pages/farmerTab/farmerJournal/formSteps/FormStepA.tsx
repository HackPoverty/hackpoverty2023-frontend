import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNavLink,
} from "@ionic/react"
import { useFormContext } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { FormStepB } from "./FormStepB"
import type { PostFarmerJournalInputs } from "src/api/farmer"

export const FormStepA = () => {
  const { register } = useFormContext<PostFarmerJournalInputs>()
  const { t } = useTranslation()

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>{t("chickens")}</IonListHeader>
        <IonItem>
          <IonLabel position="stacked">{t("initial_stock")}</IonLabel>
          <IonInput type="number" {...register("fieldInitialStock")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            {t("mortality")} ({t("number_of_chicken_deaths")})
          </IonLabel>
          <IonInput type="number" {...register("fieldMortality")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t("mortality_prolapse")}</IonLabel>
          <IonInput type="number" {...register("fieldMortalityProlapse_")} />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="forward" component={() => <FormStepB />}>
        <IonButton>{t("next")}</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
