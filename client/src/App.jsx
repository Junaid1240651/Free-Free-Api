import Navigation from "./components/Navigation/Navigation";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/termsOfService">
          <TermsOfService />
        </Route>
        <Route paht="privacyPolicy">
          <PrivacyPolicy />
        </Route>
      </Switch>
      <Footer/>
      </>
   
  );
}
