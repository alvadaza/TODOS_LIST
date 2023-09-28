import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NewSection } from './NewSection';

const root = ReactDOM.createRoot(document.getElementById('root'));

const RootComponent = () => (
    <>
      <NewSection />
      <App />
      
    </>
  );
  
  root.render(<RootComponent />);