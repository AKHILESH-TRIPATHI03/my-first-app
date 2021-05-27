import { Route, Switch } from "react-router-dom";
import AllMeetuppage from "./pages/AllMeetups";
import Favoritespage from "./pages/Favorites";
import NewMeetuppage from "./pages/NewMeetups";
// import MainNAvigation from "./components/layout/MainNAviagtion";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetuppage />
        </Route>
        <Route path="/favorites">
          <Favoritespage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetuppage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
