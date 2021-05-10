import "./App.css";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import EntirePool from "./containers/EntirePool/EntirePool";
import Results from "./components/Detailed/Results/Results";
import Vote from "./components/Detailed/Vote/Vote";
import NewQuestions from "./components/NewQuestion/NewQuestions";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={EntirePool} />
          <Route path="/results" component={Results} />
          <Route path="/vote" component={Vote} />
          <Route path="/new-question" component={NewQuestions} />
          <Route path="/leader-board" component={LeaderBoard} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
