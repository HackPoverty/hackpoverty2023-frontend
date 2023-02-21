import {
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { t } from "i18next";

export const FarmersListPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t("farmers")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          <IonListHeader>
            <IonLabel>{t("pick_farmer")}</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>{t("farmer")} A</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>{t("farmer")} B</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
