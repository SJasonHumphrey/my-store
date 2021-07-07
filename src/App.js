import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout'
import Homepage from './components/pages/Homepage';
import Registration from './components/pages/Registration';
import HomepageLayout from './Layouts/HomepageLayout';
import Login from './components/pages/Login';
import { auth, handleUsersProfile } from './Firebase/utils'
import "./default.scss";

const initialState = {
  currentUser: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async userAuth => {
        if(userAuth) {
          const userRef = await handleUsersProfile(userAuth);
          userRef.onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()

              }
            })
          })
        }
        this.setState({
          ...initialState
        });
      });
    }

  componentWillUnmount() {
    this.authListener();  
  }
  render(){
    const {currentUser} = this.state;
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" render={()=>(
          <HomepageLayout currentUser={currentUser}>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route path="/registration" render={()=> (
          <MainLayout currentUser={currentUser}>
            <Registration />
          </MainLayout>
        )} />
              <Route path="/login" render={()=> currentUser ? <Redirect to="/" /> :(
          <MainLayout currentUser={currentUser}>
            <Login />
          </MainLayout>
        )} />
      </Switch>
      </div>
    );
  }
  }


export default App;
