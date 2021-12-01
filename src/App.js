import React from 'react'
import { Route ,Switch} from 'react-router-dom';
import './assests/style.css'
import Mainarea from './Components/Mainarea';
import PrivateRoute from './Components/PrivateRoute';
import Signup from './pages/Signup';
import Signin from './pages/Signin'
import Modal from './Components/Modal'

function App() {
  return (
    <>
    <Modal/>
    <div>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/signin" component={Signin} />
        {/* <Route eaxct path="/" component={Mainarea} > */}
          <PrivateRoute>
            <Mainarea/>
          </PrivateRoute>
    </Switch>
    </div>
    </>
  );
}

export default App;
