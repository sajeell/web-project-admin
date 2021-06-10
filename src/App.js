import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { firebase } from '@firebase/app'
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer
} from "@react-firebase/auth"

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import SignIn from './components/signIn/SignIn';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBvSlnCvuCh3YeP_ZbBGVvXy38uBsyyyB4",
    authDomain: "web-project-d0584.firebaseapp.com",
    projectId: "web-project-d0584",
    storageBucket: "web-project-d0584.appspot.com",
    messagingSenderId: "1094094419595",
    appId: "1:1094094419595:web:9b3c53ccece7acaa5f068e",
    measurementId: "G-K89DLNRH69"
  }

  if (!firebase.apps.length) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
  } else {
    firebase.app()
  }
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/signin">
              <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                  if (isSignedIn === true) {
                    return (
                      <div>
                        <h3>Signed in</h3>
                      </div>
                    )
                  } else {
                    return <SignIn />
                  }
                }}
              </FirebaseAuthConsumer>
            </Route>
          </Switch>
        </div>
      </Router>
    </FirebaseAuthProvider>
  );
}

export default App;
