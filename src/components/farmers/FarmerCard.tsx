import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRippleEffect } from "@ionic/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "./FarmerCard.css";

dayjs.extend(relativeTime)

interface Props {
  id: number
  name: string;
  lastVisitDate: Date;
  now: Date;
}

const getStatus = (days: number) => {
  if (days <= 5) return "new";
  if (days <= 10) return "recent";
  return "old";
}

export const FarmerCard: React.FC<Props> = ({ id, name, lastVisitDate, now }) => {
  const diff = now.getTime() - lastVisitDate.getTime();
  const days = Math.ceil(diff / (1000 * 3600 * 24));

  return <IonCard
    className={`ion-no-margin ion-margin-vertical farmer-card ${getStatus(days)}`}
    button
    routerLink={`/farmers/${id}`}>
    <IonRippleEffect />
    <IonCardHeader>
      <IonCardTitle>{name}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      Last visit was {dayjs(lastVisitDate).from(now, true)} ago
    </IonCardContent>
  </IonCard>
};