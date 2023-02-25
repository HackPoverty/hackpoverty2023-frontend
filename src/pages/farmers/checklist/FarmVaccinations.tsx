import { IonCheckbox, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useController, useFormContext } from "react-hook-form";
import { TechnicianVisit } from "src/types/contentTypes";

const COMMON_VACCINES = [
  "Marek's",
  "Newcastle",
  "Bronchtitis",
  "Laryngotracheitis",
  "Fowl Pox",
  "Fowl Chlorea",
]

export const FarmVaccinations = () => {
  const { control, register } = useFormContext<TechnicianVisit>()
  const { field: givenVaccineField } = useController({ control, name: "fieldVaccineGiven" })
  return <>
    <IonItem fill="solid">
      <IonLabel>Were vaccines given?</IonLabel>
      <IonCheckbox
        onIonChange={({ detail: { checked } }) => givenVaccineField.onChange(checked)}
        checked={givenVaccineField.value} />
    </IonItem>
    <IonItem fill="solid" disabled={!givenVaccineField.value}>
      <IonLabel position="stacked">Common vaccines</IonLabel>
      <IonSelect
        multiple
        interfaceOptions={{
          header: "Common vaccines",
          subHeader: "Select at least one",
        }}
        {...register("fieldVaccinations")}
      >
        {COMMON_VACCINES.map(vaccine =>
          <IonSelectOption key={vaccine} value={vaccine}>
            {vaccine}
          </IonSelectOption>)}
      </IonSelect>
    </IonItem>
    <IonItem fill="solid" disabled={!givenVaccineField.value}>
      <IonLabel position="floating">Other possible vaccine</IonLabel>
      <IonInput {...register("fieldOtherVaccine")} />
    </IonItem>
  </>
};
