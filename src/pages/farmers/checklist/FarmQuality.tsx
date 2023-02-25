import { RadioOptions } from "@/components/farmers/RadioOptions";
import { IonInput, IonLabel } from "@ionic/react";
import { t } from "i18next";
import { useFormContext } from "react-hook-form";
import { FarmRecord, QualityTypes } from ".";

export const FarmQuality = () => {
  const { register } = useFormContext<FarmRecord>()
  return <>
    <RadioOptions label="Light Quality" options={QualityTypes} name="quality.light" />
    <RadioOptions label="Feed Quality" options={QualityTypes} name="quality.feed" />
    <RadioOptions label="Water Quality" options={QualityTypes} name="quality.water" />
    <RadioOptions label="Bedding Quality" options={QualityTypes} name="quality.bedding" />
    <RadioOptions label="Ventilation Quality" options={QualityTypes} name="quality.ventilation" />
    <div>
      <IonLabel position="stacked">{t("note_comments_or_concerns")}</IonLabel>
      <IonInput {...register("quality.note")} />
    </div>
  </>
};
