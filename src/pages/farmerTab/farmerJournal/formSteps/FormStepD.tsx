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
import { FormStepC } from "./FormStepC"
import { FormStepE } from "./FormStepE"

export const FormStepD = () => {
  const { register } = useFormContext<FarmerJournalFormInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">
            Notes and concerns for admins or technicians
          </IonLabel>
          <IonInput type="text" {...register("otherNotes")} />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepC />}>
        <IonButton>BACK</IonButton>
      </IonNavLink>
      <IonNavLink routerDirection="forward" component={() => <FormStepE />}>
        <IonButton>NEXT</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
