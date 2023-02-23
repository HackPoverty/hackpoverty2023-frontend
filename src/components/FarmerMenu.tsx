import { IonHeader, IonToolbar, IonMenu, IonTitle, IonContent } from '@ionic/react';
import React from 'react';

interface ContainerProps {
  contentId: string;
}

const FarmerMenu: React.FC<ContainerProps> = ({
  contentId,
}: {
  contentId: string
}) => {
  return (
    <IonMenu contentId={contentId}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Farmer Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <p>Dashboard</p>
          <p>Chicken Registry</p>
          <p>Egg Production</p>
          <p>Request Support</p>
        </IonContent>
    </IonMenu>
  )
}
export default FarmerMenu
