import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import  BathroomModalContext from "./context/NewBathroomModal";
// import LoginForm from "./components/LoginFormModal/LoginForm"; //??
// import SignupForm from "./components/SignupFormModal"; //??
// how do i add these components/routes
import HomePage from "./components/HomePage";
import FeedPage from "./components/FeedPage";
import BathroomPage from "./components/BathroomPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ReviewPage from "./components/ReviewPage";
import BestPage from "./components/BestPage";
import About from "./components/About";
import Host from "./components/Host";
import * as sessionActions from "./store/session";
import NewBathroomPage from "./components/NewBathroomModal/NewBathroomPage";
import SingleResult from "./components/SingleResult";

// import NewBathroom from "./components/NewBathroomModal/NewBathroom";
function App() {
  const dispatch = useDispatch();
  const [ isLoaded, setIsLoaded] = useState(false);
  const backgroundRef = useRef();
  const formModalRef = useRef();

  const hideShowBackground= () => {
      if(backgroundRef && formModalRef){
          let current = backgroundRef.current.style.display;

          if(current === "block"){
              backgroundRef.current.style.display = "none"
              formModalRef.current.style.left = "-1000%";
          } else {
                backgroundRef.current.style.display = "block"
                formModalRef.current.style.left = "45%";
          }
      }
    }

  useEffect(() => {     // clarify this!
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

console.log(isLoaded)  // delete this
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/feed/:value">
            <FeedPage />
          </Route>

          <Route path="/best">
            <BestPage />
          </Route>

        {/* COOL BR
          <Route path="/bathroom">
            <BathroomPage />
          </Route> */}

         {/* how to do THIS make sure u do EXACT bc styles will bleed and u already have /bathroom above. */}
          <Route exact path="/bathroom/:id">
            <SingleResult />
          </Route>

          <Route path="/reservation">
            {/* <Reservation /> */}
          </Route>

          <Route path="/review/:id">
            <ReviewPage />
          </Route>

          <Route path="/new">
            <Host />
            <NewBathroomPage />

          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/host">
            <Host />
          </Route>

        </Switch>
      )}
      <div className="background" ref={backgroundRef} onClick={hideShowBackground}></div>
      <BathroomModalContext.Provider value={{formModalRef, hideShowBackground}}>
        <Footer/>
      </BathroomModalContext.Provider>

    </>
  );
}

export default App;
