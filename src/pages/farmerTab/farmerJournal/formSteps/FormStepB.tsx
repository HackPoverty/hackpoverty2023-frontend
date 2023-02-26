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
import { FormStepA } from "./FormStepA"
import { FormStepC } from "./FormStepC"
import type { PostFarmerJournalInputs } from "src/api/farmer"

export const FormStepB = () => {
  const { register } = useFormContext<PostFarmerJournalInputs>()
  const { t } = useTranslation()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">{t("large_eggs_produced")}</IonLabel>
          <IonInput type="number" {...register("fieldLargeEggs")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t("medium_eggs_produced")}</IonLabel>
          <IonInput type="number" {...register("fieldMediumEggs")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t("small_eggs_produced")}</IonLabel>
          <IonInput type="number" {...register("fieldSmallEggs")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t("number_of_damage_eggs")}</IonLabel>
          <IonInput type="number" {...register("fieldDamagedEggs")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t("lay_frequency")}</IonLabel>
          <IonInput type="number" {...register("fieldLayFrequency")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t("industry_standard")}</IonLabel>
          <IonInput
            type="number"
            {...register("fieldLayFrequencyIndustrySta")}
          />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepA />}>
        <IonButton>{t("back")}</IonButton>
      </IonNavLink>
      <IonNavLink routerDirection="forward" component={() => <FormStepC />}>
        <IonButton>{t("next")}</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
