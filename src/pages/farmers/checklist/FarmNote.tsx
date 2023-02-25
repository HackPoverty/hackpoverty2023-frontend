import { IonLabel, IonTextarea } from "@ionic/react";
import { useFormContext } from "react-hook-form";
import { t } from "i18next";
import { FarmRecord } from ".";

export const FarmNote = () => {
  const { register } = useFormContext<FarmRecord>();
  return <>
    <div>
      <IonLabel position="floating">{t("notes_ and_concerns_are_admin_or_farmers")}</IonLabel>
      <IonTextarea {...register("note")} />
    </div>
  </>
};
