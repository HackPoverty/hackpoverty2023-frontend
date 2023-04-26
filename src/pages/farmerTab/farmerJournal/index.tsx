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
import { useForm, SubmitHandler, FormProvider, UseFormSetValue } from "react-hook-form"
import { FormStepA } from "@/pages/farmerTab/farmerJournal/formSteps/FormStepA"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { postFarmerJournal } from "src/api/farmer"
import { FarmerJournal as FarmJounalType } from "src/types/contentTypes"
import React from "react"

export const FarmerJournal = () => {
  const { t } = useTranslation();
  const modal = useRef<HTMLIonModalElement>(null)
  const methods = useForm<FarmerJournalFormInputs>({
    defaultValues: {
      initialStock: '0',
      mortality: '0',
      mortalityProlapse: '0',
      mortalityTotal: 0,
      mortalityPercent: 0.0,
      closingStock: 0,

      largeEggsCount: '0',
      mediumEggsCount: '0',
      smallEggsCount: '0',
      totalEggsProduced: 0,

      damagedEggsCount: '0',
      damagedEggsPercentage: 0.0,

      layFrequency: '0.0',
      layFrequencyIndustryStandard: '0.0',
      totalFeedAmount: '0',
      feedGramsPerBird: 0.0,
      totalFeedAmountIndustryStandard: '0',
      hoursOfLight: '0.0',
      otherNotes: "",
    },
  });

  const onSubmit: SubmitHandler<FarmerJournalFormInputs> = async (data) => {


    const computedData = setComputedState(data);

    const farmerJournal = convert(computedData);

    // we pretend the mutation is successful
    console.log(farmerJournal)

    
    const response = await postFarmerJournal(farmerJournal);

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
      </IonContent>
    </IonPage>
  )
}

 // FIXME: These strings should be numbers
export type FarmerJournalFormInputs = {
  initialStock: string
  mortality: string
  mortalityProlapse: string
  mortalityTotal: number | -1
  mortalityPercent: number | -0.1
  closingStock: number | -1

  largeEggsCount: string
  mediumEggsCount: string
  smallEggsCount: string
  totalEggsProduced: number | -1

  damagedEggsCount: string
  damagedEggsPercentage: number | -0.1
  layFrequency: string
  layFrequencyIndustryStandard: string

  totalFeedAmount: string
  feedGramsPerBird: number | -0.1
  totalFeedAmountIndustryStandard: string
  hoursOfLight: string

  otherNotes: string | ""
};

function convert(inputs: FarmerJournalFormInputs): FarmJounalType {
  const fj : FarmJounalType = {
    fieldInitialStock: parseInt(inputs.initialStock),
    fieldMortality: parseInt(inputs.mortality),
    fieldMortalityProlapse_: parseInt(inputs.mortalityProlapse),
    fieldTotalMortality: inputs.mortalityTotal,
    fieldMortalityPercentage_: inputs.mortalityPercent,
    fieldClosingStock: inputs.closingStock,

    fieldLayFrequency: parseFloat(inputs.layFrequency),
    fieldLayFrequencyIndustrySta: parseFloat(inputs.layFrequencyIndustryStandard),

    fieldDamagedEggs: parseInt(inputs.damagedEggsCount),
    fieldDamagedEggsPercentage_: inputs.damagedEggsPercentage,
    fieldEggsProduced: inputs.totalEggsProduced,
    fieldLargeEggs: parseInt(inputs.largeEggsCount),
    fieldMediumEggs: parseInt(inputs.mediumEggsCount),
    fieldSmallEggs: parseInt(inputs.smallEggsCount),

    fieldGivenFeed: parseInt(inputs.totalFeedAmount),
    fieldGramsPerBird: inputs.feedGramsPerBird,
    fieldGramPerBirdIndustrySta: parseInt(inputs.totalFeedAmountIndustryStandard),

    fieldHoursOfLight: parseInt(inputs.hoursOfLight),

    fieldWeightOfBird: 0.0,
  };

  return fj;
};

export function setComputedState(values: FarmerJournalFormInputs ) : FarmerJournalFormInputs {


  console.log("before computed", values);

  if (values.mortality != null && values.mortalityProlapse != null) {
    values.mortalityTotal = parseInt(values.mortality) + parseInt(values.mortalityProlapse);
  }

  if (values.initialStock != null && values.mortalityTotal != null) {
    values.closingStock = parseInt(values.initialStock) - values.mortalityTotal;
    values.mortalityPercent = (100.0 * values.mortalityTotal/parseInt(values.initialStock));
  }
  
  if (values.totalFeedAmount != null && values.closingStock != null) {
    values.feedGramsPerBird = parseInt(values.totalFeedAmount) / values.closingStock;
  }

  if (values.smallEggsCount != null && values.mediumEggsCount != null && values.largeEggsCount != null) {
    values.totalEggsProduced = parseInt(values.smallEggsCount) + parseInt(values.mediumEggsCount) + parseInt(values.largeEggsCount);
  }

  if (values.damagedEggsCount != null && values.totalEggsProduced != null) {
    values.damagedEggsPercentage = parseInt(values.damagedEggsCount) / values.totalEggsProduced;
  }

  console.log("after computed", values);

  return values;
}