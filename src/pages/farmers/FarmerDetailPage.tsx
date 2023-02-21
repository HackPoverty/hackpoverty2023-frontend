import {
  IonButton,
  IonContent, IonPage, IonTitle
} from "@ionic/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useParams } from "react-router";

dayjs.extend(relativeTime)

const mockData = { name: "John Doe", lastVisitedDate: new Date("2023-02-13") }

export const FarmerDetailPage = () => {
  const params = useParams<{farmer_id: string}>();
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1>{mockData.name}</h1>
        <h3>Last visit was {dayjs(mockData.lastVisitedDate).fromNow(true)} ago</h3>
        <IonButton routerLink={`/farmers/${params.farmer_id}/checklist` }>Record Entry</IonButton>
        <h3><strong>Adress</strong>: 123 Anywhere St</h3>
        <h3>Past Visit Records</h3>
        <h3>Farmer Records</h3>
      </IonContent>
    </IonPage>
  );
};
