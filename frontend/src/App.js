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
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/feed">
            <FeedPage />
          </Route>

          <Route path="/best">
            <BestPage />
          </Route>

          <Route path="/bathroom">
            <BathroomPage />
          </Route>

          <Route path="/reservation">
            {/* <Reservation /> */}
          </Route>

          <Route path="/review">
            <ReviewPage />

          </Route>

          <Route path="/new">
            <Host />

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
