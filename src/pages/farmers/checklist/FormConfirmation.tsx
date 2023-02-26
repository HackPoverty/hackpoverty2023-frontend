import { IonCheckbox, IonInput, IonItem, IonLabel, IonTextarea } from "@ionic/react"
import { useFormContext } from "react-hook-form"
import { DISEASE_MAP, getQualityName, TechnicianVisit, VACCINE_MAP } from "src/types/contentTypes"

interface TextConfirmationProps {
  label: string
  value: string
}

const TextConfirmation = ({ label, value }: TextConfirmationProps) => {
  return <IonItem fill="solid">
    <IonLabel position="stacked">{label}</IonLabel>
    <IonInput value={value} disabled />
  </IonItem>
}



export const FormConfirmation = () => {
  const { watch } = useFormContext<TechnicianVisit>()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const diseases = watch("fieldDiseaseNames").map(item => DISEASE_MAP.get(item)!).join('\n')
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const vaccines = watch("fieldVaccinations").map(item => VACCINE_MAP.get(item)!).join('\n')
  
  return <>
    <div>
      <TextConfirmation label="Light Sufficiency" value={getQualityName(watch("fieldLightSufficiency"))} />
      <TextConfirmation label="Feed Quantity" value={getQualityName(watch("fieldLightSufficiency"))} />
      <TextConfirmation label="Water Cleanliness" value={getQualityName(watch("fieldLightSufficiency"))} />
      <TextConfirmation label="Clean Bedding" value={getQualityName(watch("fieldLightSufficiency"))} />
      <TextConfirmation label="Ventilation" value={getQualityName(watch("fieldLightSufficiency"))} />
    </div>
    <div>
      <TextConfirmation label="Presence of Disease" value={watch("fieldDisease")} />
      <IonItem fill="solid">
        <IonLabel position="stacked">Names of diseaes</IonLabel>
        <IonTextarea value={diseases} disabled></IonTextarea>
      </IonItem>
      <TextConfirmation label="Other Possible Diseases" value={watch("fieldOtherpossibledisease") || ""} />
    </div>
    <div>
      <IonItem fill="solid">
        <IonLabel>Were vaccines given?</IonLabel>
        <IonCheckbox checked={watch("fieldVaccineGiven")} disabled />
      </IonItem>
      {watch("fieldVaccineGiven") ? <>
        <IonItem fill="solid">
          <IonLabel position="stacked">Common vaccines</IonLabel>
          <IonTextarea value={vaccines} disabled></IonTextarea>
        </IonItem>
        <TextConfirmation label="Other Vaccines" value={watch("fieldOtherpossibledisease") || ""} />
      </> : null}
    </div>
    <IonItem fill="solid">
      <IonLabel position="stacked">Comments</IonLabel>
      <IonTextarea value={watch("fieldVisitComments") || ""} disabled></IonTextarea>
    </IonItem>
  </>
}