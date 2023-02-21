import { IonButton, IonContent, IonPage, IonRefresher, IonRefresherContent, RefresherEventDetail } from "@ionic/react";
import { useTranslation } from "react-i18next";

import { useHistory } from "react-router";
import { useAuth } from "src/auth/store";

export const AuthPage = () => {
  const auth = useAuth();
  const history = useHistory();
  const { t, i18n } = useTranslation();

  return (
    <IonPage>


      <IonContent class="ion-padding">
        <IonButton onClick={() => {
          auth.login("FARMER");
          history.push("/dashboard");
        }}>{t('farmer_login')}</IonButton>

        <IonButton onClick={() => {
          auth.login("TECHNICIAN");
          history.push("/farmers");
        }}>{t('technician_login')}</IonButton>

        <IonButton onClick={() => {
          i18n.changeLanguage('pt');
        }}>Portugues</IonButton>
        
        <IonButton onClick={() => {
          i18n.changeLanguage('en');
        }}>Ingles</IonButton>

      </IonContent>
    </IonPage>
  );
};
