import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useHistory } from "react-router"
import { useAuth } from "src/auth/store"

export const DashboardPage = () => {
  const auth = useAuth()
  const history = useHistory()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
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
  )
}
