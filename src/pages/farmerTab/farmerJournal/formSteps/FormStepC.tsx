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
import { FarmerJournalFormInputs } from ".."
import { FormStepB } from "./FormStepB"
import { FormStepD } from "./FormStepD"

export const FormStepC = () => {
  const { t } = useTranslation();
  const { register } = useFormContext<FarmerJournalFormInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">{t('total_feed_given')}</IonLabel>
          <IonInput type="number" {...register("totalFeedAmount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('industry_standard')}</IonLabel>
          <IonInput
            type="number"
            {...register("totalFeedAmountIndustryStandard")}
          />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepB />}>
        <IonButton>{t('back')}</IonButton>
      </IonNavLink>
      <IonNavLink routerDirection="forward" component={() => <FormStepD />}>
        <IonButton>{t('next')}</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
