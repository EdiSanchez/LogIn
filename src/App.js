import React from 'react';
import './App.css';
import Auth from './Auth';
import{ useFirebaseApp, useUser } from 'reactfire';

function App(){  
  const user = useUser();
  const formLogIn = {
    padding: '30px', borderRadius: '20px', border: '1px solid gray'
}
  return(
    <div className="container">
      {/* {user && <div style={formLogIn}> Usuario: {user.email}<br/></div>} */}
      <Auth/>
    </div>
  );
  
}

export default App;
