import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react"

interface Props {
  index: number
  date: Date
}

export const PastVisitRecord: React.FC<Props> = ({ date, index }) => {
  return <IonCard class="ion-no-margin ion-margin-vertical">
    <IonCardContent>
      <p><strong>Date visited: </strong>{date.toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })}
      </p>
    </IonCardContent>
  </IonCard>
}