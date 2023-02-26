import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonPage,
} from "@ionic/react"
import { useTranslation } from "react-i18next"
import { FarmerJournalList } from "@/pages/farmerTab/farmerDashboard/modules/FarmerJournalList"
import { FarmerDataDisplay } from "@/pages/farmerTab/farmerDashboard/modules/FarmerDataDisplay"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { FarmerJournalButton } from "./modules/FarmerJournalButton"

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
      <IonContent>
        <LanguageSwitcher />
        <FarmerJournalButton />
        <FarmerDataDisplay />
        <FarmerJournalList />
      </IonContent>
    </IonPage>
  )
}
