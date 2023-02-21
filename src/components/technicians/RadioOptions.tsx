import { IonItem, IonLabel, IonRadio, IonRadioGroup } from "@ionic/react";

interface Props {
  label: string;
  options: string[];
};

export const RadioOptions: React.FC<Props> = ({ label, options }) => {
  return (
    <>
      <h5>{label}</h5>
      <IonRadioGroup>
        {options.map(option => (
          <IonItem>
            <IonLabel>{option}</IonLabel>
            <IonRadio value={option} slot="end" />
          </IonItem>
        ))}
      </IonRadioGroup>
    </>
  );
};