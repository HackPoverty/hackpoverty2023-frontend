import { IonPage, IonRouterOutlet } from "@ionic/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Redirect, Route, Switch } from "react-router";
import { FormStepA } from "@/pages/farmerJournal/formSteps/FormStepA";
import { FormStepB } from "@/pages/farmerJournal/formSteps/FormStepB";
import { FormStepC } from "@/pages/farmerJournal/formSteps/FormStepC";
import { FormStepD } from "@/pages/farmerJournal/formSteps/FormStepD";

export const FarmerJournalPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FarmerJournalFormInputs>();
  const onSubmit: SubmitHandler<FarmerJournalFormInputs> = (data) =>
    console.log(data);

  return (
    <IonPage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <IonRouterOutlet>
          <Switch>
            <Route
              exact
              path="/farmer-journal/step-1"
              component={() => <FormStepA />}
            />
            <Route exact path="/farmer-journal/step-2" component={FormStepB} />
            <Route exact path="/farmer-journal/step-3" component={FormStepC} />
            <Route exact path="/farmer-journal/step-4" component={FormStepD} />
            <Redirect from="/farmer-journal" to="/farmer-journal/step-1" />
          </Switch>
        </IonRouterOutlet>
      </form>
    </IonPage>
  );
};

type FarmerJournalFormInputs = {
  example: string;
  exampleRequired: string;
};
