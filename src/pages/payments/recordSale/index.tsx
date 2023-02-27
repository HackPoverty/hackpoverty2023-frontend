import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonModal, IonNav, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { FormProvider } from "react-hook-form"
import { RecordSaleStapsA } from "./recordSaleStaps/RecordSaleStapsA"

export const RecordSaleSteps = () => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/record-sale" />
                    </IonButtons>
                    <IonTitle>Record Sales</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonModal>
                    <IonNav root={() => <RecordSaleStapsA/>}/>
                </IonModal>
            </IonContent>
        </IonPage>
    )
}