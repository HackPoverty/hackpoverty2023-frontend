import { FormStepB } from "@/pages/farmerTab/farmerJournal/formSteps/FormStepB"
import { IonContent, IonNavLink, IonButton } from "@ionic/react"

export const RecordSaleStapsA = () => {
    return (
        <IonContent className="page">
            <IonNavLink routerDirection="forward" component={() => <RecordSaleStapsB/>}>
                <IonButton>NEXT</IonButton>
            </IonNavLink>
        </IonContent>
    )
}