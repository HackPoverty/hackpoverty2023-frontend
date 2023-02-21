import {
  IonContent,
  IonButton,
  IonPage,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { FarmerJournalFormInputs } from "../";

export const FormStepC = () => {
  const { register } = useFormContext<FarmerJournalFormInputs>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Step 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Total Feed Given</IonLabel>
            <IonInput type="number" {...register("totalFeedAmount")} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Industry Standard</IonLabel>
            <IonInput
              type="number"
              {...register("totalFeedAmountIndustryStandard")}
            />
          </IonItem>
        </IonList>
        <IonButton routerLink="step-2">Back</IonButton>
        <IonButton routerLink="step-4">Next</IonButton>
      </IonContent>
    </IonPage>
  );
};
