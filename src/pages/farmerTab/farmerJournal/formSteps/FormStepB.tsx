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
import { FarmerJournalFormInputs } from ".."
import { FormStepA } from "./FormStepA"
import { FormStepC } from "./FormStepC"

export const FormStepB = () => {
  const { register } = useFormContext<FarmerJournalFormInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Large Eggs Produced</IonLabel>
          <IonInput type="number" {...register("largeEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Medium Eggs Produced</IonLabel>
          <IonInput type="number" {...register("mediumEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Small Eggs Produced</IonLabel>
          <IonInput type="number" {...register("smallEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Number of Damaged Eggs</IonLabel>
          <IonInput type="number" {...register("damagedEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Lay Frequency</IonLabel>
          <IonInput type="number" {...register("layFrequency")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Industry Standard</IonLabel>
          <IonInput
            type="number"
            {...register("layFrequencyIndustryStandard")}
          />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepA />}>
        <IonButton>BACK</IonButton>
      </IonNavLink>
      <IonNavLink routerDirection="forward" component={() => <FormStepC />}>
        <IonButton>NEXT</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
