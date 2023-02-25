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
import { FormStepA } from "./FormStepA"
import { FormStepC } from "./FormStepC"
import type { PostFarmerJournalInputs } from "src/api/farmer"

export const FormStepB = () => {
  const { register } = useFormContext<PostFarmerJournalInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">Large Eggs Produced</IonLabel>
          <IonInput type="number" {...register("fieldLargeEggs")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Medium Eggs Produced</IonLabel>
          <IonInput type="number" {...register("fieldMediumEggs")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Small Eggs Produced</IonLabel>
          <IonInput type="number" {...register("fieldSmallEggs")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Number of Damaged Eggs</IonLabel>
          <IonInput type="number" {...register("fieldDamagedEggs")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Lay Frequency</IonLabel>
          <IonInput type="number" {...register("fieldLayFrequency")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Industry Standard</IonLabel>
          <IonInput
            type="number"
            {...register("fieldLayFrequencyIndustrySta")}
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
