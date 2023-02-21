import { FarmerCard } from "@/components/farmers/FarmerCard";
import {
  IonContent, IonPage, IonText
} from "@ionic/react";

const mockData = [
  { id: 1, name: "John Doe", lastVisitedDate: new Date("2023-02-13") },
  { id: 2, name: "Jane Doe", lastVisitedDate: new Date("2023-02-17") },
]

export const FarmersListPage = () => {
  const now = new Date();
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <IonText>
          <h1>Hello technician!</h1>
          <p>You have visited {mockData.length} farms this month</p>
          <p>Keep it up</p>
        </IonText>
        {mockData.map(farmer => (
          <FarmerCard
            id={farmer.id}
            name={farmer.name} 
            lastVisitDate={farmer.lastVisitedDate} 
            now={now} 
            key={farmer.id} />
        ))}
      </IonContent>
    </IonPage>
  );
};
