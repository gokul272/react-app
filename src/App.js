import React from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Footer from './components/Footer.js/Footer';
import contact from './components/pages/contact';
import about from './components/pages/about';
import administration from './components/pages/administration';
import admission from './components/pages/admission';
import acadamic_schedule from './components/pages/acadamic_schedule';
import cources from './components/pages/cources';
import facilities from './components/pages/facilities';
import randd from './components/pages/randd';
import ceo from './components/pages/ceo';
import placements from './components/pages/placements';
import sports from './components/pages/sports';
import examresults from './components/pages/examresults';
import login from './components/pages/login';
import principal from './components/pages/principal';
import dean from './components/pages/dean';
import mech from './components/cources/mech';
import cse from './components/cources/cse';
import ece from './components/cources/ece';
import eee from './components/cources/eee';
import eie from './components/cources/eie';
import civil from './components/cources/civil';
import bme from './components/cources/bme';
import aero from './components/cources/aero';
import ibt from './components/cources/ibt';
import it from './components/cources/it';
import chem from './components/cources/chem';
import arch from './components/cources/arch';
import mba from './components/cources/mba';
import mca from './components/cources/mca';
import mecs from './components/cources/mecs';
import mecse from './components/cources/mecse';
import mepse from './components/cources/mepse';
import meed from './components/cources/meed';
import mers from './components/cources/mers';





function App() {
  return (
   <Router>
     <Header />
      <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/contact' component={contact} />
              <Route path='/about' component={about} />
              <Route path='/administration' component={administration} />
              <Route path='/admission' component={admission} />
              <Route path='/acadamic_schedule' component={acadamic_schedule} />
              <Route path='/cources' component={cources} />
              <Route path='/facilities' component={facilities} />
              <Route path='/randd' component={randd} />
              <Route path='/ceo' component={ceo} />
              <Route path='/placements' component={placements} />
              <Route path='/sports' component={sports} />
              <Route path='/examresults' component={examresults} />
              <Route path='/login' component={login} />
              <Route path='/principal' component={principal} />
              <Route path='/dean' component={dean} />
              <Route path='/mech' component={mech} />
              <Route path='/cse' component={cse} />
              <Route path='/ece' component={ece} />
              <Route path='/eee' component={eee} />
              <Route path='/eie' component={eie} />
              <Route path='/civil' component={civil} />
              <Route path='/bme' component={bme} />
              <Route path='/aero' component={aero} />
              <Route path='/ibt' component={ibt} />
              <Route path='/it' component={it} />
              <Route path='/chem' component={chem} />
              <Route path='/arch' component={arch} />
              <Route path='/mba' component={mba} />
              <Route path='/mca' component={mca} />
              <Route path='/mecs' component={mecs} />
              <Route path='/mecse' component={mecse} />
              <Route path='/mepse' component={mepse} />
              <Route path='/meed' component={meed} />
              <Route path='/mers' component={mers} />
              
     </Switch>
      <Footer />
   </Router>
  );
}

export default App;
