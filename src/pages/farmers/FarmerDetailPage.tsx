import { PastVisitRecord } from "@/components/farmers/PastVisitRecord"
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useQueries } from "@tanstack/react-query"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { t } from "i18next"
import { useParams } from "react-router"
import { getTechnicianVisits } from "src/api/technician"
import { getFarmerById } from "src/api/users"

dayjs.extend(relativeTime)

export const FarmerDetailPage = () => {
  const { farmer_id } = useParams<{ farmer_id: string }>()
  const [farmer, pastVisits] = useQueries({
    queries: [
      { queryKey: ["farmer", farmer_id], queryFn: () => getFarmerById(farmer_id) },
      { queryKey: ["technicalVisits", farmer_id], queryFn: () => getTechnicianVisits(farmer_id) },
    ],
  })
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/farmers" />
          </IonButtons>
          <IonTitle>{t('farmer_dashboard')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        {farmer.data ? (<>
          <h1>{farmer.data.name}</h1>
          <p>Last visit was {dayjs(farmer.data.fieldFarmerLastVisited).fromNow(true)} ago</p>
        </>) : farmer.isLoading ? <p>Retrieving farmer profile...</p> : <p>Cannot retrive farmer profile</p>}
        <IonButton
          routerLink={`/farmers/${farmer_id}/checklist`}
          className="ion-text-uppercase record-btn"
          expand="block"
        >
          Record Entry
        </IonButton>
        <h4>Past Visit Records</h4>
        {pastVisits.isLoading ? <p>Retrieving farmer profile...</p> :
          !pastVisits.data ? <p>Cannot retrive farmer profile</p> : null}
        {pastVisits.data?.map((visit) => (
          <PastVisitRecord technicianVisit={visit} key={visit.id} />
        ))}
        <h4>Farmer Records</h4>
      </IonContent>
    </IonPage>
  )
}
