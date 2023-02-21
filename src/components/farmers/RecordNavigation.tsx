import { IonButton } from "@ionic/react";
import { useHistory } from "react-router-dom";

export const RecordNavigation: React.FC<{ nextLink: string }> = ({ nextLink }) => {
  const history = useHistory();
  return (
    <>
      <IonButton onClick={() => history.goBack()}>Back</IonButton>
      <IonButton routerLink={nextLink}>Next</IonButton>
    </>
  )
}