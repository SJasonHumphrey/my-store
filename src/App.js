import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout'
import Homepage from './components/pages/Homepage';
import Registration from './components/pages/Registration';
import HomepageLayout from './Layouts/HomepageLayout';
import "./default.scss";


function App() {
  return (
    <>
    <div className="App">
    <Switch>
      <Route exact path="/" render={()=>(
        <HomepageLayout>
          <Homepage />
        </HomepageLayout>
      )} />
      <Route path="/registration" render={()=> (
        <MainLayout>
          <Registration />
        </MainLayout>
      )} />
    </Switch>
    </div>
    </>
  );
}

export default App;
