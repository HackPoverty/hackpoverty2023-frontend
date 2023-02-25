import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react"
import { useFormContext, type UseFormRegister } from "react-hook-form"
import { PresenceOfDisease, Quality, TechnicianVisit } from "src/types/contentTypes"

interface SelectionProps {
  label: string
  name: Parameters<UseFormRegister<TechnicianVisit>>[0]
  values: typeof Quality | typeof PresenceOfDisease
  placeholder: string
}

export function Selection({ label, name, values, placeholder }: SelectionProps) {
  const { register } = useFormContext<TechnicianVisit>();
  return (
    <IonItem fill="solid">
      <IonLabel>{label}</IonLabel>
      <IonSelect 
        interface="popover" placeholder={placeholder} {...register(name)}>
        {values.map(value => <IonSelectOption
          value={value}
          key={`${name}-${value}`}
        >
          {`${value}`}
        </IonSelectOption>)}
      </IonSelect>
    </IonItem>
  )
};