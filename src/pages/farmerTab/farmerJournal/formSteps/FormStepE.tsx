import {
  IonList,
  IonItem,
  IonNavLink,
  IonButton,
  IonListHeader,
  IonContent,
} from "@ionic/react"
import { useFormContext } from "react-hook-form"
import { FarmerJournalFormInputs } from ".."
import { FormStepD } from "./FormStepD"

export const FormStepE = () => {
  const { watch } = useFormContext<FarmerJournalFormInputs>()
  const watchAllFields = watch()

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>Confirm your submission</IonListHeader>
        {Object.keys(watchAllFields).map((key) => (
          <IonItem key={key}>
            {key}: {watchAllFields[key as keyof typeof watchAllFields]}
          </IonItem>
        ))}
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepD />}>
        <IonButton>BACK</IonButton>
      </IonNavLink>
      <IonButton type="submit">Submit</IonButton>
    </IonContent>
  )
}
