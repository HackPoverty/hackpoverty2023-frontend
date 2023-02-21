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

export const FormStepD = () => {
  const { register } = useFormContext<FarmerJournalFormInputs>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Other (4/4)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="page">
        <IonList>
          <IonItem>
            <IonLabel position="stacked">
              Notes and concerns for admins or technicians
            </IonLabel>
            <IonInput type="text" {...register("otherNotes")} />
          </IonItem>
        </IonList>
        <IonButton routerLink="step-3">Back</IonButton>
        <IonButton type="submit">Submit</IonButton>
      </IonContent>
    </IonPage>
  );
};
