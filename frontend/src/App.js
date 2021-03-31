import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";


// import LoginForm from "./components/LoginFormModal/LoginForm"; //??
// import SignupForm from "./components/SignupFormModal"; //??
// how do i add these components/routes
import HomePage from "./components/HomePage";
import FeedPage from "./components/FeedPage";
import BathroomPage from "./components/BathroomPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import NewBathroomPage from "./components/NewBathroomPage";
import ReviewPage from "./components/ReviewPage";
import BestPage from "./components/BestPage";
import SearchBar from "./components/SearchBar";
import About from "./components/About";
import Host from "./components/Host";

import * as sessionActions from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [ isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {     // clarify this!
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
console.log(isLoaded)
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage />
            <Footer />
          </Route>

          <Route path="/feed">
            <FeedPage />
            <Footer />
          </Route>

          <Route path="/best">
            <BestPage />
            <Footer />
          </Route>

          <Route path="/bathroom">
            <BathroomPage />
            <Footer />
          </Route>

          <Route path="/reservation">
            {/* <Reservation /> */}
          </Route>

          <Route path="/review">
            <ReviewPage />
            <Footer />
          </Route>

          <Route path="/new">
            <NewBathroomPage />
            <Footer />
          </Route>

          <Route path="/about">
            <About />
            <Footer />
          </Route>

          <Route path="/host">
            <Host />
            <Footer />
          </Route>

        </Switch>

      )}
    </>
  );
}

export default App;
