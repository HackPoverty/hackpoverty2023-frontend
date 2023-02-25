import { IonItem, IonLabel } from "@ionic/react";
import { FieldPath, useFormContext } from "react-hook-form";
import { TechnicianVisit } from "src/types/contentTypes";
import "./SingleChoice.css";

interface SingleChoiceProps<T> {
  label: string
  name: FieldPath<TechnicianVisit>
  options: T[]
  displayFn?: (value: T) => string | undefined
}

export function SingleChoice<T extends string | number>({ label, name, options, displayFn }: SingleChoiceProps<T>) {
  const { register } = useFormContext<TechnicianVisit>()
  return (
    <IonItem fill="solid">
      <IonLabel position="stacked">{label}</IonLabel>
      <div className="options-row">
        {options.map(option => <div key={`${name}.${option}`}>
          <input type="radio" value={option} {...register(name)} id={`${name}.${option}`} />
          <label htmlFor={`${name}.${option}`} className="ion-text-capitalize">{displayFn ? displayFn(option) : option}</label>
        </div>)}
      </div>
    </IonItem>
  )
}