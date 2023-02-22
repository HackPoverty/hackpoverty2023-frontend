import {
  IonApp, IonRouterOutlet, setupIonicReact
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";

/* Theme variables */
import { PrivateRoute } from "./auth/PrivateRoute";
import { PublicRoute } from "./auth/PublicRoute";
import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { FarmChecklist } from "./pages/farmers/checklist";
import { FarmRecordComplete } from "./pages/farmers/checklist/complete";
import { FarmerDetailPage } from "./pages/farmers/FarmerDetailPage";
import { FarmersListPage } from "./pages/farmers/FarmersListPage";
import { LogDataPage } from "./pages/LogDataPage";
import "./theme/variables.css";

setupIonicReact({
  mode: "md"
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <PublicRoute exact path="/login">
          <AuthPage />
        </PublicRoute>
        <PrivateRoute exact path="/dashboard" role="FARMER">
          <DashboardPage />
        </PrivateRoute>
        <PrivateRoute exact path="/log-data" role="FARMER">
          <LogDataPage />
        </PrivateRoute>
        <PrivateRoute exact path="/farmers" role="TECHNICIAN">
          <FarmersListPage />
        </PrivateRoute>
        <PrivateRoute exact path="/farmers/:farmer_id" role="TECHNICIAN">
          <FarmerDetailPage />
        </PrivateRoute>
        <PrivateRoute exact path="/farmers/:farmer_id/checklist" role="TECHNICIAN">
          <FarmChecklist />
        </PrivateRoute>
        <PrivateRoute exact path="/farmers/:farmer_id/checklist/complete" role="TECHNICIAN">
          <FarmRecordComplete />
        </PrivateRoute>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
