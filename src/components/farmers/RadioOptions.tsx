import { FarmRecord, QualityTypes, DiseaseSigns } from "@/pages/farmers/checklist";
import { IonItem, IonLabel, IonRadio, IonRadioGroup } from "@ionic/react";
import { useForm, useFormContext, type UseFormRegister } from "react-hook-form";

interface Props {
  label: string;
  options: typeof QualityTypes | typeof DiseaseSigns;
  name: Parameters<UseFormRegister<FarmRecord>>[0]
};

export const RadioOptions: React.FC<Props> = ({ label, options, name }) => {
  const {register} = useFormContext<FarmRecord>();
  return (
    <>
      <h5>{label}</h5>
      <IonRadioGroup>
        {options.map(option => (
          <IonItem>
            <IonLabel>{option}</IonLabel>
            <IonRadio value={option} slot="end" {...register(name)} />
          </IonItem>
        ))}
      </IonRadioGroup>
    </>
  );
};