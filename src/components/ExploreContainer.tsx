import "./ExploreContainer.css"
import { useTranslation } from "react-i18next"

interface ContainerProps {
  name: string
}

const ExploreContainer: React.FC<ContainerProps> = ({
  name,
}: {
  name: string
}) => {
  const { t } = useTranslation()
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>{t("welcome message")}</p>
    </div>
  )
}

export default ExploreContainer
