import { IonHeader, IonToolbar, IonMenu, IonTitle, IonContent } from '@ionic/react';
import React from 'react';
import { useTranslation } from "react-i18next"

const FarmerMenu: React.FC = () => {
  
  return (
    <IonMenu contentId="dashboard-page">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Farmer Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <a><p>Dashboard</p></a>
          <a><p>Chicken Registry</p></a>
          <a><p>Egg Production</p></a>
          <a><p>Request Support</p></a>
        </IonContent>
    </IonMenu>
  )
}
export default FarmerMenu
