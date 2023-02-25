import { IonButton, IonCol, IonContent, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import { postTechnicianVisit } from "src/api/technician";
import { TechnicianVisit } from "src/types/contentTypes";
import { FarmNote } from "./FarmNote";
import { FarmQuality } from "./FarmQuality";
import { FarmRedFlag } from "./FarmRedFlag";
import { FarmVaccinations } from "./FarmVaccinations";
import { FormConfirmation } from "./FormConfirmation";
import "./index.css";

const steps = [
  { title: "Quality", element: <FarmQuality /> },
  { title: "Red Flags", element: <FarmRedFlag /> },
  { title: "Vaccination", element: <FarmVaccinations /> },
  { title: "Comments", element: <FarmNote /> },
  { title: "Confirmation", element: <FormConfirmation /> },
]

export const FarmChecklist = () => {
  const [step, setStep] = useState(0);
  const methods = useForm<TechnicianVisit>({
    defaultValues: {
      fieldDiseaseNames: [],
      fieldOtherpossibledisease: null,
      fieldOtherVaccine: null,
      fieldVisitComments: null,
      fieldVaccineGiven: false,
      fieldVaccinations: [],
    },
  });
  const history = useHistory();
  const params = useParams<{ farmer_id: string }>();
  const { mutate } = useMutation(postTechnicianVisit)

  const onSubmit: SubmitHandler<TechnicianVisit> = (data) => {
    console.log(data);
    mutate({ farmerId: params.farmer_id, visit: data })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{steps[step].title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="checklist-form">
            <div className="checklist-content">
              {steps[step].element}
            </div>
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
                    type="button"
                  >Next</IonButton>
                  : <IonButton
                    type="submit"
                    className="ion-text-uppercase"
                    expand="block"
                  >Submit</IonButton>}
              </IonCol>
            </IonRow>
          </form>
        </FormProvider>
      </IonContent>
    </IonPage >
  )
}
