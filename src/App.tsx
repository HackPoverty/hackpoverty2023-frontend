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

/* Theme variables */
import { PrivateRoute } from "./auth/PrivateRoute"
import { AuthPage } from "./pages/AuthPage"
import { DashboardPage } from "./pages/DashboardPage"
import "./theme/variables.css"
import { FarmersListPage } from "./pages/FarmersListPage"
import { PublicRoute } from "./auth/PublicRoute"

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
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
