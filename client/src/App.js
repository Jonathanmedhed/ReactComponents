import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing/landing";
// Redux
import { Provider } from "react-redux";
import store from "./store";

/** Video */
import VideoViewer from "./components/videos/video-viewer";
const App = () => {
  const [videoView, showVideo] = useState(false);

  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          {videoView === true && <VideoViewer showVideo={showVideo} />}
          <Landing showVideo={showVideo} />
          <footer class="footer">
            <div class="icons">
              <a href="mailto: jonathanmedhed@gmail.com">
                <i class="fas fa-envelope-square fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/jonathanmedhed/">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/Jonathanmedhed">
                <i class="fab fa-github-square fa-2x"></i>
              </a>
              <a href="tel:+353834562685">
                <i class="fas fa-phone-square fa-2x"></i>
              </a>
            </div>
            <div class="copy">
              <i class="far fa-copyright"></i>
              <a>Jonathan Medina 2020</a>
            </div>
          </footer>
        </Router>
      </Provider>
    </Fragment>
  );
};
export default App;
