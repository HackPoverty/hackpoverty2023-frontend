import { TechnicianJournalDetail } from "@/components/farmers/TechnicianVisitDetail";
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getTechnicianVisitById } from "src/api/technician";

export const TechnicianVisitPage = () => {
  const params = useParams<{ visit_id: string }>();
  const { data, isLoading, error } = useQuery(["technician_visit", params.visit_id], () => getTechnicianVisitById(params.visit_id))

  return <IonPage>
    <IonHeader>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/farmers" />
          </IonButtons>
          <IonTitle>Technician Visit</IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonHeader>
    <IonContent className="ion-padding-vertical">
      {isLoading ? <IonText>Loading...</IonText> :
        error ? <IonText>Something went wrong</IonText> : null }
      {data ? <TechnicianJournalDetail visit={data} /> : null}
    </IonContent>
  </IonPage>
}