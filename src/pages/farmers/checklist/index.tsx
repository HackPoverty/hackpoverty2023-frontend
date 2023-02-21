import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FarmNote } from "./FarmNote";
import { FarmQuality } from "./FarmQuality";
import { FarmRedFlag } from "./FarmRedFlag";
import { FarmVaccinations } from "./FarmVaccinations";

const steps = [
  { title: "Quality", element: <FarmQuality /> },
  { title: "Red Flags", element: <FarmRedFlag /> },
  { title: "Vaccination", element: <FarmVaccinations /> },
  { title: "Note", element: <FarmNote /> },
]

export const FarmChecklist = () => {
  const [step, setStep] = useState(0);
  const methods = useForm<FarmRecord>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{steps[step].title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(console.log)}>
            {steps[step].element}
            <IonItem>
              <IonButton disabled={step == 0} onClick={() => setStep(step => step - 1)}>Back</IonButton>
              {step < steps.length - 1 ?
                <IonButton onClick={() => setStep(step => step + 1)}>Next</IonButton>
                : <IonButton type="submit" >Submit</IonButton>}
            </IonItem>
          </form>
        </FormProvider>
      </IonContent>
    </IonPage >
  )
}

export const QualityTypes = ["good", "okay", "bad"] as const;
export const DiseaseSigns = ["present", "absent", "not sure"] as const;
type Quality = typeof QualityTypes[number];
type DiseaseSign = typeof DiseaseSigns[number];

export type FarmRecord = {
  quality: {
    light: Quality,
    feed: Quality,
    water: Quality,
    bedding: Quality,
    ventilation: Quality
    note: string
  },
  redFlag: {
    signOfDisease: DiseaseSign,
    name: string,
    indication: string
  },
  vaccination: {
    admisterred: boolean,
    type?: string
  },
  note: string
}