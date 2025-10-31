import React from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

      {/* User Profile Examples */}
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
      <UserProfile name="Bob" age={30} bio="Enjoys cooking and traveling" />
    </div>
  )
}


export default App;
