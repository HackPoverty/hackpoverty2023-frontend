import {
  IonText,
  IonButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
} from "@ionic/react"
import { useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { t } from "i18next"
import React from "react"
import { getFarmerJournalLogs } from "src/api/farmer"
import { useAuth } from "src/auth"

export const FarmerJournalButton = () => {
  const auth = useAuth()
  const farmerId = auth.user?.uid

  const { data, isLoading, error } = useQuery(
    ["farmerJournals", farmerId],
    () => getFarmerJournalLogs(farmerId as string),
    {
      enabled: farmerId !== undefined,
    }
  )

  const lastEntry = data?.slice(-1).pop()
  const lastEntryDateIsToday = dayjs().isSame(dayjs(lastEntry?.created), "day")

  if (isLoading) return null
  if (error)
    throw `Something went wrong with fetching farmer journal data for user ${farmerId}`

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          {lastEntryDateIsToday ? t("farmer_log_completed") : t("complete_log")}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonButton
          routerLink="/farmer-journal"
          expand="block"
          disabled={lastEntryDateIsToday}
        >
          <IonLabel>{t("complete_log_button")}</IonLabel>
        </IonButton>
      </IonCardContent>
    </IonCard>
  )
}
