import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      {/* Existing components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Welcome message */}
      <WelcomeMessage />

      {/* UserProfile examples */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys cooking and traveling" />
    </div>
  );
}

export default App;
