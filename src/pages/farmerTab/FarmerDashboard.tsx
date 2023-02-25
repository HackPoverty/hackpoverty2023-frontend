import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonLabel,
  IonPage,
  IonButton,
  IonText,
} from "@ionic/react"
import { useTranslation } from "react-i18next";

export const FarmerDashboard = () => {
  const { t, i18n } = useTranslation();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{t("farmer_dashboard")}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonButton onClick={() => {
           i18n.changeLanguage('pt');
         }}>Portugues</IonButton>

         <IonButton onClick={() => {
           i18n.changeLanguage('en');
         }}>Ingles</IonButton>
        <IonText>
          <h2>{t("complete_log")}</h2>
        </IonText>
        <IonButton routerLink="/farmer-journal" expand="block">
          <IonLabel>Complete Daily Log</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  )
}
