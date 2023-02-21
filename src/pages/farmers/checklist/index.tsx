import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FarmRecordComplete } from "./FarmComplete";
import { FarmNote } from "./FarmNote";
import { FarmQuality } from "./FarmQuality";
import { FarmRedFlag } from "./FarmRedFlag";
import { FarmVaccinations } from "./FarmVaccinations";

const steps = [
  { title: "Quality", element: <FarmQuality /> },
  { title: "Red Flags", element: <FarmRedFlag /> },
  { title: "Vaccination", element: <FarmVaccinations /> },
  { title: "Note", element: <FarmNote /> },
  { title: "Complete", element: <FarmRecordComplete /> }
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
          </form>
        </FormProvider>

        {/* Navigation */}
        {step < steps.length - 1 ? <IonItem>
          <IonButton disabled={step == 0} onClick={() => setStep(step => step - 1)}>Back</IonButton>
          <IonButton onClick={() => setStep(step => step + 1)}>Next</IonButton>
        </IonItem> : null}
      </IonContent>
    </IonPage>
  )
}

type Quality = "good" | "ok" | "bad"

export type FarmRecord = {
  quality: {
    light: Quality,
    feed: Quality,
    water: Quality,
    beeding: Quality,
    note: string
  },
  redFlag: {
    signOfDisease: "present" | "absent" | "not sure",
    name: string,
    indication: string
  },
  vaccination: {
    admisterred: boolean,
    type?: string
  },
  note: string
}