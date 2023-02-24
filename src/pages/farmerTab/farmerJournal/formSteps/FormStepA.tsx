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
import { FarmerJournalFormInputs } from ".."
import { FormStepB } from "./FormStepB"

export const FormStepA = () => {
  const { register } = useFormContext<FarmerJournalFormInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>Chickens</IonListHeader>
        <IonItem>
          <IonLabel position="stacked">Initial Stock</IonLabel>
          <IonInput type="number" {...register("initialStock")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            Mortality (Number of Chicken Deaths)
          </IonLabel>
          <IonInput type="number" {...register("mortality")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Mortality Prolapse</IonLabel>
          <IonInput type="number" {...register("mortalityProlapse")} />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="forward" component={() => <FormStepB />}>
        <IonButton>NEXT</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
