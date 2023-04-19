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
import { useForm, SubmitHandler, FormProvider, useFormContext, useWatch } from "react-hook-form"
import { FormStepA } from "@/pages/farmerTab/farmerJournal/formSteps/FormStepA"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { EntireForm } from "./formSteps/EntireForm"
import { postFarmerJournal } from "src/api/farmer"
import { FarmerJournal as FarmJounalType } from "src/types/contentTypes"
import React from "react"

export const FarmerJournal = () => {
  const { t } = useTranslation();
  const modal = useRef<HTMLIonModalElement>(null)
  const methods = useForm<FarmerJournalFormInputs>({
    defaultValues: {
      initialStock: 0,
      mortality: 0,
      mortalityProlapse: 0,
      mortalityTotal: 0,
      mortalityPercent: 0.0,
      closingStock: 0,

      largeEggsCount: 0,
      mediumEggsCount: 0,
      smallEggsCount: 0,
      totalEggsProduced: 0,

      damagedEggsCount: 0,
      damagedEggsPercentage: 0.0,

      layFrequency: 0.0,
      layFrequencyIndustryStandard: 0.0,
      totalFeedAmount: 0,
      feedGramsPerBird: 0.0,
      totalFeedAmountIndustryStandard: 0,
      hoursOfLight: 0.0,
      otherNotes: "",
    },
  });

  const onSubmit: SubmitHandler<FarmerJournalFormInputs> = async (data) => {

    const farmerJournal = convert(data);
    // we pretend the mutation is successful
    console.log(farmerJournal)
    
    const response = await postFarmerJournal(farmerJournal);

    // await new Promise((resolve) => setTimeout(resolve, 500))
    console.log(response)
    modal.current?.dismiss()
  }

  const now = new Date();
  const dateString = now.toLocaleDateString();

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

        <IonButton id="open-modal-2" expand="block">
          {t("record_data")} (Entire Form)
        </IonButton>

        <IonModal ref={modal} trigger="open-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  {t("cancel")}
                </IonButton>
              </IonButtons>
              <IonTitle>{t("journal_of")} {dateString}</IonTitle>
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
        
        <IonModal ref={modal} trigger="open-modal-2">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  {t("cancel")}
                </IonButton>
              </IonButtons>
              <IonTitle>{t("journal_of")} {dateString}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <IonNav root={() => <EntireForm />} />
              </form>
            </FormProvider>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  )
};

export type FarmerJournalFormInputs = {
  initialStock: number
  mortality: number
  mortalityProlapse: number
  mortalityTotal: number
  mortalityPercent: number
  closingStock: number

  largeEggsCount: number
  mediumEggsCount: number
  smallEggsCount: number
  totalEggsProduced: number

  damagedEggsCount: number
  damagedEggsPercentage: number

  layFrequency: number
  layFrequencyIndustryStandard: number
  totalFeedAmount: number
  feedGramsPerBird: number
  totalFeedAmountIndustryStandard: number
  hoursOfLight: number
  otherNotes: string
};

function convert(inputs: FarmerJournalFormInputs): FarmJounalType {
  const fj : FarmJounalType = {
    fieldInitialStock: inputs.initialStock,
    fieldMortality: inputs.mortality,
    fieldMortalityProlapse_: inputs.mortalityProlapse,
    fieldTotalMortality: inputs.mortalityTotal,
    fieldMortalityPercentage_: inputs.mortalityPercent,
    fieldClosingStock: inputs.closingStock,

    fieldLayFrequency: inputs.layFrequency,
    fieldLayFrequencyIndustrySta: inputs.layFrequencyIndustryStandard,

    fieldDamagedEggs: inputs.damagedEggsCount,
    fieldDamagedEggsPercentage_: inputs.damagedEggsPercentage,
    fieldEggsProduced: inputs.totalEggsProduced,
    fieldLargeEggs: inputs.largeEggsCount,
    fieldMediumEggs: inputs.mediumEggsCount,
    fieldSmallEggs: inputs.smallEggsCount,

    fieldGivenFeed: inputs.totalFeedAmount,
    fieldGramsPerBird: inputs.feedGramsPerBird,
    fieldGramPerBirdIndustrySta: inputs.totalFeedAmountIndustryStandard,

    fieldHoursOfLight: inputs.hoursOfLight,

    fieldWeightOfBird: 0.0,
  };

  return fj;
};
