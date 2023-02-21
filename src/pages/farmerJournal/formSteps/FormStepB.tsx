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
import {
  useForm,
  useFormContext,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { FarmerJournalFormInputs } from "../";

export const FormStepB = () => {
  const { register } = useFormContext<FarmerJournalFormInputs>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Eggs Production (2/4)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Large Eggs Produced</IonLabel>
            <IonInput type="number" {...register("largeEggsCount")} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Medium Eggs Produced</IonLabel>
            <IonInput type="number" {...register("mediumEggsCount")} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Small Eggs Produced</IonLabel>
            <IonInput type="number" {...register("smallEggsCount")} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Number of Damaged Eggs</IonLabel>
            <IonInput type="number" {...register("damagedEggsCount")} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Lay Frequency</IonLabel>
            <IonInput type="number" {...register("layFrequency")} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Industry Standard</IonLabel>
            <IonInput
              type="number"
              {...register("layFrequencyIndustryStandard")}
            />
          </IonItem>
        </IonList>
        <IonButton routerLink="step-1">Back</IonButton>
        <IonButton routerLink="step-3">Next</IonButton>
      </IonContent>
    </IonPage>
  );
};
