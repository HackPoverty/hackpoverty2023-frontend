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
import { useTranslation } from "react-i18next"
import { FormStepB } from "./FormStepB"
import { FormStepD } from "./FormStepD"
import type { PostFarmerJournalInputs } from "src/api/farmer"

export const FormStepC = () => {
  const { register } = useFormContext<PostFarmerJournalInputs>()
  const { t } = useTranslation()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">{t("total_feed_given")}</IonLabel>
          <IonInput type="number" {...register("fieldGivenFeed")} />
        </IonItem>

        {/* todo: This form input doesn't have a corresponding field in backend */}
        {/* 
        <IonItem>
          <IonLabel position="stacked">{t('industry_standard')}</IonLabel>
          <IonInput
            type="number"
            {...register("totalFeedAmountIndustryStandard")}
          />
        </IonItem>
         */}
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepB />}>
        <IonButton>{t("back")}</IonButton>
      </IonNavLink>
      <IonNavLink routerDirection="forward" component={() => <FormStepD />}>
        <IonButton>{t("next")}</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
