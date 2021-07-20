import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import  BathroomModalContext from "./context/NewBathroomModal";

import HomePage from "./components/HomePage";
import FeedPage from "./components/FeedPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ReviewPage from "./components/ReviewPage";
import BestPage from "./components/BestPage";
import About from "./components/About";
import Host from "./components/Host";
import Why from "./components/Why"
import * as sessionActions from "./store/session";

import SingleResult from "./components/SingleResult";


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

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


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
            {/* <NewBathroomPage /> */}

          </Route>

          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/why">
            <Why />
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
