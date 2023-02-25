import { IonCheckbox, IonInput, IonLabel } from "@ionic/react";
import { t } from "i18next";
import { useFormContext } from "react-hook-form";
import { FarmRecord } from ".";

export const FarmVaccinations = () => {
  const { register } = useFormContext<FarmRecord>()
  return <>
    <div className="checkbox-question ion-padding-vertical">
      <IonLabel>Were vaccines admisterred?</IonLabel>
      <IonCheckbox {...register("vaccination.admisterred")} />
    </div>
    <div>
      <IonLabel position="floating">{t("type_of_vaccine_admisterred")}</IonLabel>
      <IonInput {...register("vaccination.type")} />
    </div>
  </>
};
