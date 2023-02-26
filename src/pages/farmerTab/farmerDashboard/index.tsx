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
import { useTranslation } from "react-i18next"
import { FarmerJournalList } from "@/pages/farmerTab/farmerDashboard/modules/FarmerJournalList"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"

export const FarmerDashboard = () => {
  const { t } = useTranslation()
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
        <LanguageSwitcher />
        <IonText>
          <h2>{t("complete_log")}</h2>
        </IonText>
        <IonButton routerLink="/farmer-journal" expand="block">
          <IonLabel>{t("complete_log_button")}</IonLabel>
        </IonButton>
        <FarmerJournalList />
      </IonContent>
    </IonPage>
  )
}
