import {
  IonList,
  IonLabel,
  IonItem,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonInput,
  IonCheckbox,
} from "@ionic/react";
import { t } from "i18next";

export const LogDataPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Log Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>{t("chicken_name")}</IonLabel>
            <IonInput
              placeholder="Matthew"
              onIonChange={(e) => console.log(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonCheckbox
              slot="start"
              onIonChange={(e) => console.log(e.target.checked)}
            />
            <IonLabel>{t("request_technician")}</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
