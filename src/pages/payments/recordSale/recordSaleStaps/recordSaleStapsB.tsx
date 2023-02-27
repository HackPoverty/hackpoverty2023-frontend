import { FormStepC } from "@/pages/farmerTab/farmerJournal/formSteps/FormStepC"
import { IonContent, IonNavLink, IonButton } from "@ionic/react"

export const RecordSaleStapsB = () => {
    return (
        <IonContent className="page">
            <IonNavLink routerDirection="forward" component={() => <RecordSaleStapsC/>}>
                <IonButton>NEXT</IonButton>
            </IonNavLink>
        </IonContent>
    )
}