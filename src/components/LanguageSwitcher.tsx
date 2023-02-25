import {
  IonButton,
  IonItem,
  IonNote,
  IonText,
} from "@ionic/react"
import { useTranslation } from "react-i18next"

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  return (    
    <IonItem class="language-switcher">
      <IonNote style={{ marginRight: 'auto' }}>
        <IonText>{t('change_language')}</IonText> &nbsp;
      </IonNote>

      {/* TODO: Make the current language be fill="solid" */}
      <IonButton fill="outline" onClick={() => {
        i18n.changeLanguage('pt');
      }}>Português</IonButton>

      <IonButton fill="outline" onClick={() => {
        i18n.changeLanguage('en');
      }}>English</IonButton>
    </IonItem>
  )
}