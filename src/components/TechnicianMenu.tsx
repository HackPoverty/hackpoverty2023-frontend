import { IonHeader, IonToolbar, IonMenu, IonTitle, IonContent } from '@ionic/react';
import React from 'react';
import { useTranslation } from "react-i18next";

interface ContainerProps {
  contentId: string;
}

const TechnicianMenu: React.FC<ContainerProps> = ({
  contentId,
}: {
  contentId: string
}) => {
  return (
    <IonMenu contentId={contentId}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Technician Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <a><p>Dashboard</p></a>
          <a><p>Register Visit</p></a>
          <a><p>Personal Information</p></a>
        </IonContent>
    </IonMenu>
  )
}
export default TechnicianMenu
