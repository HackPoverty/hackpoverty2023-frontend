import {
  IonContent,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNavLink,
} from "@ionic/react"
import { useFormContext, useWatch } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { FarmerJournalFormInputs } from ".."
import { FormStepE } from "./FormStepE"
import React, { useMemo } from "react"

export const EntireForm = () => {
  const { t } = useTranslation();
  const { register, watch, setValue, getValues } = useFormContext<FarmerJournalFormInputs>()
    

  const useFormValues = () => {  
    return {
      ...useWatch(), // subscribe to form value updates
      ...getValues(), // always merge with latest form values
    }
  }

  const values = useFormValues();
  console.log(values);

  
  // Callback version of watch.  It's your responsibility to unsubscribe when done.
  React.useEffect(() => {      
    const subscription = watch((value, { name }) => {
      
      switch(name) {
        case "closingStock":
        case "totalFeedAmount":
          if (value.totalFeedAmount != null && value.closingStock != null) {
            setValue("feedGramsPerBird", value.totalFeedAmount / value.closingStock);
          }
          break;

        case "mortality":
        case "mortalityProlapse":
          if (value.mortality != null && value.mortalityProlapse != null) {
            setValue("mortalityTotal", value.mortality + value.mortalityProlapse);
          }
          break;

        case "initialStock":
        case "mortalityTotal":
          if (value.initialStock != null && value.mortalityTotal != null) {
            setValue("closingStock", value.initialStock - value.mortalityTotal);
            setValue("mortalityPercent", (100.0 * value.mortalityTotal/value.initialStock) );
          }
          break;

        case "smallEggsCount":
        case "mediumEggsCount":
        case "largeEggsCount":
          if (value.smallEggsCount != null && value.mediumEggsCount != null && value.largeEggsCount != null) {
            setValue("totalEggsProduced", value.smallEggsCount + value.mediumEggsCount + value.largeEggsCount);
          }
          break;
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, values]);


  // const updateFeedPerBird = () => {
  //   const value = getValues();
  //   if (value.totalFeedAmount && value.closingStock) {
  //     setValue("feedGramsPerBird", value.totalFeedAmount / value.closingStock);
  //   }
  // };

  // const [mortality, mortality_prolapse] = watch(["mortality", "mortalityProlapse"]);

  // if (mortality && mortality_prolapse) {
  //   setValue("mortalityTotal", mortality + mortality_prolapse);
  // }

  // useMemo(() => {
  //   console.log("hello from use Memo", values)
  //   if (mortality !== null && mortality_prolapse !== null) {
  //     setValue("mortalityTotal", mortality + mortality_prolapse);
  //   }
  // }, [mortality, mortality_prolapse]);


  // const updateClosingStockAndMortialityPrecent = () => {
  //   const value = e.target.form.values;
  //   if (value.initialStock && value.mortalityTotal) {
  //     setValue("closingStock", value.initialStock - value.mortalityTotal);
  //     setValue("mortalityPercent", (100.0 * value.mortalityTotal/value.initialStock) );
  //   }
  // }

  // const updateEggCount = () => {
  //   const value = values;
  //   if (value.smallEggsCount !== null && value.mediumEggsCount !== null && value.largeEggsCount !== null) {
  //     setValue("totalEggsProduced", value.smallEggsCount + value.mediumEggsCount + value.largeEggsCount);
  //   }
  // }

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>{t('chickens')}</IonListHeader>
        <IonItem>
          <IonLabel position="stacked">{t('initial_stock')}</IonLabel>
          <IonInput type="number" {...register("initialStock")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('mortality')} ({t('number_of_chicken_deaths')})</IonLabel>
          <IonInput type="number" {...register("mortality")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('mortality_prolapse')}</IonLabel>
          <IonInput type="number" {...register("mortalityProlapse")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{`Total Mortality`}</IonLabel>
          <IonInput type="number" {...register("mortalityTotal")} disabled />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{`Total Mortality Percent`}</IonLabel>
          <IonInput type="number" step="0.01" {...register("mortalityPercent")} disabled />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{"Closing Stock"}</IonLabel>
          <IonInput type="number" {...register("closingStock")} disabled />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('large_eggs_produced')}</IonLabel>
          <IonInput type="number" {...register("largeEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('medium_eggs_produced')}</IonLabel>
          <IonInput type="number" {...register("mediumEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('small_eggs_produced')}</IonLabel>
          <IonInput type="number" {...register("smallEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{`Total Eggs Produced`}</IonLabel>
          <IonInput type="number" value={getValues("totalEggsProduced")} disabled />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('number_of_damage_eggs')}</IonLabel>
          <IonInput type="number" {...register("damagedEggsCount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{`Percentage of Damaged Eggs`}</IonLabel>
          <IonInput type="number" {...register("damagedEggsPercentage")} disabled />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('lay_frequency')}</IonLabel>
          <IonInput type="number" {...register("layFrequency")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('industry_standard')}</IonLabel>
          <IonInput
            type="number"
            {...register("layFrequencyIndustryStandard")}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('total_feed_given')}</IonLabel>
          <IonInput type="number" {...register("totalFeedAmount")} />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{`Grams per Bird`}</IonLabel>
          <IonInput type="number" {...register("feedGramsPerBird")} disabled />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{t('industry_standard')}</IonLabel>
          <IonInput
            type="number"
            {...register("totalFeedAmountIndustryStandard")}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">{`Hours of Light`}</IonLabel>
          <IonInput
            type="number"
            {...register("hoursOfLight")}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">
            {t("notes_and_concerns_for_admins_or_technicians")}
          </IonLabel>
          <IonInput type="text" {...register("otherNotes")} />
        </IonItem>
      </IonList>
      <IonNavLink routerDirection="forward" component={() => <FormStepE />}>
        <IonButton>{t('next')}</IonButton>
      </IonNavLink>
    </IonContent>
  )
}
