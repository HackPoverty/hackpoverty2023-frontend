import { IonHeader, IonToolbar, IonMenu, IonTitle, IonContent } from '@ionic/react';
import React from 'react';

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
          <p>Dashboard</p>
          <p>Register Visit</p>
          <p>Personal Information</p>
        </IonContent>
    </IonMenu>
  )
}
export default TechnicianMenu
