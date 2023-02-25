import { SingleChoice } from "@/components/farmers/SingleChoice";
import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { DISEASES, DISEASE_MAP, PresenceOfDisease, TechnicianVisit } from "src/types/contentTypes";

export const FarmRedFlag = () => {
  const { register } = useFormContext<TechnicianVisit>();

  return <>
    <SingleChoice label="Presence of diseases" options={[...PresenceOfDisease]} name="fieldDisease" />
    <IonItem fill="solid">
      <IonLabel position="stacked">Common diseases</IonLabel>
      <IonSelect
        multiple
        {...register("fieldDiseaseNames")}
      >
        {DISEASES.map(desease =>
          <IonSelectOption key={desease} value={desease}>
            {DISEASE_MAP.get(desease)}
          </IonSelectOption>)}
      </IonSelect>
    </IonItem>
    <IonItem fill="solid">
      <IonLabel position="floating">Other possible diseases</IonLabel>
      <IonInput {...register("fieldOtherpossibledisease")} />
    </IonItem>
  </>
};
