import { IonButton, IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { FarmNote } from "./FarmNote";
import { FarmQuality } from "./FarmQuality";
import { FarmRedFlag } from "./FarmRedFlag";
import { FarmVaccinations } from "./FarmVaccinations";
import "./index.css";

const steps = [
  { title: "Quality", element: <FarmQuality /> },
  { title: "Red Flags", element: <FarmRedFlag /> },
  { title: "Vaccination", element: <FarmVaccinations /> },
  { title: "Note", element: <FarmNote /> },
]

export const FarmChecklist = () => {
  const [step, setStep] = useState(0);
  const methods = useForm<FarmRecord>();
  const history = useHistory();
  const params = useParams<{ farmer_id: string }>();

  console.log(step);

  // Reset everything before mounting
  useEffect(() => {
    setStep(0);
    methods.reset();
  }, []);

  const onSubmit: SubmitHandler<FarmRecord> = (data) => {
    console.log(data);
    history.replace(`/farmers/${params.farmer_id}/checklist/complete`);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{steps[step].title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="checklist-form">
            <div className="checklist-content">
              {steps[step].element}
            </div>
            <div className="checklist-navigation">
              <IonRow>
                <IonCol>
                  <IonButton
                    onClick={() => {
                      if (step === 0) history.goBack();
                      else setStep(step => step - 1);
                    }}
                    className="ion-text-uppercase"
                    fill="clear"
                    expand="block"
                  >Back</IonButton>
                </IonCol>
                <IonCol>
                  {step < steps.length - 1 ?
                    <IonButton
                      onClick={() => setStep(step => step + 1)}
                      className="ion-text-uppercase"
                      expand="block"
                    >Next</IonButton>
                    : <IonButton
                      type="submit"
                      className="ion-text-uppercase"
                      expand="block"
                    >Submit</IonButton>}
                </IonCol>
              </IonRow>
            </div>
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