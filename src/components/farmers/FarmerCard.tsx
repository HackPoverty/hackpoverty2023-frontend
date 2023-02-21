import { IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

interface Props {
  name: string;
  lastedVisitedDate: Date;
}

export const FarmerCard: React.FC<Props> = ({ name, lastedVisitedDate }) => {
  return <>
    <IonCardHeader>
      <IonCardTitle>{name}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      Last visit was {dayjs(lastedVisitedDate).fromNow(true)} ago
    </IonCardContent>
  </>
};