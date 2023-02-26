import {
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from "@ionic/react"
import { useTranslation } from "react-i18next"
import "./LanguageSwitcher.css"

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  return (
    <IonCard>
      <IonGrid className="language-switcher">
        <IonRow className="ion-justify-content-between ion-align-items-center">
          <IonCol>
            <IonText>{t("change_language")}</IonText>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonButton
              fill={i18n.language === "pt" ? "solid" : "outline"}
              onClick={() => {
                i18n.changeLanguage("pt")
              }}
              size="small"
            >
              Português
            </IonButton>
            <IonButton
              fill={i18n.language === "en" ? "solid" : "outline"}
              onClick={() => {
                i18n.changeLanguage("en")
              }}
              size="small"
            >
              English
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCard>
  )
}
