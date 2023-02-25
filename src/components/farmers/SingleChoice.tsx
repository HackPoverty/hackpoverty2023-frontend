import { IonCol, IonGrid, IonItem, IonLabel, IonRadio, IonRadioGroup, IonRow } from "@ionic/react";
import { FieldPath, useFormContext } from "react-hook-form";
import { TechnicianVisit } from "src/types/contentTypes";
import "./SingleChoice.css";

interface SingleChoiceProps<T> {
  label: string
  name: FieldPath<TechnicianVisit>
  options: T[]
  displayFn?: (value: T) => string
}

export function SingleChoice<T extends string | number>({ label, name, options, displayFn }: SingleChoiceProps<T>) {
  const { register } = useFormContext<TechnicianVisit>()
  return (
    <IonItem fill="solid">
      <IonGrid>
        <IonRow>
          <IonLabel>
            {label}
          </IonLabel>
        </IonRow>
        <IonRadioGroup {...register(name)}>
          <IonRow class="ion-padding-vertical">
            {options.map(option => (
              <IonCol key={`${name}.${option}`}>
                <IonLabel>{displayFn ? displayFn(option) : option}</IonLabel>
                <IonRadio value={option} />
              </IonCol>
            ))}
          </IonRow>
        </IonRadioGroup>
      </IonGrid>
    </IonItem>
  )
}