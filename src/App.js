import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Model from "./pages/model";
import Header from "./components/header";
import "./App.scss";

function BackButton() {
  let history = useHistory();
  return (
    <button className="back-button" onClick={() => history.push("/")}>
      <svg className="back-svgIcon" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
      </svg>
    </button>
  );
}

function App() {
  const [showBackButton, setShowBackButton] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const imageDetails = isMobile
    ? { width: window.innerWidth - 32, height: 300 }
    : { width: 724, height: 450 };

  return (
    <Router>
      <Route
        render={({ location }) => (
          <>
            <Header 
              showSunInHeader={!showBackButton} 
              backButton={<BackButton />} 
            />
            <AnimatePresence 
              initial={false} 
              exitBeforeEnter 
              onExitComplete={() => setShowBackButton(false)}
            >
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/"
                  render={() => <Home imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path="/model/:id"
                  render={() => (
                    <Model 
                      imageDetails={imageDetails} 
                      onShowcaseReached={() => setShowBackButton(true)} 
                    />
                  )}
                />
              </Switch>
            </AnimatePresence>
          </>
        )}
      />
    </Router>
  );
}

export default App;