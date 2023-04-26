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
        <IonListHeader>{t('feed_and_light')}</IonListHeader>
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
        <IonItem>
          <IonLabel position="stacked">{t('hours_of_light')}</IonLabel>
          <IonInput type="number" {...register("hoursOfLight")} />
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
