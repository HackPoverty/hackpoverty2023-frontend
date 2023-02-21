import { FarmerCard } from "@/components/technicians/FarmerCard";
import {
  IonContent, IonItem, IonList, IonPage, IonTitle
} from "@ionic/react";

const mockData = [
  { id: 1, name: "John Doe", lastVisitedDate: new Date("2023-02-13") },
  { id: 2, name: "Jane Doe", lastVisitedDate: new Date("2023-02-17") },
]

export const FarmersListPage = () => {
  return (
    <IonPage>
      <IonContent>
        <IonTitle>
          Hello technician!
        </IonTitle>
        <p>You have visited {mockData.length} farms this month</p>
        <p>Keep it up</p>
        <IonList>
          {mockData.map(item => (
            <IonItem button routerLink={`farmers/${item.id}`}>
              <FarmerCard name={item.name} lastedVisitedDate={item.lastVisitedDate} />
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
