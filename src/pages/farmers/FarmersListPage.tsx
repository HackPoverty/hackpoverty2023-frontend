import { FarmerCard } from "@/components/farmers/FarmerCard";
import TechnicianMenu from "@/components/TechnicianMenu";
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory } from "react-router";
import { useAuth } from "src/auth";


const mockData = [
  { id: 1, name: "John Doe", lastVisitedDate: new Date("2023-02-13") },
  { id: 2, name: "Jane Doe", lastVisitedDate: new Date("2023-02-17") },
]

export const FarmersListPage = () => {
  const now = new Date();
  const auth = useAuth();
  const history = useHistory();

  return (
    <>

    <TechnicianMenu />

    <IonPage id="farmer-list-page">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonTitle>OvoFlow Technician Area</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => {
              auth.logout()
              history.push("/login")
            }}>
            Logout</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
        <IonContent class="ion-padding">
          <IonText>
            <h1>Hello technician!</h1>
            <p>You have visited {mockData.length} farms this month</p>
            <p>Keep it up</p>
          </IonText>
          {mockData.map(farmer => (
            <FarmerCard
              id={farmer.id}
              name={farmer.name}
              lastVisitDate={farmer.lastVisitedDate}
              now={now}
              key={farmer.id} />
          ))}
        </IonContent>
      
    </IonPage>
    </>
  );
};
