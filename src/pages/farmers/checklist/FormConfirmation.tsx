import { IonCheckbox, IonInput, IonItem, IonLabel, IonText, IonTextarea } from "@ionic/react"
import { FieldPath, useFormContext } from "react-hook-form"
import { TechnicianVisit } from "src/types/contentTypes"

interface TextConfirmationProps {
  label: string
  name: FieldPath<TechnicianVisit>
}

const TextConfirmation = ({ label, name }: TextConfirmationProps) => {
  const { getValues } = useFormContext<TechnicianVisit>()
  return <IonItem fill="solid">
    <IonLabel position="stacked">{label}</IonLabel>
    <IonInput value={`${getValues(name) || ""}`} disabled />
  </IonItem>
}

export const FormConfirmation = () => {
  const { getValues } = useFormContext<TechnicianVisit>()
  return <>
    <div>
      <TextConfirmation label="Light Sufficiency" name="fieldLightSufficiency" />
      <TextConfirmation label="Feed Quantity" name="fieldFeedQuantity" />
      <TextConfirmation label="Water Cleanliness" name="fieldWaterCleanliness" />
      <TextConfirmation label="Clean Bedding" name="fieldCleanBedding" />
      <TextConfirmation label="Ventilation" name="fieldVentillation" />
    </div>
    <div>
      <TextConfirmation label="Presence of Disease" name="fieldDisease" />
      <TextConfirmation label="Names of Diseases" name="fieldDiseaseNames" />
      <TextConfirmation label="Other Possible Diseases" name="fieldOtherpossibledisease" />
    </div>
    <div>
      <IonItem fill="solid">
        <IonLabel>Were vaccines given?</IonLabel>
        <IonCheckbox checked={getValues("fieldVaccineGiven")} disabled />
      </IonItem>
      {getValues("fieldVaccineGiven") ? <>
        <IonItem fill="solid">
          <IonLabel position="stacked">Common vaccines</IonLabel>
          <IonTextarea value={getValues("fieldVaccinations").join('\n')} disabled></IonTextarea>
        </IonItem>
        <TextConfirmation label="Other Vaccines" name="fieldOtherVaccine" />
      </> : null}
    </div>
    <IonItem fill="solid">
      <IonLabel position="stacked">Comments</IonLabel>
      <IonTextarea value={getValues("fieldVisitComments") || ""} disabled></IonTextarea>
    </IonItem>
  </>
}