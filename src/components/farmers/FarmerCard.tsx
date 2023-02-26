import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonRippleEffect } from "@ionic/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Farmer } from "src/types/userTypes";
import "./FarmerCard.css";
import { useTranslation } from "react-i18next";


dayjs.extend(relativeTime)

interface Props {
  farmer: Farmer;
  now: Date;
}

const getStatus = (days: number) => {
  if (days <= 5) return "new";
  if (days <= 10) return "recent";
  return "old";
}

export const FarmerCard = ({ farmer, now }: Props) => {
  const diff = now.getTime() - new Date(farmer.fieldFarmerLastVisited).getTime();
  const days = Math.ceil(diff / (1000 * 3600 * 24));
  const { t } = useTranslation()

  return <IonCard
    className={`ion-no-margin ion-margin-vertical farmer-card ${getStatus(days)}`}
    button
    routerLink={`/farmers/${farmer.id}`}>
    <IonRippleEffect />
    <IonCardHeader>
      <IonCardTitle>{farmer.name}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
     {t("last_visit_was")} {dayjs(farmer.fieldFarmerLastVisited).from(now, true)} {t("ago")}
    </IonCardContent>
  </IonCard>
};