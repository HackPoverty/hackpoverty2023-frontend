import {
  IonButton,
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
import { Redirect } from "react-router"

import { FarmerDashboard, FarmerJournal } from "@/pages/farmerTab"
import { AuthPage } from "@/pages/AuthPage"
import { PublicRoute } from "src/auth/PublicRoute"
import { PrivateRoute } from "src/auth/PrivateRoute"
import { FarmChecklist } from "@/pages/farmers/checklist"
import { FarmRecordComplete } from "@/pages/farmers/checklist/FormComplete"
import { FarmerDetailPage } from "@/pages/farmers/FarmerDetailPage"
import { FarmersListPage } from "@/pages/farmers/FarmersListPage"
import { useAuth } from "src/auth"

export const RootNavigator = () => {
  const auth = useAuth()
  const handleLogout = auth.logout

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
              <UserMenu role={auth.user?.role} />
              <IonItem>
                <IonButton onClick={handleLogout}>Log out</IonButton>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* ROUTER */}
      <IonRouterOutlet id="main">
        <Redirect exact path="/" to="/login" />
        <PublicRoute exact path="/login" component={AuthPage} />

        {/* FARMER PRIVATE ROUTES */}
        <PrivateRoute
          path="/farmer-dashboard"
          exact
          component={FarmerDashboard}
          appRole="FARMER"
        />
        <PrivateRoute
          path="/farmer-journal"
          exact
          component={FarmerJournal}
          appRole="FARMER"
        />

        {/* TECHNICIAN PRIVATE ROUTES */}
        <PrivateRoute
          exact
          path="/farmers"
          component={FarmersListPage}
          appRole="TECHNICIAN"
        />
        <PrivateRoute
          exact
          path="/farmers/:farmer_id"
          component={FarmerDetailPage}
          appRole="TECHNICIAN"
        />
        <PrivateRoute
          exact
          path="/farmers/:farmer_id/checklist"
          component={FarmChecklist}
          appRole="TECHNICIAN"
        />
        <PrivateRoute
          exact
          path="/farmers/:farmer_id/checklist/complete"
          component={FarmRecordComplete}
          appRole="TECHNICIAN"
        />
      </IonRouterOutlet>
    </IonReactRouter>
  )
}

const FarmerMenu = [{ title: "Dashboard", routerLink: "/farmer-dashboard" }]
const TechnicianMenu = [{ title: "Farmers", routerLink: "/farmers" }]

const UserMenu = ({ role }: { role: "FARMER" | "TECHNICIAN" | undefined }) => {
  const menu = role === "FARMER" ? FarmerMenu : TechnicianMenu
  return (
    <>
      {menu.map((item) => (
        <IonItem
          key={item.routerLink}
          routerLink={item.routerLink}
          routerDirection="forward"
          lines="none"
        >
          <IonLabel>{item.title}</IonLabel>
        </IonItem>
      ))}
    </>
  )
}
