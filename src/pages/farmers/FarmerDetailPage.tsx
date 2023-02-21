import { PastVisitRecord } from "@/components/farmers/PastVisitRecord";
import {
  IonButton,
  IonContent, IonPage
} from "@ionic/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useParams } from "react-router";

dayjs.extend(relativeTime)

const mockData = {
  name: "John Doe", visitDates: [
    new Date("2023-02-13"),
    new Date("2023-02-07")
  ]
}

export const FarmerDetailPage = () => {
  const params = useParams<{ farmer_id: string }>();
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding">
        <h1>{mockData.name}</h1>
        <p>Last visit was {dayjs(mockData.visitDates[0]).fromNow(true)} ago</p>
        <IonButton 
          routerLink={`/farmers/${params.farmer_id}/checklist`} 
          className="ion-text-uppercase record-btn"
          expand="block">
          Record Entry
        </IonButton>
        <h4>Address</h4>
        <p>123 Anywhere St</p>
        <h4>Past Visit Records</h4>
        {mockData.visitDates.map((date, index) => (
          <PastVisitRecord date={date} key={index} index={index + 1} />
        ))}
        <h4>Farmer Records</h4>
      </IonContent>
    </IonPage>
  );
};
