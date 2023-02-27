import { FormStepD } from "@/pages/farmerTab/farmerJournal/formSteps/FormStepD"
import { IonContent, IonNavLink, IonButton } from "@ionic/react"

export const RecordSaleStapsC = () => {
    return (
        <IonContent className="page">
            <IonNavLink routerDirection="forward" component={() => <RecordSaleStapsD/>}>
                <IonButton>NEXT</IonButton>
            </IonNavLink>
        </IonContent>
    )
}