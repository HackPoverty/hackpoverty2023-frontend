import { FarmerCard } from "@/components/farmers/FarmerCard"
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useQuery } from "@tanstack/react-query"
import { getFarmers } from "src/api/users"

export const FarmersListPage = () => {
  const now = new Date()
  const { data, isLoading, error } = useQuery(["farmers"], getFarmers)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Technician Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class="ion-padding">
        <IonText>
          <h1>Hello technician!</h1>
          <p>You have visited {data ? data.length : (<>&nbsp;&nbsp;</>) } farms this month</p>
          <p>Keep it up</p>
        </IonText>
        {isLoading ? <IonText>Fetching farmers...</IonText> :
          error ? <IonText>Something went wrong</IonText> : null}
        { data?.map(farmer => (<FarmerCard key={farmer.id} now={now} farmer={farmer} />)) }
      </IonContent>
    </IonPage>
  )
}
