import { IonCheckbox, IonInput, IonItem, IonLabel, IonTextarea } from "@ionic/react"
import { DISEASE_MAP, getQualityName, TechnicianVisit, VACCINE_MAP } from "src/types/contentTypes"

interface TextPreviewProps {
  label: string
  value: string
}

const TextPreview = ({ label, value }: TextPreviewProps) => {
  return <IonItem fill="solid">
    <IonLabel position="stacked">{label}</IonLabel>
    <IonInput value={value} disabled />
  </IonItem>
}

interface Props {
  visit: TechnicianVisit
}

export const TechnicianJournalDetail = ({ visit }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const diseases = visit.fieldDiseaseNames.map(item => DISEASE_MAP.get(item)!).join('\n')
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const vaccines = visit.fieldVaccinations.map(item => VACCINE_MAP.get(item)!).join('\n')
  return <>
    <div>
      <TextPreview label="Light Sufficiency" value={getQualityName(visit.fieldLightSufficiency)} />
      <TextPreview label="Feed Quantity" value={getQualityName(visit.fieldLightSufficiency)} />
      <TextPreview label="Water Cleanliness" value={getQualityName(visit.fieldLightSufficiency)} />
      <TextPreview label="Clean Bedding" value={getQualityName(visit.fieldLightSufficiency)} />
      <TextPreview label="Ventilation" value={getQualityName(visit.fieldLightSufficiency)} />
    </div>
    <div>
      <TextPreview label="Presence of Disease" value={visit.fieldDisease} />
      <IonItem fill="solid">
        <IonLabel position="stacked">Names of diseaes</IonLabel>
        <IonTextarea value={diseases} disabled></IonTextarea>
      </IonItem>
      <TextPreview label="Other Possible Diseases" value={visit.fieldOtherpossibledisease || ""} />
    </div>
    <div>
      <IonItem fill="solid">
        <IonLabel>Were vaccines given?</IonLabel>
        <IonCheckbox checked={visit.fieldVaccineGiven} disabled />
      </IonItem>
      {visit.fieldVaccineGiven ? <>
        <IonItem fill="solid">
          <IonLabel position="stacked">Common vaccines</IonLabel>
          <IonTextarea value={vaccines} disabled></IonTextarea>
        </IonItem>
        <TextPreview label="Other Vaccines" value={visit.fieldOtherpossibledisease || ""} />
      </> : null}
    </div>
    <IonItem fill="solid">
      <IonLabel position="stacked">Comments</IonLabel>
      <IonTextarea value={visit.fieldVisitComments || ""} disabled></IonTextarea>
    </IonItem>
  </>
}