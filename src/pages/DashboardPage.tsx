import FarmerMenu from "@/components/FarmerMenu"
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useHistory } from "react-router"
import { useAuth } from "src/auth"

export const DashboardPage = () => {
  const auth = useAuth()
  const history = useHistory()

  return (
    <>
    <FarmerMenu contentId={"dashboard-page"} />

    <IonPage id="dashboard-page">
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => {
              auth.logout()
              history.push("/login")
            }}>
            Logout</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList lines="full">
          <IonListHeader>
            <IonLabel>Past Logs</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel>Dec 12, 2022</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Dec 15, 2022</IonLabel>
          </IonItem>
          <IonButton
            onClick={() => {
              auth.logout()
              history.push("/login")
            }}
          >
            Log out
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
    </>
  )
}
