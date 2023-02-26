import { IonCard, IonCardContent } from "@ionic/react"
import { TechnicianVisit } from "src/types/contentTypes"
import { Node } from "src/types/highLevelTypes"

interface PastVisitRecordProps {
  technicianVisit: Node<TechnicianVisit>
}

export const PastVisitRecord = ({ technicianVisit }: PastVisitRecordProps) => {
  return <IonCard button routerLink={`/technician-visit/${technicianVisit.id}`} class="ion-no-margin ion-margin-vertical">
    <IonCardContent>
      <p><strong>{technicianVisit.title}</strong></p>
      <p>{new Date(technicianVisit.created).toLocaleDateString("en-us", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
      </p>
    </IonCardContent>
  </IonCard>
}