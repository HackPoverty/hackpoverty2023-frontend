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
  <IonApp>
    <QueryClientProvider client={queryClient}>
      <RootNavigator />
    </QueryClientProvider>
  </IonApp>
)

export default App
