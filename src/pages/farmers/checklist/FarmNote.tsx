import { IonItem, IonLabel, IonTextarea } from "@ionic/react";
import { t } from "i18next";
import { useFormContext } from "react-hook-form";
import { TechnicianVisit } from "src/types/contentTypes";

export const FarmNote = () => {
  const { register } = useFormContext<TechnicianVisit>();
  return <IonItem fill="solid">
    <IonLabel position="stacked">{t("notes_ and_concerns_are_admin_or_farmers")}</IonLabel>
    <IonTextarea {...register("fieldVisitComments")} autoGrow rows={5} />
  </IonItem>
};
