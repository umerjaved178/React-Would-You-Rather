import './App.css';
import Layout from './components/Layout/Layout';
import {Switch, Route} from "react-router-dom";
import EntirePool from './containers/EntirePool/EntirePool';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route to="/" component={EntirePool} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
