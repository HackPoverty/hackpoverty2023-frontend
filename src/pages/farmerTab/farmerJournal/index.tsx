import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLoading,
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
import { postFarmerJournal } from "src/api/farmer"
import { FarmerJournal as FarmJounalType } from "src/types/contentTypes"
import { useMutation } from "@tanstack/react-query"

export const FarmerJournal = () => {
  const { t } = useTranslation();
  const modal = useRef<HTMLIonModalElement>(null)
  const methods = useForm<FarmerJournalFormInputs>({
    defaultValues: defaultInputValues(),
  });
  
  const { mutate, isLoading, isSuccess, isError } = useMutation(postFarmerJournal, {
    onSettled(data, error) {
      modal.current?.dismiss()

      if (error) {
        console.log("Farmer data", data);
        console.error("Farmer journal failed: ", error);
      } else {
        console.log("Farmer data was successful!", data);
      }
    },
  })

  const onSubmit: SubmitHandler<FarmerJournalFormInputs> = (data) => {

    const computedData = setComputedState(data);
    
    const farmerJournal = convert(computedData);

    // if (auth.user == undefined) {
    //   console.error("User is undefined when trying to create a farmer journal");
    //   return Promise.reject("User is undefined when trying to create a farmer journal");
    // }

    return mutate({ journal: farmerJournal });
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

        <IonLoading isOpen={isLoading} message={t('saving_journal') || ''}/>

        <IonAlert
          isOpen={isError}
          header={t('saved_error_message_header') || ''}
          message={t('saved_error_message') || ''}
          buttons={['OK']}
        />

        <IonAlert
          isOpen={isSuccess}
          header={t('saved_success_message_header') || ''}
          message={t('saved_success_message') || ''}
          buttons={['OK']}
        />
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

function defaultInputValues(): { initialStock?: string | undefined; mortality?: string | undefined; mortalityProlapse?: string | undefined; mortalityTotal?: number | undefined; mortalityPercent?: number | undefined; closingStock?: number | undefined; largeEggsCount?: string | undefined; mediumEggsCount?: string | undefined; smallEggsCount?: string | undefined; totalEggsProduced?: number | undefined; damagedEggsCount?: string | undefined; damagedEggsPercentage?: number | undefined; layFrequency?: string | undefined; layFrequencyIndustryStandard?: string | undefined; totalFeedAmount?: string | undefined; feedGramsPerBird?: number | undefined; totalFeedAmountIndustryStandard?: string | undefined; hoursOfLight?: string | undefined; otherNotes?: string | undefined } | ((payload?: unknown) => Promise<FarmerJournalFormInputs>) | undefined {
  return {
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
    hoursOfLight: '0',
    otherNotes: "",
  }
}

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


  // console.log("before computed", values);

  if (values.mortality != null && values.mortalityProlapse != null) {
    values.mortalityTotal = parseInt(values.mortality) + parseInt(values.mortalityProlapse);
  }

  if (values.initialStock != null && values.mortalityTotal != null) {
    values.closingStock = parseInt(values.initialStock) - values.mortalityTotal;
    values.mortalityPercent = (100.0 * values.mortalityTotal/parseInt(values.initialStock));
    if (Number.isNaN(values.mortalityPercent)) {
      values.mortalityPercent = 0.0;
    }
  }
  
  if (values.totalFeedAmount != null && values.closingStock != null) {
    values.feedGramsPerBird = parseInt(values.totalFeedAmount) / values.closingStock;

    if (Number.isNaN(values.feedGramsPerBird)) {
      values.feedGramsPerBird = 0.0;
    }
  }

  if (values.smallEggsCount != null && values.mediumEggsCount != null && values.largeEggsCount != null) {
    values.totalEggsProduced = parseInt(values.smallEggsCount) + parseInt(values.mediumEggsCount) + parseInt(values.largeEggsCount);
  }

  if (values.damagedEggsCount != null && values.totalEggsProduced != null) {
    values.damagedEggsPercentage = parseInt(values.damagedEggsCount) / values.totalEggsProduced;

    if (Number.isNaN(values.damagedEggsPercentage)) {
      values.damagedEggsPercentage = 0.0;
    }
  }

  // console.log("after computed", values);

  return values;
}

export type FarmerJournalArgs = {
  submitIsLoading: boolean,
}

export type FarmerJournalFormPart = (args: FarmerJournalArgs) => JSX.Element;