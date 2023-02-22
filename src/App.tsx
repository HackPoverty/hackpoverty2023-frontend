import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/typography.css"

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/float-elements.css"
import "@ionic/react/css/padding.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"

import { PrivateRoute } from "./auth/PrivateRoute"
import { AuthPage } from "./pages/AuthPage"
import { DashboardPage } from "./pages/DashboardPage"
import "./theme/variables.css"
import { PublicRoute } from "./auth/PublicRoute"
import { FarmerJournalPage } from "./pages/farmerJournal"
import { FarmerDetailPage } from "./pages/farmers/FarmerDetailPage"
import { FarmChecklist } from "./pages/farmers/checklist"
import { FarmRecordComplete } from "./pages/farmers/checklist/complete"
import { Redirect, Route } from "react-router-dom"
import { FarmersListPage } from "./pages/farmers/FarmersListPage"

setupIonicReact()

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <PublicRoute exact path="/login">
          <AuthPage />
        </PublicRoute>
        <PrivateRoute exact path="/dashboard" appRole="FARMER">
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute exact path="/log-data" appRole="FARMER">
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute exact path="/farmers" appRole="TECHNICIAN">
          <FarmersListPage />
        </PrivateRoute>
        <PrivateRoute exact path="/farmers/:farmer_id" appRole="TECHNICIAN">
          <FarmerDetailPage />
        </PrivateRoute>
        <PrivateRoute exact path="/farmers/:farmer_id/checklist" appRole="TECHNICIAN">
          <FarmChecklist />
        </PrivateRoute>
        <PrivateRoute exact path="/farmers/:farmer_id/checklist/complete" appRole="TECHNICIAN">
          <FarmRecordComplete />
        </PrivateRoute>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <FarmerJournalPage />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
