import { DiseaseSigns, FarmRecord, QualityTypes } from "@/pages/farmers/checklist";
import { IonLabel } from "@ionic/react";
import { useFormContext, type UseFormRegister } from "react-hook-form";
import "./RadioOptions.css";

interface Props {
  label: string;
  options: typeof QualityTypes | typeof DiseaseSigns;
  name: Parameters<UseFormRegister<FarmRecord>>[0]
};

export const RadioOptions = ({ label, options, name }: Props) => {
  const { register } = useFormContext<FarmRecord>();
  return (
    <div>
      <IonLabel position="stacked">{label}</IonLabel>
      <div className="options-row">
        {options.map(option => <div key={`${name}.${option}`}>
          <input type="radio" value={option} {...register(name)} id={`${name}.${option}`} />
          <label htmlFor={`${name}.${option}`} className="ion-text-capitalize">{option}</label>
        </div>)}
      </div>
    </div>
  );
};