import { IonApp, setupIonicReact } from "@ionic/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RootNavigator } from "./app/RootNavigator"

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

import "./theme/variables.css"

setupIonicReact()

const queryClient = new QueryClient()

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <IonApp>
      <RootNavigator />
    </IonApp>
  </QueryClientProvider>
)

export default App

// <IonReactRouter>
//   <IonRouterOutlet>
//     <PublicRoute exact path="/login">
//       <AuthPage />
//     </PublicRoute>
//     <PrivateRoute exact path="/dashboard" appRole="FARMER">
//       <DashboardPage />
//     </PrivateRoute>
//     <PrivateRoute exact path="/log-data" appRole="FARMER">
//       <DashboardPage />
//     </PrivateRoute>
//     <PrivateRoute exact path="/farmers" appRole="TECHNICIAN">
//       <FarmersListPage />
//     </PrivateRoute>
//     <PrivateRoute exact path="/farmers/:farmer_id" appRole="TECHNICIAN">
//       <FarmerDetailPage />
//     </PrivateRoute>
//     <PrivateRoute exact path="/farmers/:farmer_id/checklist" appRole="TECHNICIAN">
//       <FarmChecklist />
//     </PrivateRoute>
//     <PrivateRoute exact path="/farmers/:farmer_id/checklist/complete" appRole="TECHNICIAN">
//       <FarmRecordComplete />
//     </PrivateRoute>
//     <Route exact path="/">
//       <Redirect to="/login" />
//     </Route>
//     <FarmerJournalPage />
//   </IonRouterOutlet>
// </IonReactRouter>
// TODO: fix this later
{
  /* <IonRouterOutlet>
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
    </IonRouterOutlet> */
}
