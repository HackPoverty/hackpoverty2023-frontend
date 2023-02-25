import { RadioOptions } from "@/components/farmers/RadioOptions";
import { IonInput, IonLabel } from "@ionic/react";
import { t } from "i18next";
import { useFormContext } from "react-hook-form";
import { DiseaseSigns, FarmRecord } from ".";

export const FarmRedFlag = () => {
  const { register } = useFormContext<FarmRecord>();

  return <>
    <RadioOptions label="Sign of Disease" options={DiseaseSigns} name="redFlag.signOfDisease" />
    <div>
      <IonLabel position="stacked">{t("name_of_disease")}</IonLabel>
      <IonInput {...register("redFlag.name")} />
    </div>
    <div>
      <IonLabel position="stacked">Indication</IonLabel>
      <IonInput {...register("redFlag.indication")} />
    </div>
  </>
};
