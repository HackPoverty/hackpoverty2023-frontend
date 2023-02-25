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
import { FarmerJournalFormInputs } from ".."
import { FormStepB } from "./FormStepB"

export const FormStepA = () => {
  const { t } = useTranslation();
  const { register } = useFormContext<FarmerJournalFormInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>{t('chickens')}</IonListHeader>
        <IonItem>
          <IonLabel position="stacked">{t('initial_stock')}</IonLabel>
          <IonInput type="number" {...register("initialStock")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            {t('mortality')} ({t('number_of_chicken_deaths')})
          </IonLabel>
          <IonInput type="number" {...register("mortality")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('mortality_prolapse')}</IonLabel>
          <IonInput type="number" {...register("mortalityProlapse")} />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="forward" component={() => <FormStepB />}>
        <IonButton>{t('next')}</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
