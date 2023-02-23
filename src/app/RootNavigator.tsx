// import { AuthPage } from "@/pages/AuthPage"
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { Route } from "react-router"
// import { PrivateRoute } from "src/auth/PrivateRoute"
import { FarmerDashboard, FarmerJournal } from "@/pages/farmerTab"

export const RootNavigator = () => {
  return (
    <IonReactRouter>
      {/* MENU */}
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem routerLink="/" routerDirection="forward" lines="none">
                <IonLabel>Farmer Dashboard</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* ROUTER */}
      <IonRouterOutlet id="main">
        {/* <Route path="/login" component={AuthPage} /> */}
        {/* <PrivateRoute path="/" exact component={FarmerDashboard} />
        <PrivateRoute path="/farmer-journal" exact component={FarmerJournal} /> */}
        <Route path="/" exact component={FarmerDashboard} />
        <Route path="/farmer-journal" exact component={FarmerJournal} />
      </IonRouterOutlet>
    </IonReactRouter>
  )
}
