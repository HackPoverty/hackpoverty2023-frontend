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
import { useTranslation } from "react-i18next"

export const FarmerJournal = () => {
  const { t } = useTranslation();
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
            <IonBackButton defaultHref="/farmer-dashboard" />
          </IonButtons>
          <IonTitle>{t("farmer_journal")}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          {t("record_data")}
        </IonButton>

        <IonModal ref={modal} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  {t("cancel")}
                </IonButton>
              </IonButtons>
              <IonTitle>{t("journal_of")} [DATE]</IonTitle>
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
