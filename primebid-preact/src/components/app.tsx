import { FunctionalComponent, h, createContext } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../routes/home';
import NotFoundPage from '../routes/notfound';
import SignedOut from '../routes/signedout';
import SignUp from '../routes/sign_up';
import Header from './header';
import firebase from '../services/firebase'
import { UserState, UserStatus} from "../services/UserState";
import { useState, useEffect, useContext } from 'preact/hooks';
import Login from '../routes/login';
import Snack from './snackbar';


const App: FunctionalComponent = (props, state) => {

        const [userState, setUserState] = useState<UserState>(new UserState(undefined))
        useEffect( () => 
        {
            const authStateObserver = (user: firebase.User | null) => 
            {
                if (user) {
                    setUserState(new UserState(user))
                } else {
                    setUserState(new UserState(null))
                }
            }
            firebase.auth().onAuthStateChanged(authStateObserver)
        });
        return (
                <div id="app">
                    <Header user={userState}/>
                    <Router>
                        {userState.value 
                            ? <Route path="/" component={Home} />
                            : <Route path="/" component={SignedOut} />
                        }
                        {!userState.value &&
                           <Route path="/sign-up" component={SignUp} />
                        }
                        {!userState.value &&
                           <Route path="/login" component={Login} />
                        }
                        <NotFoundPage default />
                    </Router>
                    <Snack/>
                </div>
            ); 
};

export default App;
