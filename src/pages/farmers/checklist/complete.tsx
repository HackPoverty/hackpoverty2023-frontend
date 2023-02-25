import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { t } from "i18next";
import { useHistory, useParams } from "react-router";
import "./complete.css";

export const FarmRecordComplete = () => {
  const history = useHistory();
  const params = useParams<{farmer_id: string}>();
  return <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Complete</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <div className="ion-padding complete-wrapper">
        <div className="complete-content">
          {t('record_is_complete_today')}
        </div>
        <div>
          <IonButton expand="block" fill="clear" class="ion-text-uppercase">{t("contact_admin_or_farmer")}</IonButton>
          <IonButton expand="block" class="ion-text-uppercase" onClick={() => history.replace(`/farmers/${params.farmer_id}`)}>Done</IonButton>
        </div>
      </div>
    </IonContent>
  </IonPage>
};
