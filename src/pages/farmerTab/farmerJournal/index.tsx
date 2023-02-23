import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonNav,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import { FormStepA } from "@/pages/farmerTab/farmerJournal/formSteps/FormStepA"
import { useRef } from "react"

export const FarmerJournal = () => {
  const modal = useRef<HTMLIonModalElement>(null)
  const methods = useForm<FarmerJournalFormInputs>()
  const onSubmit: SubmitHandler<FarmerJournalFormInputs> = async (data) => {
    // we pretend the mutation is successful
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log("MUTATION SUCCESS")
    modal.current?.dismiss()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Farmer Journal</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Record Data
        </IonButton>

        <IonModal ref={modal} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  Cancel
                </IonButton>
              </IonButtons>
              <IonTitle>Journal For [DATE]</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <IonNav root={() => <FormStepA />} />
              </form>
            </FormProvider>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  )
}

export type FarmerJournalFormInputs = {
  initialStock: number
  mortality: number
  mortalityProlapse: number
  largeEggsCount: number
  mediumEggsCount: number
  smallEggsCount: number
  damagedEggsCount: number
  layFrequency: number
  layFrequencyIndustryStandard: number
  totalFeedAmount: number
  totalFeedAmountIndustryStandard: number
  otherNotes: string
}
