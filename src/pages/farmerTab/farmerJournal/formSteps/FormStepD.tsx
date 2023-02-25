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
import { FormStepC } from "./FormStepC"
import { FormStepE } from "./FormStepE"
import type { PostFarmerJournalInputs } from "src/api/farmer"

export const FormStepD = () => {
  const { register } = useFormContext<PostFarmerJournalInputs>()

  return (
    <IonContent className="page">
      <IonList>
        <IonItem>
          <IonLabel position="stacked">
            Comments for admins or technicians
          </IonLabel>
          <IonInput type="text" {...register("fieldCommentdailycheck")} />
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
