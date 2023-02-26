import { PastVisitRecord } from "@/components/farmers/PastVisitRecord"
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react"
import { useQueries, useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { t } from "i18next"
import { useParams } from "react-router"
import { getFarmerJounalLogsById } from "src/api/farmer"
import { getTechnicianVisits } from "src/api/technician"
import { getFarmerById } from "src/api/users"

dayjs.extend(relativeTime)

const useFarmerSatistics = (farmerId: string) => {
  const { data, isLoading, error } = useQuery(["farmer_journal", farmerId], () => getFarmerJounalLogsById(farmerId))

  const lastWeek = data?.filter(item => dayjs(item.created) > dayjs().subtract(7, "days"))
  const totalMortiality = lastWeek?.reduce((prev, curr) => prev + (curr.fieldMortality || 0), 0)
  const totalEggProduction = lastWeek?.reduce((prev, curr) => prev + (curr.fieldProducedEggs || 0), 0)
  const totalFeedGram = lastWeek?.reduce((prev, curr) => prev + (curr.fieldGramPerBirdIndustrySta || 0), 0)

  return {
    isLoading,
    error,
    totalMortiality,
    avgEggProduciton: lastWeek && lastWeek.length > 0 && totalEggProduction !== undefined ? totalEggProduction / lastWeek.length : undefined,
    avgFeed: lastWeek && lastWeek.length > 0 && totalFeedGram !== undefined ? totalFeedGram / lastWeek.length : undefined,
  }
}


export const FarmerDetailPage = () => {
  const { farmer_id } = useParams<{ farmer_id: string }>()
  const [farmer, pastVisits] = useQueries({
    queries: [
      { queryKey: ["farmer", farmer_id], queryFn: () => getFarmerById(farmer_id) },
      { queryKey: ["technicalVisits", farmer_id], queryFn: () => getTechnicianVisits(farmer_id) },
    ],
  })
  const { isLoading, totalMortiality, avgEggProduciton, avgFeed } = useFarmerSatistics(farmer_id)

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
        <h4>Last Week Statistics</h4>
        {isLoading ? <p>Loading statistics...</p> : <>
          <p>Total mortiality: {totalMortiality}</p>
          <p>Average egg production: {avgEggProduciton || "N/A"}</p>
          <p>Average feed per bird production: {avgFeed || "N/A"}</p>
        </>}
        <h4>Past Visit Records</h4>
        {pastVisits.isLoading ? <p>Retrieving farmer profile...</p> :
          !pastVisits.data ? <p>Cannot retrive farmer profile</p> : null}
        {pastVisits.data?.map((visit) => (
          <PastVisitRecord technicianVisit={visit} key={visit.id} />
        ))}
      </IonContent>
    </IonPage>
  )
}
