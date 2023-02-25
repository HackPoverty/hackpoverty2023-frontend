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
import { FormStepB } from "./FormStepB"
import type { PostFarmerJournalInputs } from "src/api/farmer"

export const FormStepA = () => {
  const { register } = useFormContext<PostFarmerJournalInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>Chickens</IonListHeader>
        <IonItem>
          <IonLabel position="stacked">Initial Stock</IonLabel>
          <IonInput type="number" {...register("fieldInitialStock")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            Mortality (Number of Chicken Deaths)
          </IonLabel>
          <IonInput type="number" {...register("fieldMortality")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Mortality Prolapse</IonLabel>
          <IonInput type="number" {...register("fieldMortalityProlapse_")} />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="forward" component={() => <FormStepB />}>
        <IonButton>NEXT</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
