import { IonContent, IonItem, IonLabel, IonList, IonTextarea } from "@ionic/react";

export const FarmNote = () => {
  return (
    <>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Notes and concerns are admin or farmers</IonLabel>
            <IonTextarea />
          </IonItem>
        </IonList>
    </>
  )
};
