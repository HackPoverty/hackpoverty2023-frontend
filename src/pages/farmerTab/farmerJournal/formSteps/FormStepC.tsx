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
import { FormStepB } from "./FormStepB"
import { FormStepD } from "./FormStepD"
import type { PostFarmerJournalInputs } from "src/api/farmer"

export const FormStepC = () => {
  const { register } = useFormContext<PostFarmerJournalInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Total Feed Given</IonLabel>
          <IonInput type="number" {...register("fieldGivenFeed")} />
        </IonItem>

        {/* todo: This form input doesn't have a corresponding field in backend */}
        {/* <IonItem>
          <IonLabel position="stacked">Industry Standard</IonLabel>
          <IonInput
            type="number"
            {...register("totalFeedAmountIndustryStandard")}
          />
        </IonItem> */}
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepB />}>
        <IonButton>BACK</IonButton>
      </IonNavLink>
      <IonNavLink routerDirection="forward" component={() => <FormStepD />}>
        <IonButton>NEXT</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
