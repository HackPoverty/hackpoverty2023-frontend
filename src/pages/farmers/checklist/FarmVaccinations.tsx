import { IonCheckbox, IonInput, IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { useController, useFormContext } from "react-hook-form";
import { TechnicianVisit, VACCINES, VACCINE_MAP } from "src/types/contentTypes";

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
        {VACCINES.map(vaccine =>
          <IonSelectOption key={vaccine} value={vaccine}>
            {VACCINE_MAP.get(vaccine)}
          </IonSelectOption>)}
      </IonSelect>
    </IonItem>
    <IonItem fill="solid" disabled={!givenVaccineField.value}>
      <IonLabel position="floating">Other possible vaccines</IonLabel>
      <IonInput {...register("fieldOtherVaccine")} />
    </IonItem>
  </>
};
