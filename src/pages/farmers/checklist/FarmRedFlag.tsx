import { RadioOptions } from "@/components/farmers/RadioOptions";
import { IonInput, IonLabel } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { DiseaseSigns, FarmRecord } from ".";

export const FarmRedFlag = () => {
  const { register } = useFormContext<FarmRecord>();

  return <>
    <RadioOptions label="Sign of Disease" options={DiseaseSigns} name="redFlag.signOfDisease" />
    <div>
      <IonLabel position="stacked">Name of Disease</IonLabel>
      <IonInput {...register("redFlag.name")} />
    </div>
    <div>
      <IonLabel position="stacked">Indication</IonLabel>
      <IonInput {...register("redFlag.indication")} />
    </div>
  </>
};
