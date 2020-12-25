import { Route, Switch } from "react-router-dom";
import { Challenge } from "./containers/Challenge";
import { ChallengesList } from "./containers/ChallengesList";
import { NewChallenge } from "./containers/NewChallenge";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ChallengesList} />
      <Route exact path="/challenge/:challengeId" component={Challenge} />
      <Route exact path="/new-challenge" component={NewChallenge} />
    </Switch>
  );
}

export default App;
