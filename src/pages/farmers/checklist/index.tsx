import { IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useState } from "react";
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


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{steps[step].title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <form>
          {steps[step].element}
        </form>

        {/* Navigation */}
        {step < steps.length - 1 ? <IonItem>
          <IonButton disabled={step == 0} onClick={() => setStep(step => step - 1)}>Back</IonButton>
          <IonButton onClick={() => setStep(step => step + 1)}>Next</IonButton>
        </IonItem> : null}
      </IonContent>
    </IonPage>
  )
}