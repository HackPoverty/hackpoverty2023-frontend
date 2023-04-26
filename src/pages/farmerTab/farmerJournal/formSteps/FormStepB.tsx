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
import { FormStepA } from "./FormStepA"
import { FormStepC } from "./FormStepC"

export const FormStepB = () => {
  const { t } = useTranslation();
  const { register } = useFormContext<FarmerJournalFormInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>{t('eggs_info')}</IonListHeader>
        <IonItem>
          <IonLabel position="stacked">{t('large_eggs_produced')}</IonLabel>
          <IonInput type="number" {...register("largeEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('medium_eggs_produced')}</IonLabel>
          <IonInput type="number" {...register("mediumEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('small_eggs_produced')}</IonLabel>
          <IonInput type="number" {...register("smallEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('number_of_damage_eggs')}</IonLabel>
          <IonInput type="number" {...register("damagedEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('lay_frequency')}</IonLabel>
          <IonInput type="number" {...register("layFrequency")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('industry_standard')}</IonLabel>
          <IonInput
            type="number"
            {...register("layFrequencyIndustryStandard")}
          />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepA />}>
        <IonButton>{t('back')}</IonButton>
      </IonNavLink>
      <IonNavLink routerDirection="forward" component={() => <FormStepC />}>
        <IonButton>{t("next")}</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
