import {
  IonList,
  IonItem,
  IonNavLink,
  IonButton,
  IonListHeader,
  IonContent,
} from "@ionic/react"
import { useFormContext } from "react-hook-form"
import { FarmerJournalFormInputs, setComputedState } from ".."
import { FormStepD } from "./FormStepD"
import { t } from "i18next"

export const FormStepE = () => {
  const { watch } = useFormContext<FarmerJournalFormInputs>()
  const watchAllFields = watch();

  // FIXME: Hack to display computed state
  const computedState = setComputedState(watchAllFields);

  let dummycounter = 0;

  return (
    <IonContent className="page">
      <IonList>
        <IonListHeader>{t("confirm_your_submission")}</IonListHeader>
        {Object.keys(computedState).map((key) => {
          const keyConvert = key as keyof typeof computedState;
          let value;
          console.log(key);

          const linebreakKeys : (keyof typeof computedState)[] = [
            'closingStock', 
            'totalEggsProduced',
            'layFrequencyIndustryStandard',
            'hoursOfLight',
            'otherNotes',
          ];
          const addLineBreak = linebreakKeys.indexOf(keyConvert) !== -1;

          switch (keyConvert) {
            case 'mortalityPercent':
            case 'damagedEggsPercentage':
              value = computedState[keyConvert].toFixed(2) + "%";
              break;

            case 'feedGramsPerBird':
              value = computedState[keyConvert].toFixed(2) + " g";
              break;

            default:
              value = computedState[keyConvert];
              break;
          }
           
          return (
            <>
              <IonItem key={key} style={{paddingBottom: addLineBreak ? '2em' : null}}>
                <strong style={{textTransform: "capitalize"}}>{uncamelize(key)}</strong>: {value}
              </IonItem>
            </>
          )
        })}
      </IonList>
      <IonNavLink routerDirection="back" component={() => <FormStepD />}>
        <IonButton>{t("back").toUpperCase()}</IonButton>
      </IonNavLink>
      <IonButton type="submit">{t("submit")}</IonButton>
    </IonContent>
  )
}

function uncamelize(str: string): string {
  return str.replace(/([A-Z])/g, ' $1');
}
