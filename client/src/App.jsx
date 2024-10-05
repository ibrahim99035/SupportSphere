import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Auth from './pages/Auth';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import News from './pages/News';

import IntellectualPropertyRights from './docs/IntellectualPropertyRights/IntellectualPropertyRights';
import PrivacyPolicy from './docs/Privacy_policy/PrivacyPolicy';
import TermsAndConditions from './docs/Terms_and_Conditions/TermsAndConditions';
import FQA from './docs/FAQ/FAQ';
import HelpCenter from './docs/HelpCenter/HelpCenter';
import Parteners from './pages/Parteners';
import Careers from './pages/Careers';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element = {
                <>
                  <HomePage />
                </>
              }
            />
            <Route
              path='/auth'
              element = {
                <>
                  <Auth />
                </>
              }
            />
            <Route
              path='/news'
              element = {
                <>
                  <News />
                </>
              }
            />
            <Route
              path='/about-us'
              element = {
                <>
                  <AboutUs />
                </>
              }
            />
            <Route
              path='/contact-us'
              element = {
                <>
                  <Contact />
                </>
              }
            />
            <Route
              path='/intellectual-property-rights'
              element = {
                <>
                  <IntellectualPropertyRights />
                </>
              }
            />
            <Route
              path='/privacy-policy'
              element = {
                <>
                  <PrivacyPolicy />
                </>
              }
            />
            <Route
              path='/terms-and-conditions'
              element = {
                <>
                  <TermsAndConditions />
                </>
              }
            />
            <Route
              path='/fqa'
              element = {
                <>
                  <FQA />
                </>
              }
            />
            <Route
              path='/help-center'
              element = {
                <>
                  <HelpCenter />
                </>
              }
            />
            <Route
              path='/parteners'
              element = {
                <>
                  <Parteners />
                </>
              }
            />
            <Route
              path='/careers'
              element = {
                <>
                  <Careers />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App