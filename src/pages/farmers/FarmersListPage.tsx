import { FarmerCard } from "@/components/farmers/FarmerCard";
import { IonContent, IonPage, IonText } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { getFarmers } from "src/api/farmers";

const mockData = [
  { id: 1, name: "John Doe", lastVisitedDate: new Date("2023-02-13") },
  { id: 2, name: "Jane Doe", lastVisitedDate: new Date("2023-02-17") },
]

export const FarmersListPage = () => {
  const now = new Date();
  const { data, isLoading, error } = useQuery(["farmers"], getFarmers)

  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <IonText>
          <h1>Hello technician!</h1>
          <p>You have visited {mockData.length} farms this month</p>
          <p>Keep it up</p>
        </IonText>
        {isLoading ? <IonText>Fetching farmers...</IonText> :
          error ? <IonText>Something went wrong</IonText> : null}
        {data?.map(farmer => (<FarmerCard key={farmer.id} now={now} farmer={farmer} />))}
      </IonContent>
    </IonPage>
  );
};
