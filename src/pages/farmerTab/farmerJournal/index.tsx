import { useEffect, useRef } from "react"
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
import { useMutation } from "@tanstack/react-query"
import { postFarmerJournal } from "src/api/farmer"
import type { PostFarmerJournalInputs } from "src/api/farmer"

export const FarmerJournal = () => {
  const modal = useRef<HTMLIonModalElement>(null)
  const methods = useForm<PostFarmerJournalInputs>()
  const { mutate, isSuccess: mutationSuccess } = useMutation(postFarmerJournal)

  // todo: we should handle the form/mutation inside of the modal (it should be a module)
  const onSubmit: SubmitHandler<PostFarmerJournalInputs> = async (data) => {
    data.title = new Date().toLocaleString()
    mutate(data)
  }
  useEffect(() => {
    if (mutationSuccess) modal.current?.dismiss()
  }, [mutationSuccess])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/farmer-dashboard" />
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
