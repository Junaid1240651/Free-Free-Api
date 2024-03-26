import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import useCreateEndPointId from "./hooks/useCreateEndPointId";

const Home = lazy(() => import("./pages/Home"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/Policy"));
const EndpointLink = lazy(() =>
  import("./components/EndpointInfo/EndpointLink")
);
const EndpointData = lazy(() =>
  import("./components/EndpointInfo/EndpointData")
);

function App() {
  const { Id, createId } = useCreateEndPointId();
  useEffect(() => {
    if (!Id) {
      createId();
    }
  }, [Id, createId]);

  if (!Id) return <LoadingScreen />;

  return (
    <React.Fragment>
      <Suspense fallback={<LoadingScreen />}>
        <Navigation id={Id} />
        <Routes>
          <Route path="/dashboard/:id" element={<EndpointLink />} />
          <Route path="/" element={<Home id={Id} />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path={`/:id/:resource`} element={<EndpointData />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
