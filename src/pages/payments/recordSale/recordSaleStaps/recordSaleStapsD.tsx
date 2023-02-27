import { IonContent, IonNavLink, IonButton } from "@ionic/react"
import { RecordSaleStaps } from ".."

export const RecordSaleStapsD = () => {
    return (
        <IonContent className="page">
            <IonNavLink routerDirection="forward" component={() => <RecordSaleStaps/>}>
                <IonButton>NEXT</IonButton>
            </IonNavLink>
        </IonContent>
    )
}